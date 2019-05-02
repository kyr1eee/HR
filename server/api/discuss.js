import Http from '../http';
export async function getDiscuss() {
  const url = 'api/discuss';
  return Http.get(url);
}

