var readlineSync=require("readline-sync")
var question="What is your name? ";
var username=readlineSync.question(question);
console.log("Welcome to DO YOU KNOW Ritish??,",username);
console.log("Let's start the game!!");
var score=0;
function play(qu,ans)
{
  var userans=readlineSync.question(qu);
  if(userans===ans)
  {
    console.log("You are right!!");
    score++;
  }
  else{
    console.log("You are wrong")
    score--;
  }
  console.log("Your score is: ",score);
}
// var questionone={question:"Where does he study?",answer:"NIT Raipur"};
// var questiontwo={question:"Where did he interned at?",answer:"Assurant"};
// var questionthree={question:"Where did he get his FTE oppurtunity on campus?",answer:"ZS Associates"};
var queans=[{question:"Where does he study?",answer:"NIT Raipur"},{question:"Where did he interned at?",answer:"Assurant"},{question:"Where did he get his FTE oppurtunity on campus?",answer:"ZS Associates"}
]
for(var i=0;i<queans.length;i++)
{
  var curritr=queans[i];
  play(curritr.question,curritr.answer);
}
console.log("Your final score is: ",score)
