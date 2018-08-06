
/*El saludo debe ser diferente, dependiendo del nombre de la reservación.

Caso 1 - Cliente desconocido (el nombre no está presente en los datos de cliente):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Caso 2 - Cliente que ha visitado sólo una vez (el valor de las visitas es 1)

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Caso 3 - Repetir cliente: (valor de' visitas' es mayor que 1)

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
*/


const removeStringValuesLongerThan = (num, obj) => {
    const arrValues = Object.values(obj);
    const arrKey = Object.keys(obj);
    for (let i = 0; arrValues.length > i; i++) {
      let stringValues = arrValues[i];
      let stringKey = arrKey[i];
      if (stringValues.length > num) {
        delete obj[stringKey];
      };
    }
    return obj;
  };
  console.log('removeStringValuesLongerThan', removeStringValuesLongerThan(6, { 'name': 'Montana', 'age': 20, 'location': 'Texas' }));
  