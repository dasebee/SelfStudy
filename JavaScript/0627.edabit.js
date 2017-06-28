/* 170627 https://edabit.com/ JavaScript 문제 풀기. */ 

// 1.Return The Index of All Capital Letters
// 문자열의 대문자가 있는 위치의 index들을 모아서 배열로 반환
function indexOfCaps(str) {
    //결과를 담을 배열을 선언
  var result = [];
  //문자열을 배열로 만든다음 한글자씩 대문자인지 확인(/[A-Z]/.test)
  //대문자라면 result 배열에 index 값을 넣는다.  
  str.split('').forEach(function(item, index){
    if(/[A-Z]/.test(item)){result.push(index);}
  })
  return result
}



// 2. Purge And Organize
// 중복되는 숫자는 제거하고 순서대로 정렬하여 반환

function uniqueSort(arr) {
  // 결과를 담을 배열을 선언
  var result = [];
  //배열을 순서대로 정렬   
  arr.sort(function(a,b){return a-b;})
  for(var i=0, l=arr.length; i<l; i++){
      //만약에 배열의 다음 요소랑 값이 같지 않다면 결과 배열에 값을 넣는다. 
      if(arr[i] !== arr[i+1]){
        result.push(arr[i]);
      }
  }
  return result;
}

// 다른 사람 코드 
function uniqueSort(arr) {
  return Array.from(new Set(arr)).sort((a,b) => a - b);
}

// Array.from(arrayLike)  
// Array.from() 메소드는 유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만든다.
// 유사 배열 객체 (length 속성과 인덱싱된 요소를 가진 객체) 
// 반복 가능한 객체 (Map과 Set과 같이 객체의 요소를 얻을 수 있는 객체).

// Set
// Set 객체는 어떤 형(원시 값이든 객체 참조든)이든 유일한 값을 저장할 수 있다.
// new Set([iterable]); 
// Set 객체는 값 컬렉션으로, 삽입 순으로 그 요소를 반복(iterate)할 수 있다. 
// Set 내 값은 한 번만 발생할 수 있다. 즉, 그 값은 Set 컬렉션 내에서 유일.

