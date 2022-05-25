const ElectricalDevice = require('./ElectricalGadget.js');

function VacuumCleaner(options) {
  ElectricalDevice.call(this, options);

  this.cleaningMode = options.cleaningMode;
}

VacuumCleaner.prototype = Object.create(ElectricalDevice.prototype);
VacuumCleaner.prototype.constructor = VacuumCleaner;

VacuumCleaner.prototype.changeCleaningMode = function changeCleaningMode() {
  if (!this.state) {
    console.log('Device is not turned on!. Please, turn on the device.');

    return;
  }

  if (this.cleaningMode === 'wet') {
    this.cleaningMode = 'dry';

    console.log('Cleaning mode is changed to dry!');

    return;
  }

  this.cleaningMode = 'wet';

  console.log('Cleaning mode is changed to wet!');
};

VacuumCleaner.prototype.info = function info() {
  console.log(`Power: ${this.power}, cleaningMode: ${this.cleaningMode}`);
};

module.exports = VacuumCleaner;
