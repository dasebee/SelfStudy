/* 170626 https://edabit.com/ JavaScript 문제 풀기. */ 

// 1. Maskify The String
// 입력 받은 문자열의 뒤에 네글자 말고는 #으로 변환하여 반환하기. 
// 글자 길이가 4보다 작은 경우는 입력받은 그대로를 반환. 

//내 코드 

function maskify(str) {
  //str의 길이가 4보다 작거나 같으면 str을 반환
  if(str.length <= 4){return str}
  //str의 길이가 4보다 크면
  //str을 배열로 만든 뒤 모든 글자를 #으로 바꿔서 0번째 인덱스 부터 길이보다 4 적은 만큼만 잘라내서 문자열로 만들기(join) 더하기 
  //str을 배열로 만든 뒤 뒤에서 4글자만 잘라낸 다음 문자열로 만들어서 반환
  return str.split("").map(function(str){ return str.replace(str,"#")}).splice(0, str.length-4).join("") + str.split("").splice(-4).join("")
}

// 정리! 

// Array.prototype.splice()
// array.splice(start, deleteCount[, item1[, item2[, ...]]])
// start : 변경이 시작되는 인덱스, 음수인 경우 배열의 뒤에서 부터 시작.
// deleteCount : 배열에서 제거를 할 요소의 수, 0이면 아무것도 제거하지 않는다. 
// itemN : 배열에 추가할 요소, 생략하면 오직 제거만 한다. 

// String.prototype.replace()
// str.replace(regexp|substr, newSubStr|function)
// regexp|substr : 교체 당할 값
// newSubStr|function : 대신 들어 갈 값.


// 다른 사람의 코드 

function maskify(str) {
  if(str.length > 5)
    {
      //문자열 길이보다 4 작은만큼 #을 반복한 것에 문자열에서 끝에 4글자만 더해서 반환.  
      return "#".repeat(str.length -4) + str.substring(str.length -4);
    }
  return str;
}

// 정리!

// String.prototype.repeat()
// str.repeat(count)
// 호출 한 문자열(str)을 지정한 수(count) 만큼 복사. 

// String.prototype.substring()
// str.substring(indexStart[, indexEnd])
// substring() 메소드는 String의 부분 집합을 반환 
// indexStart와 indexEnd가 같은 경우 공문자열을 반환한다. 
// indexEnd가 생략된 경우, 문자열의 마지막 문자까지를 반환한다. 
// 모든 인수가 0미만, 혹은 Nan 인 경우 0으로 취급한다.
// 모든 인수가 문자열의 길이보다 큰 경우, 문자열의 길이로 취급한다. 


//2.ATM PIN Code Validation
// 4자리 숫자나 6자리 숫자만 true

// 내 코드 
function validatePIN(pin) {
//  만약에 입력 받은 pin의 길이가 4이나 6 인데
  if(pin.length === 4 || pin.length === 6){
      // 숫자가 아닌 것을 포함하지 않은 경우 true.
    if(pin.search(/\D/)=== -1) {return true;}
    // 숫자가 아닌 것을 포함 했다면 false
    else return false;
  }
    // pin의 길이가 4나 6이 아니라면
	return false;
}

// 정리!!

// 정규 표현식 
// \d는 숫자인 것 [0-9]와 동일
// \D는 숫자가 아닌 것 [^0-9] 와 동일 

// String.prototype.search()
// str.search(regexp)
// search() 메소드는 대상 String이 정규 표현과 매치하는지 여부를 조사한다.
// 매치한 경우, 문자열 내에서 매치한 곳의 인덱스를 반환. 매치하지 않은 경우는 -1을 반환. 

//3. Check For Anagrams
// 입력 받은 두 문자열이 아나그램인지 확인하여 true/false 반환
function isAnagram(s1, s2) {
    // 두 문자열을 소문자로 바꾸고 배열로 바꾼 다음 정렬한다. 
  s1 = s1.toLowerCase().split("").sort()
  s2 = s2.toLowerCase().split("").sort()
  for(var i=s1.length; i--; ){
      // 각각의 글자가 일치하지 않으면 false를 반환.
    if(s1[i] !== s2[i]){ return false}
  }
  // 일치한다면 (for문 끝날 때까지 false가 반환되지 않았으니) true 반환.
  return true;
}

// 배열로 만든뒤 for문으로 비교할 것이아니라 다시 join으로 문자열을 만든뒤 
// return s1 === s2 하면 ... 되는... 것... 

// 4. Isogram Test
// 입력 받은 문자열에서 같은 문자가 반복되어서 등장하면 false 아니면 true. 공백과 -는 무시.
// 대소문자 구분은 하지 않는다. 

function isogramTest(input) {
    // 대소문자 구분을 하지 않기 때문에 문자열을 소문자로 변환한다. 
  input = input.toLowerCase()
  for(var i =0, l=input.length; i<l; i++){
    // 공백문자와 -는 무시한다.
    if(input[i]==='-'|| input[i]===' '){ continue;}
    // 첫번째 글자부터 하나하나 확인하면서, 그 문자 이후에 같은 문자가 있다면 false를 반환한다. 
    else if(input.indexOf(input[i],i+1)!==-1){return false}
  }
  return true;
}

//정리!!

// String.prototype.indexOf()
// str.indexOf(searchValue[, fromIndex])
// indexOf() 메서드는 호출한 String 객체에서 특정 값의 첫 번째 일치하는 인덱스를 반환한다. 일치하는 값이 없으면 -1을 반환.  
// searchValue : 찾고자 하는 문자열
// fromIndex Optional : 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값.


// 5. Remix The String
// 문자열을 배열에 입력된 순서대로 섞어서 반환. 
// remix("abcd", [0, 3, 1, 2]) => "acdb"

function remix(str, arr) {
    // 결과를 담을 배열을 선언
  result = [];
  for(var i = str.length; i--; ){
      //arr의 i번째 값을 index로 갖는 result의 위치에 문자열의 i번째 글자를 넣어준다. 
    result[arr[i]] = str[i];
  }
  //배열을 문자열로 만들어서 반환. 
  return result.join('');
}
