import { parallelMap } from "@modules/map";

console.time()

const superArray = Array(100).fill(0).map((v, i) => i); // 10000000

parallelMap(superArray, (p) => p * 2)

console.timeEnd()