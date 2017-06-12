/* 170611 https://edabit.com/ JavaScript 문제 풀기. */ 

//1.Return The Sum Of The Two Smallest Numbers
// 입력 받은 배열에서 가장작은 값 두개의 합을 반환(음수는 무시)
// filter를 이용하여 arr에서 음수를 거르고, sort를 이용하여 오름차수로 정렬한 다음에 
// 배열의 첫번째와 두번째 요소를 더한 값을 반환한다. 
function sumTwoSmallestNums(arr) {
  arr = arr.filter(function(value){return value>-1;}).sort(function(a,b){return a-b;})
  return arr[0] + arr[1];
}

//2.Capitalize The First Letter Of Each Word
//문자열을 입력 받아 각 단어의 첫번째 글자를 대문자로 변환해서 반환.
//1)입력 받은 문자열을 공백을 기준으로 나눠서 배열에 담는다. 
//2)첫번쨰 단어를 나눠서 배열에 담는다. 1번에서 만든 배열에 첫번째 요소는 배열에서 삭제한다. 
//3)단어의 첫번째 글자를 대문자로 바꿔서 변수에 담아준다. 
//4)단어를 담은 배열의 첫번째 요소를 삭제하고 그 자리에 대문자로 바꾼 값을 다시 넣어준다. 
//5)단어 배열을 다시 문자열로 바꿔 준 뒤 처음 만들었던 배열의 가장 뒤에 값을 넣어준다. 
//6)이것을 처음에 만들었던 배열의 길이 만큼 반복한다. 
//7)배열을 문자열로 변환한뒤 반환한다. 

function makeTitle(str) {
  var str_array = str.split(" "), 
      upper_array,
      first,
      len = str_array.length;
      
  while(len--){
    upper_array = str_array[0].split("");
    str_array.shift();
    first = upper_array[0].toUpperCase()
    upper_array.shift();
    upper_array.unshift(first);
    str_array.push(upper_array.join(""));
  }

  return str_array.join(" ");
}

//다른사람 풀이 ㅠㅠ;
// str.slice(0,1) 는 첫번째 글자부터 한 글자. str.slice(1)은 두번째 글자부터 끝까지.  
// function makeTitle(str) {
//   var words = str.split(' ');
//   for (var i = 0; i < words.length; i++){
//     words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(' ');
// }

//3.Return The Objects Keys And Values
//입력 받은 객체의 key를 모은 배열과 value를 모은 배열을 한 배열에 담아서 반환. 

function keysAndValues(obj) {
 var result = [], key_array = [], value_array = [];
 for (var key in obj){
   key_array.push(key);
   value_array.push(obj[key]);
 } 
  result.push(key_array)
  result.push(value_array);
  return result;
}