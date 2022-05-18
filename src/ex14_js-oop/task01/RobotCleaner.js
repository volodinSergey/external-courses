const VacuumCleaner = require('./VacuumCleaner.js');

function RobotCleaner(options) {
  VacuumCleaner.call(this, options);

  this.mapScanningStatus = options.mapScanningStatus;
}

RobotCleaner.prototype = { ...VacuumCleaner.prototype };

RobotCleaner.prototype.info = function info() {
  console.log(`Power: ${this.power}, cleaningMode: ${this.cleaningMode}, map is ${this.mapScanningStatus}`);
};

RobotCleaner.prototype.startMapScanning = function startMapScanning() {
  if (!this.state) {
    console.log('Device is not turned on!. Please, turn on the device.');

    return;
  }

  this.mapScanningStatus = 'scanned';

  console.log('Map scanning is taken up...');
};

module.exports = RobotCleaner;
