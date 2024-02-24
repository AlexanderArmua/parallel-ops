import workerpool from "workerpool";

export async function parallelMap<T, R>(
    list: T[],
    callback: (param: T) => R | Promise<R>
): Promise<R[]> {
    const pool = workerpool.pool();

    const promises = list.map(item => pool.exec(callback, [item]));

    const results = await Promise.all(promises);

    pool.terminate();

    return results;
}