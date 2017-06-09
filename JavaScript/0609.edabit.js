/* 170609 https://edabit.com/ JavaScript 문제 풀기. */ 

// 1. Silence President Trump!
// 입력된 문자열에서 모음은 제거하고 반환하기
// 정규표현식 : /[^aiueo]/gi  a또는 i또는 ...o가 아니고 대소문자 구분하지 않음을 의미
// String.prototype.match() : 정규 표현에 대한 문자열을 매칭할 때 그 매치 결과를 얻기 위해 사용된다. 반환은 배열. 
function silenceTrump(str) {
  return str.match(/[^aiueo]/gi).join("");
}

//2. Head-Body-Tail
// 4개의 문자열을 입력받아서 첫번째 문자열이 두번째 문자열로 시작되고 세번째 문자열을 포함하고 네번째 문자열로 끝나면 
// "My head, body, and tail."를 반환 아니라면 "Incomplete."을 반환. 
//String.prototype.startsWith(): 어떤 문자열이 특정 문자로 시작하는지 확인 할 수 있으며, 그 결과는 true 혹은 false로 반환.
//String.prototype.endsWith() : 어떤 문자열이 특정 문자로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환.
//String.prototype.includes() : 하나의 문자열이 다른 문자열에 포함되어 있는지를 결정하고, 그 결과를 true 또는 false 로 반환.

function verifySubstrs(mainStr, head, body, tail) {
  return mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)? 
        "My head, body, and tail.": "Incomplete.";
}

// 3.Count Ones In Binary Representation Of Integer
// 입력 받은 숫자를 2진수로 변환했을 때 1이 몇개 포함되는지를 반환.

function countOnes(i) {
  var  result = 0;
  for( ;i>0 ;){
    if(i%2 === 1){ result++; }
    i = Math.floor((i/2)); 
  }
  return result;
}

//Number.prototype.toString()을 사용하면 쉽게 2진수로 변환할 수 있다 ㅜㅜ
//numObj.toString([radix])  
//radix : 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)
// (6).toString(2) => 2진수로 변환
 

//4. Is It Time For Milk And Cookies?
// 입력 받은 날짜가 12월 24일이면 true 아니라면 false를 반환한다. 
// Date.prototype.getMonth()를 했을 때 월은 0부터 시작하기 때문에 주의 12월이면 11이 반환된다. 
function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24 ? true : false;
  //return date.getMonth() === 11 && date.getDate() === 24 만 해도 true/false를 반환.
}

// 5.Capitalize The Names
// 배열의 입력받아서 각 원소의 첫번째 글자를 대문자 나머지를 소문자로 변환.
// str.substring(indexStart[, indexEnd]): indexStart에서 indexEnd 미만의 문자를 반환한다. 
function capMe(arr) {
	var result = [];
  for(var i =0 , l = arr.length; i < l; i++ ){
    result.push(arr[i].substring(0,1).toUpperCase()+arr[i].substring(1,arr[i].length).toLowerCase());
  }
  return result;
}