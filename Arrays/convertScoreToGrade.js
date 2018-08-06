function convertScoreToGrade(score) {
    
 if (score > 100 || score < 0 ) {
  return 'PUNTUACION INVALIDA';
}

if (score >= 90) {
  return 'A';
}else if (score >= 80 && score <= 89) {
  return 'B';
}else if (score >= 70 && score <= 79) {
  return 'C';
}else if (score >= 60 && score <= 69) {
  return 'D';
}else if (score <= 59 && score >= 0){
  return 'F';
}
}

var output = convertScoreToGrade(91);
var outpu = convertScoreToGrade(81);
console.log(output); // -> 'A'
console.log(outpu); // -> 'B'
