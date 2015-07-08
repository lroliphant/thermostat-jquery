var Thermostat = function() {
  this.temperature = 20;
  this.powerSave = true
  this.color = this.changeColor();

};

Thermostat.prototype.increase = function () {
  if (this.temperature >= 25 && this.powerSave === true) {
    return this.temperature = 25 ;
  };
  if (this.temperature >= 32) {
    return this.temperature = 32 ;
  };
  (this.temperature = this.temperature + 1)
};

Thermostat.prototype.decrease = function () {
  if (this.temperature <= 10) {
    return this.temperature = 10 ;
  }
  this.temperature = this.temperature - 1;
};

Thermostat.prototype.powerSaveOff = function () {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSave = true;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};

Thermostat.prototype.changeColor = function () {
    if (this.temperature < 18) {
      return 'low';
    }
    else if (this.temperature < 25) {
      return 'medium';
    }
    else {
      return 'high';
    };
};

// Thermostat.prototype.color = function() {
//   if (this.temperature <= 18);
//     return 'green';
// };
