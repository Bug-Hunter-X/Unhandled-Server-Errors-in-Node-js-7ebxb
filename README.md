# Node.js Unhandled Server Error

This repository demonstrates a common issue in Node.js: insufficient error handling in server setup. The `server.js` file contains a basic HTTP server that lacks proper error handling. When the server encounters an error (such as trying to bind to an already occupied port), it crashes without providing useful information for debugging.

The `serverSolution.js` file provides a corrected version with comprehensive error handling, demonstrating best practices for building robust Node.js servers.

## How to reproduce the bug

1. Run `node server.js`.
2. Try to start another server on the same port (port 3000).
3. Observe the crash without any clear error messages.

## How to fix the bug

Refer to the `serverSolution.js` file for the improved implementation.