function Bonus() {
  this.multiplier = 0
  this.bonusScore = 0
}

Bonus.prototype.isBonus = function() {
  if (this.multiplier > 0) {
    this.bonusScore += frame.rollScore
    this.multiplier--
  }
}

Bonus.prototype.bonusCheck = function() {
  if (frame.rollScore === 10) {
    frame.strikeCheck()
  } else {
    frame.spareCheck()
  }
}

Bonus.prototype.bonusReset = function() {
  this.bonusScore = 0
}
