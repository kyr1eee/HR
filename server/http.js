import Axios from 'axios';

class Http {
  async request(options) {
    // 构造请求数据
    const finalOptions = {
      ...options,
      headers: {
        ...options.headers
      }
    };

    let res;
    try {
      res = await Axios.request(finalOptions);
      // 正常返回
      return res.data;
    } catch (err) {
      err.response = err.response || {};
      const status = err.response.status;
      console.log('请求失败: ', err);
      throw err;
    }
  }

  get(path) {
    return this.request({
      method: 'get',
      url: path
    });
  }

  delete(path) {
    return this.request({
      method: 'delete',
      url: path
    });
  }

  put(path, data) {
    return this.request({
      method: 'put',
      url: path,
      data
    });
  }

  patch(path, data) {
    return this.request({
      method: 'patch',
      url: path,
      data
    });
  }

  post(path, data) {
    return this.request({
      method: 'post',
      url: path,
      data
    });
  }
}

export default new Http();
