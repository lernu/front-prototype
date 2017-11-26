export function updateArrayElement(arr, index, element) {
  return [...arr.slice(0, index), element, ...arr.slice(index + 1)]
}

export function deleteArrayElement(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
