/* 170605 https://edabit.com/ JavaScript 문제 풀기. */ 

//1.Repeating Letters
//입력 받은 문자열의 각 글자를 2번씩 반복하여 반환하는 함수. 
//Array.prototype.map()
//map()메소드는 배열 내의 모든 요소에 대하여 제공된 함수를 호출하고, 그 결과를 모아서, 새로운 배열을 반환.
function doubleChar(str) {
  var arr = str.split("");
  var result = arr.map(function(x){
    return x + x;
  })
  return result.join("");
  //str.split('').map(x => x + x).join('');
}

//2.Add Up The Numbers From A Single Number
//1에서부터 입력받은 값까지의 합을 더해서 반환.
function addUp(num) {
  var result = num;
  while(num--){
    result +=num;
  }
  return result
}
//재귀함수 사용. 
// function addUp(num) {
//   if (num === 1) return 1;
//   return num + addUp(num - 1);
// }

//3.Find The Biggest And Smallest Numbers
//배열에서 가장 큰 수와 작은 수를 찾아서 배열로 반환
function minMax(arr) {
  var result=[];
  result.push(Math.min(...arr));
  result.push(Math.max(...arr));
  return result;
//   return [Math.min(...arr), Math.max(...arr)];
}
