# Simple loggerfunction with File Name and Line Number

A lightweight utility function to enhance `console.log` by logging the file name and line number automatically.

## Features

- Automatically logs the **file name** and **line number** where the log is called.
- No need to manually modify each `console.log`.
- Useful for debugging large projects.

## Installation

Install the package via npm:

```bash
npm install loggerfunction
```

Or via yarn:

```bash
yarn add loggerfunction
```

## Usage

### Import the loggerfunction

```typescript
import { log } from "loggerfunction";
```

### Example Code

```typescript
import { log } from "loggerfunction";

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
[filename:line-number] Hello, World
[filename:line-number] Adding numbers: 5 3
[filename:line-number] This is a standalone log
```

## How It Works

The `log` function uses the stack trace to determine the file name and line number where it was called.

## Use Cases

- **Debugging**: Easily identify where log statements are being called.
- **Large Projects**: Quickly trace logs without searching through files.
- **Error Tracking**: Provides more context for debugging errors.

## License

[MIT](LICENSE)
