function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < 4; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return empty;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < 4) {
    array[i] = `${array[i]}` + "!!!";
    i++;
 }
  return facts;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.unshift("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return empty;
}
