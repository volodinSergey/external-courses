/* eslint-disable no-unused-vars */
class ElectricDevice {
  constructor(power = 0, model = '') {
    this.power = power;
    this.state = false;
    this.model = model;
  }

  turnOn() {
    if (this.state) {
      console.log('Device is already turned on!');

      return;
    }

    this.state = true;

    console.log('Device is turned on');
  }

  turnOff() {
    if (!this.state) {
      console.log('Device is already turned off!');

      return;
    }

    this.state = false;

    console.log('Device is turned off');
  }

  getPower() {
    return this.power;
  }
}

class VacuumCleaner extends ElectricDevice {
  constructor(power = 0, model = '', cleaningMode) {
    super(power, model);

    this.cleaningMode = cleaningMode;
  }

  changeCleaningMode() {
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
  }
}

class DrinkMakerMachine extends ElectricDevice {
  constructor(power = 0, model = '', kindOfdrink) {
    super(power, model);

    this.kindOfdrink = kindOfdrink;
  }

  getDrink() {
    if (!this.state) {
      console.log('Device is not turned on!. Please, turn on the device.');

      return;
    }

    console.log(`${this.kindOfdrink} is ready!`);
  }
}

class Televizor extends ElectricDevice {
  constructor(power = 0, model = '', channel = 'ntv') {
    super(power, model);

    this.channel = channel;
  }

  switchChannel(someChannel) {
    if (!this.state) {
      console.log('Device is not turned on!. Please, turn on the device.');

      return;
    }

    this.channel = someChannel;

    console.log(`Tv is switched on ${this.channel}`);
  }
}

class Room {
  constructor(devices = [], roomName) {
    this.devices = devices;
    this.roomName = roomName;
  }

  calculatePower() {
    const turnedOnDevices = this.devices.filter((device) => device.state);

    if (turnedOnDevices.length === 0) {
      console.log('There not turned on devices. There is nothing to calculate.');

      return;
    }

    const powerData = [];

    turnedOnDevices.forEach((device) => powerData.push(device.power));

    const totalPower = powerData.reduce((a, b) => a + b, 0);

    console.log(`Total power is ${totalPower}`);
  }

  findDevice(deviceWeWannaFind) {
    const findedDevice = this.devices.filter((deviceInRoom) => deviceInRoom.model.toLowerCase()
      === deviceWeWannaFind.toLowerCase());

    if (findedDevice.length === 0) {
      console.log(`There is no ${deviceWeWannaFind} in the ${this.roomName}`);

      return;
    }

    console.log(`${deviceWeWannaFind} in ${this.roomName}`);
  }
}

const samsungTv = new Televizor(1500, 'samsungTelevizor');
const dysonVacuumCleaner = new VacuumCleaner(400, 'dysonVacuumCleaner', 'wet');
const livingRoom = new Room([samsungTv, dysonVacuumCleaner], 'livingRoom');

const coffeeMachine = new DrinkMakerMachine(500, 'Coffemachine', 'coffee arabica');
const teaMachine = new DrinkMakerMachine(700, 'Teamachine', 'asian tea');
const kitchen = new Room([teaMachine, coffeeMachine], 'kitchen');
