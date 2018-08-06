/* Dando un nombre y una contraseña, areValidCredentials, 
devuelve true si el nombre es superior a 3 caracteres, Y, 
la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false. */

const areValidCredentials = ((name,pass) => {
    let result ;
    if (name.length > 3){

        if(pass.length > 8){
            result= "true";
      
        }
    }

    else{
        return "false";
    }

});
