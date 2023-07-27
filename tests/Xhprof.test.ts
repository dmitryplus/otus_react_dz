import {
  buildParentChildKey,
  computeFlatInfo,
  computeInclusiveTimes,
  generateDotScript,
  getChildrenTable,
  getMetrics,
  getPossibleMetrics,
  parseParentChild,
} from '../src/Services';

const emptyXhprof = { 'main()': { ct: 1, wt: 6, cpu: 0, mu: 824, pmu: 0 } };

const emptyXhprofWithEmptyTimes = { 'main()': { ct: 1, wt: 0, cpu: 0, mu: 824, pmu: 0 } };

const emptyXhprofWithMaxTimes = { 'main()': { ct: 0, wt: 5000, cpu: 0, mu: 0, pmu: 0 } };

const oneChildXhprof = {
  'main()==>FirstTestClass::getValue': { ct: 1000, wt: 2074, cpu: 3316, mu: 856, pmu: 0 },
  'main()': { ct: 1, wt: 6955, cpu: 9964, mu: 1464, pmu: 0 },
};

const twoChildXhprof = {
  'SecondTestClass::getValue==>FirstTestClass::getValue': { ct: 1000, wt: 1572, cpu: 3328, mu: 872, pmu: 0 },
  'main()==>SecondTestClass::getValue': { ct: 1000, wt: 5432, cpu: 6650, mu: 1472, pmu: 0 },
  'main()': { ct: 1, wt: 7717, cpu: 6650, mu: 2080, pmu: 0 },
};

const repeatCallXhprof = {
  'SecondTestClass::getValue==>FirstTestClass::getValue': { ct: 1000, wt: 1902, cpu: 0, mu: 872, pmu: 0 },
  'main()==>SecondTestClass::getValue': { ct: 1000, wt: 6947, cpu: 6602, mu: 1472, pmu: 0 },
  'main()==>FirstTestClass::getValue': { ct: 1, wt: 2, cpu: 0, mu: 536, pmu: 0 },
  'main()': { ct: 1, wt: 10201, cpu: 9929, mu: 2680, pmu: 0 },
};

