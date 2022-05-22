const ElectricalDevice = require('./ElectricalGadget.js');

function RobotSoldier(options) {
  ElectricalDevice.call(this, options);

  this.shootingStatus = options.shootingStatus;
  this.mapScanningStatus = options.mapScanningStatus;
}

RobotSoldier.prototype = Object.create(ElectricalDevice.prototype);
RobotSoldier.prototype.constructor = RobotSoldier;

RobotSoldier.prototype.info = function info() {
  console.log(`Power: ${this.power}, map is ${this.mapScanningStatus}, shooting status:${this.shootingStatus}`);
};

RobotSoldier.prototype.startShooting = function startShooting() {
  if (!this.state) {
    console.log('Device is not turned on!. Please, turn on the device.');

    return;
  }

  if (this.shootingStatus === 'shooting') {
    console.log('Can\'t start shooting. Robot soldier is already shooting!');

    return;
  }

  this.shootingStatus = 'shooting';

  console.log('Robot soldier is shooting...');
};

RobotSoldier.prototype.stopShooting = function stopShooting() {
  if (!this.state) {
    console.log('Device is not turned on!. Please, turn on the device.');

    return;
  }

  if (this.shootingStatus === 'not shooting') {
    console.log('Can\'t stop shooting. Robot soldier is already not shooting!');

    return;
  }

  this.shootingStatus = 'not shooting';

  console.log('Robot soldier is not shooting');
};

RobotSoldier.prototype.getShootingStatus = function getShootingStatus() {
  if (!this.state) {
    console.log('Device is not turned on!. Please, turn on the device.');

    return;
  }

  console.log(`Shooting status is: ${this.shootingStatus}`);
};

RobotSoldier.prototype.startMapScanning = function initMap() {
  if (!this.state) {
    console.log('Device is not turned on!. Please, turn on the device.');

    return;
  }

  this.mapScanningStatus = 'scanned';

  console.log('Map scanning is taken up.....');
};

module.exports = RobotSoldier;
