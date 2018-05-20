function Frame() {
  this.rollCount = 0
  this.frameScore = 0
  this.rollScore = 0
}

Frame.prototype.roll = function(pins) {
  this.rollCount++
  this.frameScore += pins
  this.rollScore = pins
}

Frame.prototype.strikeCheck = function() {
  if (this.rollScore === 10) {
  bonus.multiplier += 2
   }
}

Frame.prototype.spareCheck = function() {
  if (this.frameScore === 10 && this.frameScore && 2) {
    bonus.multiplier++
  }
}

Frame.prototype.frameReset = function() {
  this.rollCount = 0
  this.frameScore = 0
}
