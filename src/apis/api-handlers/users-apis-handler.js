import { createUserApi } from "../user-apis";
import { CREATED } from "../api";

export async function userRegisteration(user) {
  try {
    var response = await createUserApi(user);
    return {
      status: response.status == CREATED,
      data: response.data,
    };
  } catch (e) { return e; }
}
