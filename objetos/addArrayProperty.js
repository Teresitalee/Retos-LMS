
const addArrayProperty = (obj, key, arr) => {
  return Object.defineProperty(obj, key, {
    value: arr,
  });
}
console.log('addArrayProperty', addArrayProperty({}, 'myProperty', [1, 3]));