/* 170611 https://edabit.com/ JavaScript 문제 풀기. */ 

//1.Calculate The Mean Average
//배열을 입력받아 평균을 구한뒤 반환. 반환 값은 소수점 2번째자리 까지
//Number.prototype.toFixed() 고정 소수점 표기법을 사용하여 숫자를 반환. 반환값은 문자열.
function mean(arr) {
  var result = 0;
  for(var i = arr.length ; i--; ){
    result += arr[i];
  }
  return Number((result/arr.length).toFixed(2));
}

//2. Sort Numbers In Descending Order
// 입력받은 숫자를 내림차순으로 정렬하여 반환.
function sortDecending(num) {
  return Number(String(num).split("").sort().reverse().join(""));
}

//3. Sort Numbers In Ascending Order
// 입력받은 숫자 배열을 오름차순으로 정렬하여 반환. null,undefined,[] 은 []를 반환.
// Array.prototype.sort() 배열의 요소를 적절한 위치에 정렬하고 배열을 반환.기본 정렬 순서는 문자열 유니 코드 코드 포인트에 따른다.
// arr.sort(compareFunction)정렬 순서를 정의하는 함수를 지정할 수 있다. 
// return값이 0보다 작으면 a가 b보다 낮은 index 값을 갖고 0보다 크면 b가 낮은 인덱스 값을 같는다. 0이라면 두수는 같다. 
function sortNumsAscending(arr) {
  return arr===null || arr===undefined || arr===[]? [] :arr.sort(function(a,b){return a-b;})
}

//4. Is The Phone Number Formatted Correctly?
//입력 받은 문자열이 전화번호 형식((123) 456-7890)에 맞은 true 아니면 false를 반환.

function isValidPhoneNumber(str) {
var reg = /[0-9]/;
    for(var i =0, l=str.length; i<l; i++){
        if(str.length!==14){
            return false;
        }
        else if(str[i]==="("){
            if(i!==0) return false;
        }
        else if(str[i]===")"){
            if(i!==4) return false;
        }
        else if(str[i]===" "){
            if(i!==5) return false;
        }
        else if(str[i]==="-"){
            if(i!==9) return false;
        }
        else if(!(reg.test(str[i]))){
                return false;           
        }
    }
  return true;
  //return (/^\(\d{3}\) \d{3}-\d{4}$/).test(str); 정규표현식을 쓰면 이렇게 간단하게 할 수 있다고... ㅠㅠ 
}

//5. Return The Middle Character(s) In A String
//입력 받은 문자열의 가운데 글자를 반환. 짝수면 2글자, 홀수면 1글자.
function getMiddle(str) {
  var str_pos = Math.floor(str.length/2)
  return str.length %2 === 0 ? str[str_pos-1]+str[str_pos] : str[str_pos];
}