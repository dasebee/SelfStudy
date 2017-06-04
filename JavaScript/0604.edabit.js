/* 170604 https://edabit.com/ JavaScript 문제 풀기. */ 

// 1.Find The Smallest Number 
// 배열을 입력받아 가장 작은 값을 반환하는 함수
// Math.min과 Spread syntax(전개 연산자)를 사용. 
// 전개 연산자는 복수의 인수(함수 호출 용) 혹은 복수의 요소(배열 리터럴용)혹은 복수의 값(비구조화 할당용)이 예상되는 곳에 확장될 수 있도록한다. 
function findSmallestNum(arr) {
  return Math.min(...arr);
}


//2. Alphabet Soup
//문자열을 입력받아 알파벳순으로 정렬한 뒤 반환하는 함수
//입력 받은 문자열을 split으로 배열로 만든 뒤 sort로 정렬 후 join으로 문자열을 만들었다.
/* str.split([separator[, limit]])
separator : 문자열을 구분하는데 사용하기 위한 문자를 지정한다. separator가 생략된 경우, 문자열 전체가 한개의 요소가된다. separator가 공문자인 경우 str은 문자배열이 된다.
limit : 분할 결과의 수의 제한을 지정하는 정수.*/
/* str = arr.join([separator = ','])
separator : 선택적 인수. 배열의 각 요소를 구분할 문자열을 지정.생략하면 배열의 요소들이 쉼표로 구분된다. separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결된다. */
function AlphabetSoup(str) {
  arr = str.split("");
  arr = arr.sort();
  return arr.join("");
  //return str.split('').sort().join('');
}

//3.Return The Four Letter Strings
//배열을 입력받아 글자 수가 4개인 것들만 반환하는 함수
//Array.prototype.filter()를 사용
//filter() 메소드는 제공된 함수로 구현된 테스트를 통과하는 모든 요소가 있는 새로운 배열을 만든다.
function isFourLetters(arr) {
  var resultFourLetters = arr.filter(function(arr){
    return arr.length === 4;
  })
  return resultFourLetters;
  //return arr.filter(x => x.length === 4);
}

//4.Shuffle The Name
//성과 이름을 문자열로 입력받아서 순서를 바꾸는 함수
/*Array.prototype.reverse()
reverse() 메서드는 배열을 반전시킨다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 된다.*/
function nameShuffle(str) {
  return str.split(' ').reverse().join(" ")
}

//5. Filter Strings From Array
//입력받은 배열에서 숫자만 찾아서 반환하는 함수
function filterArray(arr) {
    var filter_result=[];
    for (var i = 0, l = arr.length; i < l; i++){
        if(typeof arr[i] ==='number'){
            filter_result.push(arr[i]);
        }
    }
    return filter_result;

    // return arr.filter(n => typeof n === 'number');
}

//6.Check If String Ending Matches Second String
//두개의 문자열을 입력받아서 첫번째문자열의 끝이 두번째 문자열과 같은지 확인.
/* str.endsWith(searchString[, position])
   searchString : 검색대상이 되는 문자열. 
   position : 찾고자 하는 문자열의 길이, 기본값은 문자열 전체 길이.
*/
function checkEnding(str1, str2) {
  return str1.endsWith(str2)? true : false;
  //return str1.endsWith(str2); 
}
  //endsWith의 반환값이 true,false이기 때문에 삼항식을 쓰지 않아도... 

//7.Absolutely Sum
//숫자 배열을 받아서 각 값의 절대치의 합을 구하는 함수.
//Math.abs() : 인수로 주어진 수의 절대치를 반환한다. 
function getAbsSum(arr){
 var sum = 0;
 for(i = arr.length-1; i > -1; i--){
   sum += Math.abs(arr[i]);
 } 
  return sum;
}

//8.Eliminate All Odd Numbers Within An Array
//입력받은 배열 내에 있는 짝수만 반환하는 함수. 
function noOdds(arr) {
  return arr.filter(x=> x % 2 === 0);
}