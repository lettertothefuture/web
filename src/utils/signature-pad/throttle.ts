/* eslint-disable @typescript-eslint/no-explicit-any */

export function throttle(
  fn: (...args: any[]) => any,
  wait = 250,
): (this: any, ...args: any[]) => any {
  let previous = 0;
  let timeout: number | null = null;
  let result: any;
  let storedContext: any;
  let storedArgs: any[];

  const later = (): void => {
    previous = Date.now();
    timeout = null;
    result = fn.apply(storedContext, storedArgs);

    if (!timeout) {
      storedContext = null;
      storedArgs = [];
    }
  };

  return function wrapper(this: any, ...args: any[]): any {
    const now = Date.now();
    const remaining = wait - (now - previous);

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    storedContext = this;
    storedArgs = args;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = fn.apply(storedContext, storedArgs);

      if (!timeout) {
        storedContext = null;
        storedArgs = [];
      }
    } else if (!timeout) {
      timeout = window.setTimeout(later, remaining);
    }

    return result;
  };
}
