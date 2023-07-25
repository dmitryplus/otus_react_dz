import {
  buildParentChildKey,
  computeFlatInfo,
  computeInclusiveTimes,
  generateDotScript,
  getChildrenTable,
  getMetrics,
  getPossibleMetrics,
} from '../src/Services';

const emptyXhprof = { 'main()': { ct: 1, wt: 6, cpu: 0, mu: 824, pmu: 0 } };

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
  });

  test('computeInclusiveTimes', async () => {
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
  });

  test('getChildrenTable', async () => {
    expect(getChildrenTable(emptyXhprof)).toStrictEqual({});
  });

  test('generateDotScript', async () => {
    const needResult =
      'digraph call_graph {\n' +
      'N0[shape=octagon, label="Total: 0.006 ms\\nmain()\\nExcl: 0.006 ms (100.0%)\\n1 total calls", width=5.0, height=3.5, fontsize=35, style=filled, fillcolor=red];\n' +
      '\n}';

    expect(generateDotScript(emptyXhprof)).toBe(needResult);
  });
});
