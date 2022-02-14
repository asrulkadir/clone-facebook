import axios from 'axios';

const urlPost = `${process.env.REACT_APP_API_POST}`;

class PostServices {
  getPosts() {
    return axios.get(`${urlPost}/posts`);
  }
}

export default new PostServices();
