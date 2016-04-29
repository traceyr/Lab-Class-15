var dropDownArray = [];

function DropDownObject(leftData, rightData, dropDownValue){
  this.leftData = leftData;
  this.rightData = rightData;
  this.dropDownValue = dropDownValue;
  dropDownArray.push(this);
};

new DropDownObject('Inches', 'Centimeters', 'in/cm');
new DropDownObject('Fluid oz', 'Milliliters', 'floz/ml');
new DropDownObject('Miles', 'Kilometers', 'miles/km');
new DropDownObject('Pounds', 'Kilograms', 'lbs/kg');
new DropDownObject('Standard Shit Tons', 'Metric Shit Tons', 'standard/metric');

var mainDropDown = document.getElementById('mainDropDown');
var buttonOne = document.getElementById('button-1');
buttonOne.addEventListener('click', dropDownSelector);

function dropDownSelector(){
  var mainDropDownValue = mainDropDown.value;
  console.log(mainDropDownValue);
  for (var i = 0; i < dropDownArray.length; i ++){
    if(mainDropDownValue === dropDownArray[i].dropDownValue) {
      console.log('WOOOHOO FUCK YEAH');
      var leftConv = document.getElementById('leftConv');
      var rightConv = document.getElementById('rightConv');
      leftConv.textContent = dropDownArray[i].leftData;
      rightConv.textContent = dropDownArray[i].rightData;
    }
  }
}

function inToCm(number) {
  return number * 2.540;
}

function cmToIN(number) {
  return number / 2.540;
}

function flToMl(number) {
  return number * 29.574;
}

function mlToFl(number){
  return number / 29.574;
}

function mToKm(number) {
  return number * 1.609;
}

function kmToM(number) {
  return number / 1.609;
}

function kgToLbs(number) {
  return number / 0.454;
}

function lbsToKg(number) {
  return number * 0.454;
}

function stndToMetric(number) {
  return number * 0.907;
}

function metricToStnd(number) {
  return number / 0.907;
}
