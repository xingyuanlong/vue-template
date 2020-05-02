const Mock = require("mockjs");

module.exports = {
  "/get": function() {
    return {
      success: true,
      result: {
        isPermit: true,
        accessType: 2,
        error: "user not authorization",
        errorType: 403
      },
      error: null
    };
  },
  "/post": function() {
    const data = Mock.mock({
      "list|1-10": [
        {
          name: Mock.Random.cname(),
          "age|18-60": 1,
          email: Mock.mock("@EMAIL()")
        }
      ]
    });
    return data.list;
  }
};
