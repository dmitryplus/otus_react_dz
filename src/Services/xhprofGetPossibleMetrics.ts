export const xhprofGetPossibleMetrics = () => {
  return {
    wt: ['Wall', 'microsecs', 'walltime'],
    ut: ['User', 'microsecs', 'user cpu time'],
    st: ['Sys', 'microsecs', 'system cpu time'],
    cpu: ['Cpu', 'microsecs', 'cpu time'],
    mu: ['MUse', 'bytes', 'memory usage'],
    pmu: ['PMUse', 'bytes', 'peak memory usage'],
    samples: ['Samples', 'samples', 'cpu time'],
  };
};
