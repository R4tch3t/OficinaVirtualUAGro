import {
  LOGIN_URL,
  ME_URL,
  REGISTER_URL,
  REQUEST_PASSWORD_URL,
} from "../_redux/authCrud";
import {JSON_LOGIN} from "./userTableMock";

export default function mockAuth(mock) {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { email, password } = JSON.parse(data);
    console.log(`LOGIN_URL: ${LOGIN_URL}`);
    console.log(`DATA: ${data}`);
    console.log(JSON_LOGIN)
    if (email && password) {
      const user = JSON_LOGIN.find(
        x =>
          x.email.toLowerCase() === email.toLowerCase() &&
          x.password === password
      );

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onPost(REGISTER_URL).reply(({ data }) => {
    const { email, fullname, username, password } = JSON.parse(data);
    console.log(`REGISTER_URL: ${REGISTER_URL}`);
    if (email && fullname && username && password) {
      const user = {
        id: generateUserId(),
        email,
        fullname,
        username,
        password,
        roles: [2], // Manager
        accessToken: "access-token-" + Math.random(),
        refreshToken: "access-token-" + Math.random(),
        pic: process.env.PUBLIC_URL + "/media/users/default.jpg"
      };

      JSON_LOGIN.push(user);

      return [200, { ...user, password: undefined }];
    }

    return [400];
  });

  mock.onPost(REQUEST_PASSWORD_URL).reply(({ data }) => {
    const { email } = JSON.parse(data);
    console.log(`REQUEST_PASSWORD_URL: ${REQUEST_PASSWORD_URL}`);
    if (email) {
      const user = JSON_LOGIN.find(
        x => x.email.toLowerCase() === email.toLowerCase()
      );

      if (user) {
        user.password = undefined;

        return [200, { ...user, password: undefined }];
      }
    }

    return [400];
  });

  mock.onGet(ME_URL).reply(({ headers: { Authorization } }) => {
    const accessToken =
      Authorization &&
      Authorization.startsWith("Bearer ") &&
      Authorization.slice("Bearer ".length);
      console.log(`ME_URL: ${ME_URL}`);
    if (accessToken) {
      const user = JSON_LOGIN.find(x => x.accessToken === accessToken);

      if (user) {
        return [200, { ...user, password: undefined }];
      }
    }

    return [401];
  });

  function generateUserId() {
    const ids = JSON_LOGIN.map(el => el.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
  
}
