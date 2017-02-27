
  //var router = express.Router();


  var base_url = "http://localhost:3000"

  describe("Test head", function () {
  //   describe("GET /", function () {
  //     it("returns status code 200", function () {
  //       router.get(base_url, function (error, response, body) {
  //         expect(response.body).toBe(200);
  //       });
  //     });
  //   });
  // });
  // describe("Hello World Server", function () {
  //   describe("GET /", function () {
  //     it("returns status code 200", function () {
  //       router.get(base_url, function (error, response, body) {
  //         expect(response.body).toBe(200);
  //       });
  //     });
  //   });

    describe("Test", function () {

      it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;

        expect(foo).toEqual(1);
      });

      it("can have more than one expectation two", function () {
        var foo = 0;
        var foom = 0;

        expect(foo).toEqual(foom);
      });

       it("can have more than one expectation for demo purpose", function () {
        var foo = 0;
        var foom = 0;

        expect(foo).toEqual(foom);
      });
    });
  });