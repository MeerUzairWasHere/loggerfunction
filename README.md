# Simple Logger with File Name and Line Number

A lightweight utility function to enhance `console.log` by logging the file name and line number automatically.

## Features

- Automatically logs the **file name** and **line number** where the log is called.
- No need to manually modify each `console.log`.
- Useful for debugging large projects.

## Installation

Install the package via npm:

```bash
npm install logger
```

Or via yarn:

```bash
yarn add logger
```

## Usage

### Import the Logger

```typescript
import { log } from "logger";
```

### Example Code

**`src/example.ts`**

```typescript
import { log } from "logger";

function greet(name: string) {
  log("Hello,", name);
}

function add(a: number, b: number) {
  log("Adding numbers:", a, b);
  return a + b;
}

greet("World");
add(5, 3);
log("This is a standalone log");
```

### Output

When you run the code, the output will display the file name and line number dynamically:

```plaintext
[index.js:18] Hello, World
[index.js:21] Adding numbers: 5 3
[index.js:26] This is a standalone log
```

## How It Works

The `log` function uses the stack trace to determine the file name and line number where it was called. Here's the core function:

```typescript
export function log(...args: any[]) {
  const stack = new Error().stack;
  const callerInfo = stack?.split("\n")[2].trim();
  const match = callerInfo?.match(/\((.*\/)?([^\/]+):(\d+):\d+\)/);

  if (match) {
    const [, , fileName, line] = match;
    console.log(`[${fileName}:${line}]`, ...args);
  } else {
    console.log(...args);
  }
}
```

## Use Cases

- **Debugging**: Easily identify where log statements are being called.
- **Large Projects**: Quickly trace logs without searching through files.
- **Error Tracking**: Provides more context for debugging errors.

## License

[MIT](LICENSE)
