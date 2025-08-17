// Polyfills for older browsers
if (typeof window !== "undefined") {
  // Array.from polyfill
  if (!Array.from) {
    Array.from = (arrayLike) => [].slice.call(arrayLike)
  }

  // Object.assign polyfill
  if (typeof Object.assign !== "function") {
    Object.assign = (target) => {
      if (target === null || target === undefined) {
        throw new TypeError("Cannot convert undefined or null to object")
      }
      var to = Object(target)
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
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
