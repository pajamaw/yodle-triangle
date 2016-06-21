fs = require('fs');

//filepath =
// '/Users/pjwickwire/Development/Interviews/yodle-triangle/triangle.txt'
//Here I use the data callback of the readFile method to utitlize the actual file.
function getAnswer(filepath){
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var lineByLine = data.split(/\n/);
    var lineBy2 = [];

    for(i = 0; i < lineByLine.length; i++ ){
      console.log(lineByLine[i].split(/\s/));
      lineBy2.push(lineByLine[i].split(/\s/));
    }

    console.log(lineByLine);
    console.log(lineBy2);
    //return lineByLine;
    //console.log(data);
  while(lineBy2.length !== 1){
    var bigLen = lineBy2.length;
    var row = [];
    var miniArr = lineBy2[bigLen-2];
    var currentPos = lineBy2.length - 1;
    var end = lineBy2[bigLen-1];

    for(i = 0; i <= currentPos; i++ ){
      row.push(Math.max(parseInt(miniArr[i]) + parseInt(end[i]) || 0, parseInt(miniArr[i]) + parseInt(end[i+1]) || 0) )
    }

  lineBy2.pop();
  lineBy2.pop();

  lineBy2.push(row);
}

console.log(lineBy2);
  });
}