describe('Xhprof', () => {
  test('buildParentChildKey', async () => {
    expect(buildParentChildKey('parent', 'child')).toBe('parent==>child');
    expect(buildParentChildKey(null, 'child')).toBe('child');
  });

  test('getPossibleMetrics', async () => {
    expect(getPossibleMetrics()).toStrictEqual({
      wt: ['Wall', 'microsecs', 'walltime'],
      ut: ['User', 'microsecs', 'user cpu time'],
      st: ['Sys', 'microsecs', 'system cpu time'],
      cpu: ['Cpu', 'microsecs', 'cpu time'],
      mu: ['MUse', 'bytes', 'memory usage'],
      pmu: ['PMUse', 'bytes', 'peak memory usage'],
      samples: ['Samples', 'samples', 'cpu time'],
    });
  });

  test('getMetrics', async () => {
    expect(getMetrics()).toStrictEqual(['wt', 'cpu', 'mu', 'pmu']);
  });

  test('computeInclusiveTimes', async () => {
    expect(computeInclusiveTimes(emptyXhprof)).toStrictEqual(emptyXhprof);

    expect(computeInclusiveTimes(oneChildXhprof)).toStrictEqual({
      'FirstTestClass::getValue': { ct: 1000, wt: 2074, cpu: 3316, mu: 856, pmu: 0 },
      'main()': { ct: 1, wt: 6955, cpu: 9964, mu: 1464, pmu: 0 },
    });

    expect(computeInclusiveTimes(repeatCallXhprof)).toStrictEqual({
      'FirstTestClass::getValue': { ct: 1001, wt: 1904, cpu: 0, mu: 1408, pmu: 0 },
      'SecondTestClass::getValue': { ct: 1000, wt: 6947, cpu: 6602, mu: 1472, pmu: 0 },
      'main()': { ct: 1, wt: 10201, cpu: 9929, mu: 2680, pmu: 0 },
    });
  });

  test('computeFlatInfo', async () => {
    expect(computeFlatInfo({})).toStrictEqual({
      symTable: [],
      totals: { ct: 0, wt: 0, ut: 0, st: 0, cpu: 0, mu: 0, pmu: 0, samples: 0 },
    });

    expect(computeFlatInfo(emptyXhprof)).toStrictEqual({
      symTable: {
        'main()': {
          ct: 1,
          wt: 6,
          cpu: 0,
          mu: 824,
          pmu: 0,
          excl_wt: 6,
          excl_cpu: 0,
          excl_mu: 824,
          excl_pmu: 0,
        },
      },
      totals: { ct: 1, wt: 6, ut: 0, st: 0, cpu: 0, mu: 824, pmu: 0, samples: 0 },
    });

    expect(computeFlatInfo(oneChildXhprof)).toStrictEqual({
      symTable: {
        'FirstTestClass::getValue': {
          ct: 1000,
          wt: 2074,
          cpu: 3316,
          mu: 856,
          pmu: 0,
          excl_wt: 2074,
          excl_cpu: 3316,
          excl_mu: 856,
          excl_pmu: 0,
        },
        'main()': {
          ct: 1,
          wt: 6955,
          cpu: 9964,
          mu: 1464,
          pmu: 0,
          excl_wt: 6955,
          excl_cpu: 9964,
          excl_mu: 1464,
          excl_pmu: 0,
        },
      },
      totals: {
        ct: 1001,
        wt: 6955,
        ut: 0,
        st: 0,
        cpu: 9964,
        mu: 1464,
        pmu: 0,
        samples: 0,
      },
    });
  });

  test('getChildrenTable', async () => {
    expect(getChildrenTable(emptyXhprof)).toStrictEqual({});
    expect(getChildrenTable(oneChildXhprof)).toStrictEqual({ 'main()': ['FirstTestClass::getValue'] });
  });

  test('parseParentChild', async () => {
    expect(parseParentChild('main()')).toStrictEqual({ child: 'main()', parent: null });

    expect(parseParentChild('main()==>Nota\\Mentors\\Rest\\Order::composeReschedules')).toStrictEqual({
      parent: 'main()',
      child: 'Nota\\Mentors\\Rest\\Order::composeReschedules',
    });
  });

  test('generateDotScript', async () => {
    const needResult =
      'digraph call_graph {\n' +
      'N0[shape=octagon, label="Total: 0.006 ms\\nmain()\\nExcl: 0.006 ms (100.0%)\\n1 total calls", width=5.0, height=3.5, fontsize=35, style=filled, fillcolor=red];\n' +
      '\n}';

    expect(generateDotScript(emptyXhprof)).toBe(needResult);
  });

  test('generateDotScript for repeat call', async () => {
    const needResult =
      'digraph call_graph {\n' +
      'N0[shape=box, label="FirstTestClass::getValue\\nInc: 1.904 ms (18.7%)\\nExcl: 1.904 ms (18.7%)\\n1001 total calls", width=0.9, height=0.7, fontsize=24, style=filled, fillcolor=yellow];\n' +
      'N1[shape=box, label="SecondTestClass::getValue\\nInc: 6.947 ms (68.1%)\\nExcl: 6.947 ms (68.1%)\\n1000 total calls", width=3.4, height=2.4, fontsize=33, style=filled, fillcolor=red];\n' +
      'N2[shape=octagon, label="Total: 10.201 ms\\nmain()\\nExcl: 10.201 ms (100.0%)\\n1 total calls", width=5.0, height=3.5, fontsize=35, style=filled, fillcolor=red];\n' +
      'N1 -> N0[arrowsize=2, color=grey, style="setlinewidth(10)", label="1000 calls", headlabel="99.9%", taillabel="27.4%" ];\n' +
      'N2 -> N1[arrowsize=2, color=grey, style="setlinewidth(10)", label="1000 calls", headlabel="100.0%", taillabel="68.1%" ];\n' +
      'N2 -> N0[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="0.1%", taillabel="0.0%" ];' +
      '\n\n}';

    expect(generateDotScript(repeatCallXhprof)).toBe(needResult);
  });

  test('generateDotScript for repeat call with treshold', async () => {
    const needResult =
      'digraph call_graph {\n' +
      'N0[shape=box, label="SecondTestClass::getValue\\nInc: 6.947 ms (68.1%)\\nExcl: 6.947 ms (68.1%)\\n1000 total calls", width=3.4, height=2.4, fontsize=33, style=filled, fillcolor=red];\n' +
      'N1[shape=octagon, label="Total: 10.201 ms\\nmain()\\nExcl: 10.201 ms (100.0%)\\n1 total calls", width=5.0, height=3.5, fontsize=35, style=filled, fillcolor=red];\n' +
      'N1 -> N0[arrowsize=2, color=grey, style="setlinewidth(10)", label="1000 calls", headlabel="100.0%", taillabel="68.1%" ];\n' +
      '\n}';

    expect(generateDotScript(repeatCallXhprof, 0.5)).toBe(needResult);
  });

  test('generateDotScript for empty times', async () => {
    //console.log(generateDotScript(emptyXhprofWithEmptyTimes));

    const needResult =
      'digraph call_graph {\n' +
      'N0[shape=octagon, label="Total: 0 ms\\nmain()\\nExcl: 0.000 ms (-NaN%)\\n1 total calls", width=0.3, height=0.2, fontsize=12];\n' +
      '\n}';

    expect(generateDotScript(emptyXhprofWithEmptyTimes)).toBe(needResult);
  });

  test('generateDotScript for max times', async () => {
    const needResult =
      'digraph call_graph {\n' +
      'N0[shape=octagon, label="Total: 5 ms\\nmain()\\nExcl: 5.000 ms (100.0%)\\n0 total calls", width=5.0, height=3.5, fontsize=35, style=filled, fillcolor=red];\n' +
      '\n}';

    expect(generateDotScript(emptyXhprofWithMaxTimes)).toBe(needResult);
  });
});
