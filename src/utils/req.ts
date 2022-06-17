import axios from 'axios';
import { message } from 'antd';

const isDev = process.env.NODE_ENV === 'development';

const instance = axios.create({
  baseURL: isDev ? 'http://localhost:3000/api/v0' : 'http://io.nainor.com/api/v0',
  timeout: 10000,
  withCredentials: true,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    config.headers = {
      'x-requested-with': localStorage.getItem('user') || '',
      authorization: localStorage.getItem('token') || '',
    };
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    if (response.headers['x-show-msg'] === 'zxzk_msg_200') {
      message.success(response.data.msg);
    }
    return response.data.result;
  },
  function(error) {
    // 对响应错误做点什么
    const { response } = error;
    if (response.status === 404) {
      message.error('请求资源未发现');
    } else if (response.status === 403) {
      message.error(response.data.msg, () => {
        window.location.href = '/admin/login';
      });
    } else {
      message.error(response.data.msg);
    }
    return Promise.reject(error);
  },
);

export default instance;
