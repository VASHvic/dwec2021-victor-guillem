class Clock {
  constructor({ template }) {
    //un objeto que tiene la propiedad template se la asigno a this template
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor({ template }, precison) {
    super({ template });
    this.precision = precison ?? 1000;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let ms = date.getMilliseconds();
    if (ms < 10) ms = "0" + ms;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs)
      .replace("ms", ms);

    console.log(output);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
const test = new ExtendedClock({ template: "h:m:s:ms" }, 500);

test.start();
