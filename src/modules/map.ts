import workerpool from "workerpool";

export async function parallelMap<T, R>(
    list: T[],
    callback: (param: T) => R | Promise<R>
): Promise<R[]> {
    const pool = workerpool.pool({ });

    try {
        const promises = list.map(item => pool.exec(callback, [item]));

        const results = await Promise.all(promises);

        return results;
    } catch (error: any) {
        throw new Error(error?.message ?? error);
    } finally {
        pool.terminate();
    }
}