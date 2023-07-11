export type xprofParams = {
    ct?: number, //количество вызовов в контексте запроса
    wt: number, //walltime (microsecs)  время выполнения запроса
    cpu?: number, //cpu time (microsecs) время, затраченное процессором на обработку запроса
    mu?: number, //memory usage (bytes) изменение потребления памяти после вызова метода
    pmu?: number, //peak memory usage  (bytes) изменение пикового потребления памяти после вызова метода
    ut?: number,
    st?: number,
    samples?: number,
    id?: number,
    excl_wt?: number,
};


export type Xhprof = { [name: string]: xprofParams };
