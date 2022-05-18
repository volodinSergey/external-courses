function ElectricalDevice(options) {
  this.power = options.power;
  this.state = options.turnOnStatustate;
}

ElectricalDevice.prototype.info = function info() {
  console.log(`Power: ${this.power}, cleaningMode: ${this.cleaningMode}`);
};

ElectricalDevice.prototype.turnOn = function turnOn() {
  if (this.state) {
    console.log('Device is already turned on!');

    return;
  }

  this.state = true;

  console.log('Device is turned on');
};

ElectricalDevice.prototype.turnOff = function turnOff() {
  if (!this.state) {
    console.log('Device is already turned off!');

    return;
  }

  this.state = false;

  console.log('Device is turned off');
};

module.exports = ElectricalDevice;
