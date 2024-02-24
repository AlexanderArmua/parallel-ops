# ParallelOps

ParallelOps is a high-performance Node.js library designed to parallelize high-order functions like map, reduce, and filter. Leveraging the power of the "workerpool" library, ParallelOps enables efficient data processing by distributing tasks across multiple worker threads, significantly enhancing computational performance and efficiency in Node.js applications.

## Important notes

This project is current under development, don't use it on productive environments

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

```js
const parallelOps = require('parallel-ops');

// Example of parallel map
parallelOps.map(dataArray, async (item) => {
    // Perform operation
    return transformedItem;
}).then(result => {
    console.log(result);
});
```

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
