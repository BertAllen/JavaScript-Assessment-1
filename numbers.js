//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var sum = num10+string8+one;
//var correctSum =num10+ number(string8) +one
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for(i=20; i<101; i++){
    if(i%3===0){
        console.log(i);
    }
}


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var tot = 0;
for(i=0; i<scores.length; i++){
    tot += scores[i];
}
console.log(tot/scores.length)