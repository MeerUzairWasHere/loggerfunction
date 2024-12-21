import "source-map-support/register";

export function log(...args: any[]) {
  const stack = new Error().stack;
  const callerInfo = stack?.split("\n")[2]?.trim();
  const match = callerInfo?.match(/\((.*\/)?([^\/]+):(\d+):\d+\)/);

  if (match) {
    const [, , fileName, line] = match;
    console.log(`[${fileName}:${line}]`, ...args);
  } else {
    console.log(...args);
  }
}
