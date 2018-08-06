
const objectPropertiesCounter = (obj) => {
    return Object.keys(obj).length;
  };
  console.log('objectPropertiesCounter', objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' }));