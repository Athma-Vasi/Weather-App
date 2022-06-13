# Weather-App

Weather-App as part of The Odin Project curriculum

## Things I learned

### TL;DR

- Event loop
- Asynchronous functions
- Micro task queue
- Macro task queue
- Promises

### Event Loop

I felt like I had taken the red pill 💊 when I was revealed an entirely hidden world that previously operated unseen and unnoticed by me learning about the event loop 🤩. This led me down a fascinating rabbit hole learning about call stacks, execution contexts, thread of execution, single-threading, run-to-completion, function level non-determinism and differences between synchronous and asynchronous functions.

Apparently there are seven queues that the event loop checks! But I focused on the main ones for now.

### Asynchronous Functions

So, JavaScript executes all synchronous code first. The thread of execution passes the asynchronous code immediately to the hoisting environment (browser API or node), and the next synchronous code is immediately executed until all of the synchronous code is run to completion.

Meanwhile in the browser, if the code is say, setTimeout, the timer runs immediately and after the timer ends, the browser pushes it into the macrotask queue (callback queue). If the code is a promise and it is resolved, the code is pushed into the microtask queue by the browser.

If the callstack is empty (save the global()), the event loop prioritizes which queue to clear first. Having assigned the microtask queue a higher priority, the promises are cleared first, then the render step, then the macrotasks.

This was really exciting and mind-bending and gave me quite a mental workout 🏋🏻!
