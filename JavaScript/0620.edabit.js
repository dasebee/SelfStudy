/* 170620 https://edabit.com/ JavaScript 문제 풀기. */ 

// 1.Positive Count / Negative Sum
// 입력 받은 배열에서 양수의 개수와 음수의 합을 배열에 담아 반환. 
// 빈 배열이나 null 값이면 []를 반환  

function countPosSumNeg(nums) {
  var count =0, sum =0, result = [];
  if(nums === null || nums ===[]){
    return [];
  }else{
		for(var i = nums.length; i--;){
      if(nums[i]>0){
        count++
      }else if(nums[i]){
        sum += nums[i];
      }
    }
  }
  if(count === 0 && sum === 0){
    return [];
  }
  result.push(count);
  result.push(sum);
  return result;
}

//2.Is The Number A Prime?
// 입력받은 수가 소수인지 확인해서 true/false 반환
function isPrime(num){
  if(num === 1){ return false;}
  for(var i = 2; i <num; i++){
    if(num%i === 0){ return false; }
  }
  return true;
}

//3. Merge Two Arrays
//입력받은 두 배열을 합친다음 반환.
function mergeArrays(a, b) {
  var len = a.length > b.length ? a.length : b.length;
  var result = [];
  for(var i = 0; i<len; i++){
    //a에 더이상 값이 없으면 result에 b의 값만 push 
    if(!a[i]){
      result.push(b[i]);
      continue;}
    //b에 더이상 값이 없으면 result에 b의 값만 push 
    else if(!b[i]){ 
      result.push(a[i]);
    	continue;}
    result.push(a[i]);
    result.push(b[i]);
  }
  return result;
}

//길이를 구할때 삼항식이 아닌 Math.max()를 활용하는 방법이... 
function mergeArrays(a, b) {
  var result = []
  for (var i = 0, l = Math.max(a.length, b.length) ; i < l ; i++) {
    if (a[i]) result.push(a[i])
    if (b[i]) result.push(b[i])
  }
  return result
}

//4.Reverse The Order Of Words With Five Letters Or More
//입력 받은 문자열에서 5글자 이상인 단어는 reverse해서 반환.
function reverse(str) {
  var str_arr = str.split(' '), result = [];
  for(var i = 0, l=str_arr.length; i<l; i++){
    if(str_arr[i].length>=5){ str_arr[i]=str_arr[i].split('').reverse().join('')}
    result.push(str_arr[i]);
  }
  return result.join(' ');
}

//map을 활용한 방법.
function reverse(str) {
  return str.split(' ').map(function(word){
		if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}