import User from "./user";

export default class API {
  constructor($axios) {
    this.User = new User($axios);
  }
}
