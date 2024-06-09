import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '72bc2d80d76746d4978449aaf0dfb1c5',
  },
});
