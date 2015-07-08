var thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = (thermostat.temperature);

$("#increaseTemperatureButton").on("click", increaseTemperature);
$("#decreaseTemperatureButton").on("click", decreaseTemperature);
$("#changePowerStateCheckbox").on("click", changePowerState);
$("#restartThermostatButton").on("click", restartThermostat);

// $("button.changeColour").on("click", energyUse);
// $("#increaseTemperatureButton").on("click", energyUse);
$(".changeColour").on("click", energyUse);

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
  if( thermostat.changeColor() === 'high') {
    $('.colour').addClass('high').removeClass('medium');
  }
  if( thermostat.changeColor() === 'medium') {
    $('.colour').addClass('medium').removeClass('high low');
    // $('.colour').addClass('medium').removeClass('low');
  }
  if( thermostat.changeColor() === 'low') {
      // alert("HELLO")
    $('.colour').addClass('low').removeClass('medium');
  };
};

// function energyUse() {
//   $('#temperature').switchClass( $('#temperature').attr('class'), thermostat.changeColor()) ()
// };
