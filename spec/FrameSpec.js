describe("Frame", function () {

  beforeEach(function () {
    frame = new Frame()
    bonus = new Bonus()
  });

  describe("rollCount", function() {
    it("should start at 0", function() {
      expect(frame.rollCount).toEqual(0)
    });
  });

  describe("frameScore", function() {
    it("should start at 0", function() {
      expect(frame.frameScore).toEqual(0)
    });
  });

  describe("roll", function() {
    it("increases the roll count by one", function() {
      frame.roll()
      expect(frame.rollCount).toEqual(1)
    });

    it("increases the frame score by 5", function() {
      frame.roll(5)
      expect(frame.frameScore).toEqual(5)
    });
  });

  describe("strikeCheck", function() {
    it("Checks if there is a strike", function() {
      frame.roll(10)
      frame.strikeCheck()
      expect(bonus.strikeCount).toEqual(1)
    });
  });

  describe("spareCheck", function() {
    it("Checks if there is a spare", function() {
      frame.roll(4)
      frame.roll(6)
      frame.spareCheck()
      expect(bonus.spareCount).toEqual(1)
    });
  });

  describe("frameReset", function() {
    it("resets the roll and the frameScore", function() {
      frame.roll(2)
      frame.frameReset()
      expect(frame.rollCount).toEqual(0)
      expect(frame.frameScore).toEqual(0)
    });
  });

});
