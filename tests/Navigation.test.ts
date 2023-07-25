import {
  buildParentChildKey,
  computeFlatInfo,
  computeInclusiveTimes,
  generateDotScript,
  getChildrenTable, GetLinkToGraph, GetLinkToGraphTemplate,
  getMetrics,
  getPossibleMetrics,
  parseParentChild
} from "../src/Services";


describe('Navigation', () => {
  test('GetLinkToGraph', async () => {
    expect(GetLinkToGraph('test')).toBe('file/test');
  });
  test('GetLinkToGraphTemplate', async () => {
    expect(GetLinkToGraphTemplate()).toBe('file/:filename');
  });
});
