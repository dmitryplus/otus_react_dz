type xprofParams = {
    ct: number,
    wt: number,
    cpu: number,
    mu: number,
    pmu: number,
};

export type Xhprof = { [name: string]: xprofParams };
