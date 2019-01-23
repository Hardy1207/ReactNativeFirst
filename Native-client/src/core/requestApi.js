import axios from 'axios';

const proxyURL = 'http://localhost:3001/api';

export const httpGet = url => axios.get(!url.startsWith('http') ? proxyURL + url : url);

export const httpPost = (
  url,
  body,
) => axios.post(!url.startsWith('http') ? proxyURL + url : url, body);

export const httpDelete = (
  url,
  body,
) => axios.delete(!url.startsWith('http') ? proxyURL + url : url, body);
