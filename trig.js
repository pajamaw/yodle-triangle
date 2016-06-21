fs = require('fs');

//filepath = '/Users/pjwickwire/Development/Interviews/yodle-triangle/triangle.txt'
//Here I use the data callback of the readFile method to utitlize the actual file.
function getAnswer(filepath){
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    //console.log(data);
    triPuzzle(makeFinished(makeManageable(data)));
  });
}
//Here i pass the newly saved variable theNumbers to create an array
//that sorts every line of the pyramid into its own string element
function makeManageable(file){
    var lineByLine = file.split(/\n/);
    console.log(lineByLine);
    return lineByLine;
  //iterate through each line then split each line into another array by \s
}
//Next we pass  lineByLine , and iterate through each element sorting every element into a new array based on how many specific numbers are
//in teh string of text. so now we will have [[1], [1, 2], [1, 2, 3]...etc]
//it will also give us extra elements of white space - but that's fine as it won't mess up the
//actual method.
function makeFinished(array){
  var lineBy2 = [];
  for(i = 0; i < array.length; i++ ){
    console.log(array[i].split(/\s/));
    lineBy2.push(array[i].split(/\s/));
  }
  return lineBy2;
}
//A simple add method for a final total
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
//And the main puzzle itself, I use two loops to iterate through the newly formatted
//nested array it selects the highest number in each array than pushes that number to
//a newly created array to store the infor for later.
function triPuzzle(numb){
  var largest=0;
  var la = [];
  for (i = 0; i < numb.length; i++){
    for (b = 0; b < numb[i].length; b++){
      if (parseInt(numb[i][b]) > largest){
        //console.log(largest);
        largest = parseInt(numb[i][b])
      };
    };
    la.push(largest);
    //console.log(largest);
    //console.log(la);
    largest = 0;
    //console.log(largest);
    //console.log(la)
  };
  console.log(la);

  var sum = la.reduce(add, 0);
  console.log("The maximum possible sum is " + sum);
  console.log("The length of the answer array is " + la.length);
}
