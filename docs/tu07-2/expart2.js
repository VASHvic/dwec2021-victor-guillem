export function Calculator(num1, num2) {
  //checking if one parameter is a boolean, since its converted to 0 and 1

  // prettier-ignore
  typeof num1 == 'boolean' || typeof num2 == 'boolean'? this.num1 = NaN: this.num1 = num1, this.num2 = num2;

  this.sum = () =>
    isNaN(this.num1) || isNaN(this.num2) ? NaN : this.num1 + this.num2;

  this.mul = () =>
    isNaN(this.num1) || isNaN(this.num2) ? NaN : this.num1 * this.num2;

  this.avg = () =>
    isNaN(this.num1) || isNaN(this.num2) ? NaN : (this.num1 + this.num2) / 2;
}
