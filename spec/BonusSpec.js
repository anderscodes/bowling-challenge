describe("Bonus", function() {

  beforeEach(function() {
    frame = new Frame()
    bonus = new Bonus()
  });

  describe("multiplier", function() {
    it(" should start at 0", function() {
      expect(bonus.multiplier).toEqual(0)
    });
  });


});
