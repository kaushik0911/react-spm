import axios from 'axios';

export const CREATED = 201;

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3006/api/v1/'
});


