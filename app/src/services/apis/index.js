import axios from 'axios';
import secrets from '../../secrets.json';
const baseUrl = 'http://gateway.marvel.com';
const apikey = secrets.apiKey;

const OK_STATUSES = [200, 204];

export const endpoints = {
  get: {
    characters: `${baseUrl}/v1/public/characters`,
  },
};

const handleError = error => {
  console.log(error);
  return error;
};

export const GET = async (endpoint, params = {}) => {
  try {
    return await axios.get(endpoint, {
      params: { apikey, ...params },
    });
  } catch (err) {
    return handleError(err.response);
  }
};

export const isResponseOK = response =>
  response && OK_STATUSES.includes(response.status);
