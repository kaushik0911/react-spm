import { getVaultsApi, searchVaultsApi } from "../vaults-apis";

export async function getVaults() {
  try {
    var response = await getVaultsApi();
    if (response.data.data.length > 0)
      return { status: true, data: response.data.data };

    return { status: false, data: [] };
  } catch (e) { return e; }
}

export async function searchVaults(title) {
  try {
    var response = await searchVaultsApi(title);
    if (response.data.data.length > 0)
      return { status: true, data: response.data.data };

    return { status: false, data: [] };
  } catch (e) { return e; }
}
