// Polyfills for older browsers
if (typeof window !== "undefined") {
  // Array.from polyfill
  if (!Array.from) {
    Array.from = (arrayLike: ArrayLike<unknown>) => [].slice.call(arrayLike)
  }

  // Object.assign polyfill
  if (typeof Object.assign !== "function") {
    Object.assign = (target: any, ...sources: any[]): any => {
      if (target === null || target === undefined) {
        throw new TypeError("Cannot convert undefined or null to object")
      }
      const to = Object(target)
      for (let index = 0; index < sources.length; index++) {
        const nextSource = sources[index]
        if (nextSource !== null && nextSource !== undefined) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    }
  }

  // Promise polyfill for IE
  if (!window.Promise) {
    console.warn("This browser does not support Promises. Some features may not work correctly.")
  }
}

export {}
