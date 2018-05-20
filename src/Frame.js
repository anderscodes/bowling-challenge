function Frame() {
  this.rollCount = 0
  this.frameScore = 0
  bonus = new Bonus
}

Frame.prototype.roll = function(pins) {
  this.rollCount++
  this.frameScore += pins
}

Frame.prototype.strikeCheck = function() {
  if (this.frameScore === 10 && this.rollCount === 1) {
  bonus.strikeCount++
   }
}

Frame.prototype.spareCheck = function() {
  if (this.frameScore === 10 && this.frameScore && 2) {
    bonus.spareCount++
  }
}

Frame.prototype.frameReset = function() {
  this.rollCount = 0
  this.frameScore = 0
}
