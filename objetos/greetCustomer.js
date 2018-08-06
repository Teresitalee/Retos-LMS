
const customerData = {
    Joe: {
      visits: 1,
    },
    Carol: {
      visits: 2,
    },
    Howard: {
      visits: 3,
    },
    Carrie: {
      visits: 4,
    },
  };
  
  const greetCustomer = (firstName) => {
    const arrKey = Object.keys(customerData);
    for (let i = 0; arrKey.length > i; i++) {
      let nameKey = arrKey[i];
      if (nameKey != firstName) {
        message = ('Welcome! Is this your first time?');
      };
    };
  
    for (let i = 0; arrKey.length > i; i++) {
      let nameKey = arrKey[i];
      if (nameKey === firstName) {
        const visitKey = (customerData[nameKey].visits);
        if (visitKey === 1) {
          message = ("Welcome back, " + nameKey + "! We're glad you liked us the first time!");
        }
        if (visitKey > 1) {
          message = ('Welcome back, ' + nameKey + '! So glad to see you again!');
        };
      };
  
    };
    return message;
  };
  console.log('greetCustomer', greetCustomer('Joe'));
  