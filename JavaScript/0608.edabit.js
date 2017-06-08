/* 170608 https://edabit.com/ JavaScript 문제 풀기. */ 

// 1. How Many Vowels? 
// 입력 받은 문자열에서의 문자열 개수를 카운트. 
// 정규 표현식 사용. /[aeiou]/ []를 써주면 a 이거나 e 이거나 i 이거나 ... 이라는 의미.
//RegExp.prototype.test() 대상 문자열 속에 일치하는 문자열이 포함되어 있는지 검사하고 true 또는 false를 반환. 
function countVowels(str) {
  var vowels_pattern = /[aeiou]/, count = 0;
	for(var i = str.length; i--;){
    if(vowels_pattern.test(str[i])){
      count++;
    }
  }
  return count;
//   return str.match(/[aeiou]/g).length;   // <-- ???? 정규표현식 공부하자 ㅠㅠ
}

//2.Find The Minimum, Maximum, Length And Average Values
// 배열을 입력받아 최소값, 최대값 길이와 평균을 구하여 배열로 반환한다. 
// Math.min(), Math.max() 는 두개의 값만 받을 수 있는데 전개연산자를 사용하면 배열도 넣을 수 있다."..."를 잊지말자. 
function minMaxLengthAverage(arr) {
  var result = [], sum=0;
  result.push(Math.min(...arr));
  result.push(Math.max(...arr));
  result.push(arr.length);
  for(i = arr.length; i--;){
    sum+= arr[i];
  }
  result.push(sum/arr.length);
  return result;
} 

//3.X's And O's
//입력 받은 문자열에서 x와 o의 개수가 같으면 true/ 다르면 false. 

function XO(str) {
  var x_pattern = /[xX]/, o_pattern = /[oO]/, x_count = 0, o_count = 0;
  for(i=str.length; i--; ){
    if(x_pattern.test(str[i])){
      x_count++;
    }
    else if(o_pattern.test(str[i])){
      o_count++;
    }
  }
  return x_count===o_count;
}

//4.Find The Largest Numbers In A Group Of Arrays
//배열의 포함하고 있는 배열을 전달 받아서, 각 그룹의 가장 큰 수들을 담은 배열을 반환한다. 

function findLargestNums(arr) {
  var result = [];
  for(var i =0, len1= arr.length; i<len1; i++){
			result.push(Math.max(...arr[i]));
  }
  return result;
}

//5.Phone Number Formatting
//숫자가 담긴 배열을 입력받아 전화번호 형식((345) 501-2527)에 맞게 변환. 
function formatPhoneNumber(numbers) {
  var result = "(";
  for(var i =0, l=numbers.length; i<l; i++){
    if(i===2){
      result += numbers[i]+") ";
    }
    else if(i===5){
      result += numbers[i]+"-";
    }
    else{
      result += numbers[i];
    }
  }
  return result;
}