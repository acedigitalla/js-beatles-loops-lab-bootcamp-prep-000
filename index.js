function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (let i = 0; i < 4; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return empty;
}

function johnLennonFacts(array) {
  var facts = 4;
 while (facts > 0) {
   array[facts]= (array[facts] + "!!!");
   --facts;
 }
  return array;
}
