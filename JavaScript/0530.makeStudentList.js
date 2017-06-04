//학생 데이터 만들기 => 10명. 

var getStudentData = function(name,gender,age,hobby,school,grade,major,sub_major,family){

    return {"name" : name, "gender": gender, "age": age, "hobby": hobby, "school": school, "grade": grade, "major":major, "sub_major": sub_major, "family":family}
}
var schoolMember = {
    "dasom" : getStudentData("김다솜","여","29","덕질","영진","졸업","전자","없음",["엄마","아빠","언니","짜원율"]),
    "wonyul" : getStudentData("짜원율","남","3","미끄럼틀","청삼어린이집","햇살반","먹기","잠자기",["엄마","아빠","할머니","할아버지","이모"]),
    "jungwon" : getStudentData("김정원","여","45","농사","몰라요","없어요","글쎄요","있나요",["남편","딸1","딸2","짜원율"]),
    "sumin" : getStudentData("서수민","여","28","그림","대구대","졸업","산디","없음",["엄마","아부지","종민이","어리"]),
    "jinseon" : getStudentData("김진선","여","34","웹서핑","대구대","졸업","보험","경제",["남편","짜원율","엄마","아빠","동생"]),
    "juhyun" : getStudentData("배주현","여","27","다림질","레벨학교","3","가나다","라마바",["엄마","아빠","여동생"]),
    "sulgi" : getStudentData("강슬기","여","24","춤","레벨학교","2","가나다","라마바",["엄마","아빠","오빠"]),
    "joy" : getStudentData("박수영","여","21","노래","레벨학교","1","가나다","라마바",["엄마","아빠"]),
    "wendy" : getStudentData("손승완","여","24","요리","레벨학교","2","가나다","라마바",["엄마","아빠"]),
    "yeri" : getStudentData("김예림","여","19","인스타라이브","레벨학교","1","가나다","라마바",["엄마","아빠"]),
}

for (key in schoolMember){
    console.log(schoolMember[key]);
}