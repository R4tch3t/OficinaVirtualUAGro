import {toAbsoluteUrl} from "../../../../_metronic/_helpers";
//import JSON_LOGIN from "../_redux/authCrud";
import ip from "../genVars/Ip"
export let JSON_LOGIN = [];
export default (matricula, password) => new Promise(async (resolve, reject) => {
  const sendUri = ip("3000", "api/logins/student/");

  const bodyJSON = {
    matricula: matricula,
    password: password
  };

  const response = await fetch(sendUri, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyJSON)
  });

  const responseJson = await response.json().then(r => {
    console.log(r);
    JSON_LOGIN = []
    if (r.payload){
      JSON_LOGIN = [{
        id: r.payload.usuarioId,
        username: r.payload.nombre,
        password: password,
        email: r.payload.matricula,
        accessToken: "access-token-"+r.token,
        refreshToken: "access-token-f8e4c61a318e4d618b6c199ef96b9e55",
        roles: [2], // Manager
        pic: toAbsoluteUrl("/media/users/100_2.jpg"),
        fullname: r.payload.nombre,
        occupation: "Deputy Head of Keenthemes in New York office",
        companyName: "UAGro",
        phone: "000000000",
        address: {
          addressLine: "3487  Ingram Road",
          city: "Greensboro",
          state: "North Carolina",
          postCode: "27409"
        },
        socialNetworks: {
          linkedIn: "https://linkedin.com/user",
          facebook: "https://facebook.com/user",
          twitter: "https://twitter.com/user",
          instagram: "https://instagram.com/user"
        }
      }]
      //resolve(r);
      resolve(1);
  }else{
      resolve(0);
  }

  });

  console.log(responseJson);
  
 /*JSON_LOGIN = [{
     id: 1,
     username: "admin",
     password: "demo",
     email: "admin@demo.com",
     accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
     refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
     roles: [1], // Administrator
     pic: toAbsoluteUrl("/media/users/300_25.jpg"),
     fullname: "Sean",
     occupation: "CEO",
     companyName: "Keenthemes",
     phone: "456669067890",
     address: {
       addressLine: "L-12-20 Vertex, Cybersquare",
       city: "San Francisco",
       state: "California",
       postCode: "45000"
     },
     socialNetworks: {
       linkedIn: "https://linkedin.com/admin",
       facebook: "https://facebook.com/admin",
       twitter: "https://twitter.com/admin",
       instagram: "https://instagram.com/admin"
     }
   },
   {
     id: 2,
     username: "user",
     password: "demo",
     email: "user@demo.com",
     accessToken: "access-token-6829bba69dd3421d8762-991e9e806dbf",
     refreshToken: "access-token-f8e4c61a318e4d618b6c199ef96b9e55",
     roles: [2], // Manager
     pic: toAbsoluteUrl("/media/users/100_2.jpg"),
     fullname: "Megan",
     occupation: "Deputy Head of Keenthemes in New York office",
     companyName: "Keenthemes",
     phone: "456669067891",
     address: {
       addressLine: "3487  Ingram Road",
       city: "Greensboro",
       state: "North Carolina",
       postCode: "27409"
     },
     socialNetworks: {
       linkedIn: "https://linkedin.com/user",
       facebook: "https://facebook.com/user",
       twitter: "https://twitter.com/user",
       instagram: "https://instagram.com/user"
     }
   },
   {
     id: 3,
     username: "guest",
     password: "demo",
     email: "guest@demo.com",
     accessToken: "access-token-d2dff7b82f784de584b60964abbe45b9",
     refreshToken: "access-token-c999ccfe74aa40d0aa1a64c5e620c1a5",
     roles: [3], // Guest
     pic: toAbsoluteUrl("/media/users/default.jpg"),
     fullname: "Ginobili Maccari",
     occupation: "CFO",
     companyName: "Keenthemes",
     phone: "456669067892",
     address: {
       addressLine: "1467  Griffin Street",
       city: "Phoenix",
       state: "Arizona",
       postCode: "85012"
     },
     socialNetworks: {
       linkedIn: "https://linkedin.com/guest",
       facebook: "https://facebook.com/guest",
       twitter: "https://twitter.com/guest",
       instagram: "https://instagram.com/guest"
     }
   }
 ];*/

 //return response; 
})
