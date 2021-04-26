var string = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var numArray = [10,300,5, 69, 69420];

var answers = [];
for(var i = 0; i < numArray.length; i++){
	var number = numArray[i];
  var answer = "";
  while(number > 9){
    var u = number % 10;
    number = Math.floor(number/10);
    answer = string[u] + answer;
  }
	answer = string[number] + answer;
	answers.push(answer);
}

function Concatenater (answers) {
    var printStatement = "";
    for(var i = 0; i < answers.length; i++){
      if(i == answers.length - 1){
      printStatement += answers[i];
      }
      else{
      printStatement += answers[i] + ",";
      }
    }
    return printStatement;
  }
  console.log(Concatenater(answers));