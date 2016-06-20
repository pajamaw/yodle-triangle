var arrayofnumbers = [[1],[1, 2], [1, 2, 3,]]

function triPuzzle(numb){
  var largest=0;
  var la = [];
  for (i = 0; i < numb.length; i++){
    for (b = 0; b < numb[i].length; b++){
      if (numb[i][b] > largest){
        //console.log(largest);
        largest = numb[i][b]
      };
    };
    la.push(largest);
    //console.log(largest);
    //console.log(la);
    largest = 0;
    //console.log(largest);
    //console.log(la)
  };
  return la;
}

var arrayofnumbers = [[1],[1, 2], [1, 2, 3,]]
