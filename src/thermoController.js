var thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = (thermostat.temperature);

$("#increaseTemperatureButton").on("click", increaseTemperature);
$("#decreaseTemperatureButton").on("click", decreaseTemperature);
$("#changePowerStateCheckbox").on("click", changePowerState);
$("#restartThermostatButton").on("click", restartThermostat);

$("button.changeColour").on("click", energyUse);

function increaseTemperature() {
  thermostat.increase();
  // energyUse();
  showTemperature();
};

function decreaseTemperature(){
  thermostat.decrease();
  // energyUse();
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
  // energyUse();
  document.getElementById("temperature").innerHTML = (thermostat.temperature);
};

function energyUse() {
  if(thermostat.changeColor() === 'high') {
    $('.colour').addClass("high")
  }
  if( thermostat.changeColor() === 'medium') {
    $('.colour').addClass("medium")
  }
  if( thermostat.changeColor() === 'low') {
    $('.colour').addClass("low")
  };
};

// function energyUse() {
//   $('#temperature').switchClass( $('#temperature').attr('class'), thermostat.changeColor()) ()
// };


