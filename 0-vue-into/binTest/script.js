const arrlist = document.querySelector('.arr-list');
const arrListValue =  document.querySelector('#arrListValue');
const initalPoint =  document.querySelector('#inital-point');
const startingPoint = document.querySelector('.starting-point');
const btnSampGen= document.querySelector('.btn-sampgen');
const  btnTestData = document.querySelector('.btn-testData');
const testObj = {
    'arrObj': [0,2,2,0],

    'intialPoint' : 2
}
const display =()=>{
    arrListValue.innerHTML  = '<span>' + testObj.arrObj +'</span>' 
    initalPoint.innerHTML  = '<span>' + testObj.arrObj[testObj.intialPoint] +'</span>'
}
function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
    }
const genereSampleValue=()=>{
    let sampleApp = [];
    sampleApp[0]=0;
    let lengthArr = getRndInteger(4, 9);
    sampleApp[lengthArr-1]=0;
    let sampleStartingPoint=  getRndInteger(1, 7)
     for (i=1 ; i <= lengthArr-1 ; i++)
     sampleApp[i]= getRndInteger(2, 8);
     testObj.arrObj = sampleApp;
     testObj.intialPoint= sampleStartingPoint;
     display();
}
btnSampGen.addEventListener('click', genereSampleValue)

const loadData=()=>{
  display() 
}

loadData();





