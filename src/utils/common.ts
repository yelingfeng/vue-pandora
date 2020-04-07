export const isFunction = (obj: any) => {
  return typeof obj === 'function'
}

export const isArray = (obj: any) => {
  return Array.isArray(obj)
}

export const hasOwn = Object.prototype.hasOwnProperty

export const merge =
  Object.assign ||
  function(to: any) {
    for (let i = 1; i < arguments.length; i++) {
      const from = Object(arguments[i])

      for (const key in from) {
        if (hasOwn.call(from, key)) {
          to[key] = from[key]
        }
      }
    }

    return to
  }
