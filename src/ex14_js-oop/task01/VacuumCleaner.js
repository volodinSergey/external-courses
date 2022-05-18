const ElectricalDevice = require('./ElectricalGadget.js');

function VacuumCleaner(options) {
  ElectricalDevice.call(this, options);

  this.cleaningMode = options.cleaningMode;
}

VacuumCleaner.prototype = { ...ElectricalDevice.prototype };

ElectricalDevice.prototype.changeCleaningMode = function changeCleaningMode() {
  if (this.state === false) {
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

module.exports = VacuumCleaner;
