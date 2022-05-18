const VacuumCleaner = require('./VacuumCleaner.js');
const RobotCleaner = require('./RobotCleaner.js');
const RobotSoldier = require('./RobotSoldier.js');

const vacuumCleaner = new VacuumCleaner({
  power: 300,
  state: false,
  cleaningMode: 'wet',
});

const robotCleaner = new RobotCleaner({
  power: 700,
  state: false,
  cleaningMode: 'dry',
  mapScanningStatus: 'not scanned',
});

const robotSoldier = new RobotSoldier({
  power: 1500,
  state: false,
  mapScanningStatus: 'not scanned',
  shootingStatus: 'not shooting',
});

vacuumCleaner.turnOn();
robotCleaner.turnOn();
robotSoldier.turnOn();
