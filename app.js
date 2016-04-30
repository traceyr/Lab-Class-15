var dropDownArray = [];

function DropDownObject(leftData, rightData, dropDownValue){
  this.leftData = leftData;
  this.rightData = rightData;
  this.dropDownValue = dropDownValue;
  dropDownArray.push(this);
};

var objectOne = new DropDownObject('Inches', 'Centimeters', 'in/cm');
var objectTwo = new DropDownObject('Fluid oz', 'Milliliters', 'floz/ml');
var objectThree = new DropDownObject('Miles', 'Kilometers', 'miles/km');
var objectFour = new DropDownObject('Pounds', 'Kilograms', 'lbs/kg');
var objectFive = new DropDownObject('Standard Shit Tons', 'Metric Shit Tons', 'standard/metric');

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

objectOne.leftfnt = function inToCm(number) {
  return number * 2.540;
};

objectOne.rightfnt = function cmToIN(number) {
  return number / 2.540;
};

objectTwo.leftfnt = function flToMl(number) {
  return number * 29.574;
};

objectTwo.rightfnt = function mlToFl(number){
  return number / 29.574;
};

objectThree.leftfnt = function mToKm(number) {
  return number * 1.609;
};

objectThree.rightfnt = function kmToM(number) {
  return number / 1.609;
};

objectFour.leftfnt = function lbsToKg(number) {
  return number * 0.454;
};

objectFour.rightfnt = function kgToLbs(number) {
  return number / 0.454;
};

objectFive.leftfnt = function stndToMetric(number) {
  return number * 0.907;
};

objectFive.rightfnt = function metricToStnd(number) {
  return number / 0.907;
};

function handleLeftClick(e) {
  e.preventDefault();
  var leftConv = document.getElementById('leftConv');
  for (var j = 0; j < dropDownArray.length; j++){
    if(leftConv.innerHTML === dropDownArray[j].leftData){
      console.log('YEAHHHH');
      var leftValue = document.getElementById('leftText').value;
      console.log(leftValue);
      var leftfntValue = dropDownArray[j].leftfnt(leftValue);
      console.log(leftfntValue);
      var elRight = document.getElementById('leftTextContent');
      elRight.textContent = leftfntValue + ' ' + dropDownArray[j].rightData;
    }
  }
}

function handleRightClick(e) {
  e.preventDefault();
  var rightConv = document.getElementById('rightConv');
  for (var j = 0; j < dropDownArray.length; j++){
    if(rightConv.innerHTML === dropDownArray[j].rightData){
      console.log('YEAHHHH');
      var rightValue = document.getElementById('rightText').value;
      console.log(rightValue);
      var rightfntValue = dropDownArray[j].rightfnt(rightValue);
      console.log(rightfntValue);
      var elLeft = document.getElementById('rightTextContent');
      elLeft.textContent = rightfntValue + ' ' + dropDownArray[j].rightData;
    }
  }
}

var leftButtonClick = document.getElementById('leftButton');
leftButtonClick.addEventListener('click', handleLeftClick);

var rightButtonClick = document.getElementById('rightButton');
rightButtonClick.addEventListener('click', handleRightClick);
