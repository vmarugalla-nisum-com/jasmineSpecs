describe('calculator suite', function(){

   var cal = new Calculator();
   console.log(cal);

   it('addition function', function(){
      expect(true).toBe(true);
   });

   it('cal object is defined', function(){
      expect(cal).toBeDefined();
      expect(cal).not.toBeNull();
   });

   it('Mul function', function(){
      expect(cal.mul(2,2)).toBe(4);
   });


   describe("The 'toContain' matcher", function() {
    it("works for finding an item in an Array", function() {
      var a = ["foo", "bar", "baz"];

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });

    it("also works for finding a substring", function() {
      var a = "foo bar baz";

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });
  });

   describe("A spec using beforeAll and afterAll", function() {
	  var foo;

	  beforeAll(function() {
	    foo = 1;
	  });

	  afterAll(function() {
	    foo = 0;
	  });

	  it("sets the initial value of foo before specs run", function() {
	    expect(foo).toEqual(1);
	    foo += 1;
	  });

	  it("does not reset foo between specs", function() {
	    expect(foo).toEqual(2);
	  });
	});

});