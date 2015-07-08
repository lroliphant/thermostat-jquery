var thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = (thermostat.temperature);

function increaseTemperature() {
  thermostat.increase();
  energyUse();
  showTemperature();
};

function decreaseTemperature(){
  thermostat.decrease();
  energyUse();
  showTemperature();
};
function changePowerState() {
  if (thermostat.powerSave === true) {
    thermostat.powerSaveOff();
  }
  else {
    thermostat.powerSaveOn();
  };
};

function restartThermostat() {
  thermostat.resetTemperature();
  showTemperature();
};

function showTemperature() { 
  energyUse();
  document.getElementById("temperature").innerHTML = (thermostat.temperature);
};

function energyUse() {
  if( thermostat.changeColor() === 'low') {
    document.getElementById('temperature').className = 'low'
  }
  else if( thermostat.changeColor() === 'medium') {
    document.getElementById('temperature').className = 'medium'
  }
  else if( thermostat.changeColor() === 'high') {
    document.getElementById('temperature').className = 'high'
  }
};