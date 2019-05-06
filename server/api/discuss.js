import Http from '../http';
export async function getDiscuss() {
  // const url = 'api/discuss';
  const url = 'http://stuer.ericwu.cn/api/companies';
  return Http.get(url);
}

