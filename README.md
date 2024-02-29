# ParallelOps

ParallelOps is a high-performance Node.js library designed to parallelize high-order functions like map, reduce, and filter. Leveraging the power of the "workerpool" library, ParallelOps enables efficient data processing by distributing tasks across multiple worker threads, significantly enhancing computational performance and efficiency in Node.js applications.

## Project Status: In Development

Please note that this project is currently in active development and has not yet reached a stable release.

## Features

- Parallel execution of high-order functions (map, filter, etc.)
- Easy integration with existing Node.js projects
- Improved application performance for data-intensive tasks
- Utilizes "workerpool" for robust thread management

## Installation

To install ParallelOps, use npm:

```bash
npm install parallel-ops
```

## Quick Start

Here's a simple example to get you started with ParallelOps:

```ts
import { parallelMap } from '../src/map';

const mappedList = async (list: any[]) => {
    const callback = (a: any) => String(a);

    const result = await parallelMap(list, callback);

    return result;
}

```

## Notes
### Functions to execute
The functions and arguments must be static and stringifiable (and shouldn't include reference to other objects).

For instance, some functions (like `String`) cannot be offloaded dinamically. 
In this specific scenario to use `String`, you should create an anonym function `(foo: string) => String(foo)`, 
or also you can create a dedicated worker in a separated script (WIP).  

### Support
- Currently we only support passing functions as callbacks.
- In future versions we will be adding support for dedicated workers.
- Not suported `async` callbacks

## API Reference
### WIP: map(array, function)
Applies a function to each item in an array in parallel.

- array: The array to process.
- function: The function to apply to each item.

### WIP: filter(array, function)
Filters an array by applying a function to each item in parallel and keeping those that return true.

- array: The array to process.
- function: The predicate function to apply to each item.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
ParallelOps is available under the MIT License. See the LICENSE file for more info.

## Acknowledgments
Thanks to the [workerpool](https://github.com/josdejong/workerpool) library for providing the backbone of our thread management system.
