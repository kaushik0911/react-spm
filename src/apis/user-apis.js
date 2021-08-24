import { apiInstance } from './api';

export async function createUserApi (user) {
  console.log(user);

  apiInstance.post('/users', {
    username: user.username,
    email: user.email,
    password: user.password
  })
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });
}
