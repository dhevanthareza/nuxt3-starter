import BaseAPI from "./base";

export default class User extends BaseAPI {
  async login(username, password) {
    const response = await this.dummyResponse({
      user: { name: "Dhevan", username, password },
      token: "Example Token",
    });
    return response;
  }
}
