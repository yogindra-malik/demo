var base_url = "http://localhost:3000"

describe("Test head", function () {
  describe("Test", function () {

    it("can have more than one expectation get call", function (done) {
      $.get('/bookscount', function (d) {
        expect(d.count).toBe(18);
        done();
      });
    });
    it("can have more than one expectation get call check data", function (done) {

      $.get('/booksdata', function (d) {
        var data = d[0]
        delete data._id
        expect(data).toEqual(jasmine.objectContaining({ "name": "NCERT 7", "by": "CBSE" }));
        done();
      });
    });

    it("can have more than one expectation two", function () {
      var foo = 9;
      var foom = 9;
      expect(foo).toEqual(foom);
    });

    it("can have more than one expectation for demo purpose", function () {
      var foo = 0;
      var foomt = 0;

      expect(foo).toEqual(foomt);
    });
  });
});
