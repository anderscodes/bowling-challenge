describe("Game", function() {

  beforeEach(function () {
    frame = new Frame()
    bonus = new Bonus()
    game = new Game()
  });

  describe("frameNumber", function(){
    it("should start at 0", function(){
      expect(game.frameNumber).toEqual(0)
    });
  });

});
