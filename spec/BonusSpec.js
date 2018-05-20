describe("Bonus", function() {

  beforeEach(function() {
    frame = new Frame()
    bonus = new Bonus()
  });

  describe("multiplier", function() {
    it("should start at 0", function() {
      expect(bonus.multiplier).toEqual(0)
    });
  });

  describe("isBonus", function() {
    it("should double both rolls of the next frame", function() {
      frame.roll(10)
      bonus.bonusCheck()
      frame.frameReset()
      frame.roll(3)
      bonus.isBonus()
      frame.roll(4)
      bonus.isBonus()
      expect(bonus.bonusScore).toEqual(7)
      expect(bonus.multiplier).toEqual(0)
    });

    it("should double the first roll of the next frame", function() {
      frame.roll(10)
      bonus.bonusCheck()
      frame.frameReset()
      frame.roll(3)
      bonus.isBonus()
      expect(bonus.bonusScore).toEqual(3)
      expect(bonus.multiplier).toEqual(1)
    });

    it("should double the next three rolls", function() {
        frame.roll(10)
        bonus.bonusCheck()
        frame.frameReset()
        frame.roll(3)
        bonus.bonusCheck()
        bonus.isBonus()
        frame.roll(7)
        bonus.bonusCheck()
        bonus.isBonus()
        frame.roll(3)
        bonus.bonusCheck()
        bonus.isBonus()
        expect(bonus.bonusScore).toEqual(13)
        expect(bonus.multiplier).toEqual(0)
      });

      it("should not allow multiplier to go below 0", function() {
        bonus.isBonus()
        bonus.isBonus()
        expect(bonus.multiplier).toEqual(0)
      });
  });

  describe("bonusCheck", function() {
    it("Checks if there is a spare", function() {
      frame.roll(4)
      frame.roll(6)
      bonus.bonusCheck()
      expect(bonus.multiplier).toEqual(1)
    });

    it("Checks if there is a strike", function() {
      frame.roll(10)
      bonus.bonusCheck()
      expect(bonus.multiplier).toEqual(2)
    });
  });

  describe("bonusReset", function() {
    it("should reset the bonus score", function() {
      frame.roll(10)
      bonus.bonusCheck()
      frame.frameReset()
      frame.roll(10)
      bonus.bonusCheck()
      frame.frameReset()
      bonus.isBonus()
      frame.roll(7)
      bonus.bonusCheck()
      bonus.isBonus()
      frame.roll(3)
      bonus.bonusCheck()
      bonus.isBonus()
      frame.frameReset()
      bonus.bonusReset()
      expect(bonus.bonusScore).toEqual(0)
    });
  });


});
