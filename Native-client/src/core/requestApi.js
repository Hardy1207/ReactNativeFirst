import axios from 'axios'

const proxyURL = "http://localhost:3001/api";

export const httpGet = (
    url 
) => {
    return axios.get(!url.startsWith("http") ? proxyURL + url : url);
};

export const httpPost = (
    url,
    body
) => {
    return axios.post(!url.startsWith("http") ? proxyURL + url : url, { body })
}