import { apiInstance } from './api';

export async function getVaultsApi () {
  return apiInstance.get('/vaults');
}

