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
});
