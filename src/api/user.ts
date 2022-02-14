import axios from 'axios';

const url = `${process.env.REACT_APP_API_URL}`;

class UserServices {
  getUsers() {
    return axios.get(`${url}/api/users`);
  }
}

export default new UserServices();
