import request from "../utils/req";

module.exports = {
  accountRegistration: async function (params) {
    return request("/entrance/signup", {
      method: "POST",
      data: params,
    });
  },
};
