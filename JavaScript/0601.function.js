//0-1. 타입 확인하는 함수
function type(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase(); 
}

//0-2. 타입을 확인한 후 경고문을 반환하는 함수
function isType(data, kind){
    if(type(data) != kind){
        throw '입력된 값이 ' + kind + ' 타입이 아닙니다.' + kind + ' 타입을 입력해주세요.';
    }
}
//1. 두 수를 입력받아 큰 수를 반환하는 함수 function 
function checkBigNumber(num1, num2){
    var input_data = [num1, num2];
    for (var i in input_data){
        isType(input_data[0],'number');
    }
    if (num1 === num2){
        return console.log('두 값은 같습니다.');
    }
    return console.log('checkBigNumber함수의 결과: ', (num1>num2) ? num1 : num2);
}

//2. 숫자를 입력하면 요일을 반환하는 함수 (1: 일, 2:월, 3:화, 4:수, 5:목, 6:금, 7:토)
function checkDay(data) {
    var day_array = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    isType(data,'number');
    return console.log('checkDay함수의 결과: ', day_array[(data-1)] ); 
}

// 조교님 코드 
function day(num){
    var week ="일월화수목금토";
    return week[num%7];
}

//3. 짝수 홀수 판단하는 함수 
function isEvenOdd(num){
    isType(num, 'number');
    return console.log('isEvenOdd 함수의 결과:', (num % 2 === 0) ? '입력된 값은 짝수입니다.' : '입력된 값은 홀수입니다.');
}
//4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수 
function checkAverage(input_numbers){
    var sum_number = 0, average_number = 0;
    isType(input_numbers, 'array');
    for (var i in input_numbers){
        sum_number += input_numbers[i];
    }
    //조교님 코드 
    // input_numbers.forEach(function(item){
    //     sum_number == item;
    // });
    average_number = sum_number/input_numbers.length;
    return console.log('checkAverage함수의 결과:', average_number); 
} 

//5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
function arrayToString(input_array){
    isType(input_array, 'array');
    //조교님 코드 
    // var result = '';
    // for(var i = 0, l = input_array.length; i < l ; i++){
    //     result +=input_array[i];
    // }
    // return result;
    return console.log('arrayToString함수의 결과:', input_array.join(''))
} 
//6. 세 수를 입력받아 큰 수를 반환하는 함수 
function checkMaxNumber(num1,num2,num3) {
    //return checkBigNumber(max(a,b),checkBigNumber(b,c)); 1.번에서 만든 함수를 재활용.
    return console.log('checkMaxNumber함수의 결과:', Math.max(num1,num2,num3));
}

//조교님 코드 
// function maxn(...n){
//     console.log('n:', n);
//     var max = n[0];
//     for(var i = 0, l = n.legnth; i <l; i++){
//         if(max < n[i]) {
//             max = n[i];
//         }
//      }
// }
// maxn(2,3,4,5,6,1); => 정하지 않아도 n개를 받을 수 있다. 배열로 받은 것 같은 효과. 

//7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수 
function changePhoneNumber(phone_number){
    var result_number;
    for (i=0; i<phone_number.length-4; i++){
        if(phone_number[i]==='-'){
            result_number += '-';
        }
        else {result_number += '*';}
    }
    result_number += phone_number.slice(-4);
    return console.log('changePhoneNumber함수의 결과:', result_number);
}
//조교님 코드 
// function maskPhoneNum(phone_num){
//     var result ='';
//     for(var i = 0, l = phone_num.length; i < l; i++){
//         if(l - i > 4){
//             result += '*';
//         } else {
//             result = phone_num[i];
//         }
//     }
//     return result;
// }
//조교님 코드 - 정규표현식
// function maskPhoneNum(phone_num){
//     return phone_num.reaplace(/[0-9](?=[0-9]{4})/g,'*');
// }
//8. Email . validation 
function checkEmailType(input_email){
    isType(input_email, 'string');
    for (var i in input_email){
        if (input_email[i] === "@"){
            return console.log('email을 입력하였습니다.');
        }
    }
    return console.log('email을 입력해주세요.');
}
//조교님 코드 
function validateEmail(email){
    return email.indexOf('@') !== -1;
}
//9. 비밀번호 문자열 validation 영어 문자 숫자 포함    
function checkPassword(password){
    var english_pattern = /^[A-Za-z]$/, num_pattern = /^[0-9]$/;
    var count_english = 0, count_number = 0;
    if(password.length>7){
        for(var i in password){
            if(english_pattern.test(password[i])){
                count_english++;
            }
            else if(num_pattern.test(password[i])){
                count_number++;
            }
            else{return "비밀번호는 영어,숫자 8글자 이상 입력해주세요."}
        }
        if (count_english>0 && count_number>0){
            return "비밀번호가 맞습니다.";
        }
        else {return "비밀번호는 영어,숫자 8글자 이상 입력해주세요."}
    }
    else {return "비밀번호는 영어,숫자 8글자 이상 입력해주세요."}
}
//조교님 코드 
// function validatePassword(pw){
//     var low_case ='abcdefghijklmnopqrstuvwxyz';
//     var up_case = low.toUpperCase();
//     var num_case = '0123456789';
//     var lowcheck = false;
//     var upcheck = false;
//     var numcheck = false;
//     for(var i =0, l= low_case.length; i < l; i++){
//         if (pw.indexOf(low_case[i]) !== -1){
//             lowcheck = true;
//         }
//         if (pw.indexOf(up_case[i]) !== -1){
//             upcheck = true;
//         }
//     }
//     for(var i = 0, l = num_case.length; i<l; i++){
//         if(pw.indexOf(num_case[i]) !== -1){
//             numcheck = true;
//         }
//     }
//     if (lowcheck && upcheck && numcheck){
//         return true;
//     } else {
//         return false;
//     }
// }

// 조교님 코드 - 정규표현식 
// function validatePassword(pw){
//     return /^.(?={8, }.*(?=[0-9]).*(?=[a-zA-Z])$/.test(pw);
// }