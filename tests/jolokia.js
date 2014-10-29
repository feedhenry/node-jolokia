var jolokia = require("../jolokia");
var assert = require("assert");

describe("jolokia", function() {
  it("should create client", function(done) {
    jolokia({
      url: "http://localhost:8181/jolokia",
      username: "admin",
      password: "admin"
    }, function(err, client) {
      assert(!err);
      assert(client);
      done();
    });
  });
});
