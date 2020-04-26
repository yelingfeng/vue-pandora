export const trim = function(string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

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

export function hasClass(elements: any, cls: string) {
  return !!elements.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}
export function addClass(elements: any, cls: string) {
  if (!hasClass(elements, cls)) {
    elements.className = trim(elements.className) + ' ' + cls
  }
}
export function removeClass(elements: any, cls: string) {
  if (hasClass(elements, cls)) {
    elements.className = elements.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ')
  }
}
