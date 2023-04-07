console.log('논리데이터 연습')
console.log(true)
console.log(false)
console.log(true+2)//3 산술연산자와 함께 사용할 경우 0또는1로 인식
console.log(false+3) //0+3으로 인식
console.log(typeof true) //boolean 둘다 논리데이터 타입으로 인식
console.log(typeof false+1)//boolean1
let bo = true + 10 //true+10이 bo에 적용된 결과가 나오기 때문에 number로 나옴
console.log(typeof bo)//number
console.log(true+null)//1 => null을 숫자 0으로 인식
console.log(false+null)//0
console.log('비교연산자')
// let a = 10
// let b = 20
// let c = '20'
// let d = 0
// console.log(a,b,c)
// console.log(a==b)//false
// console.log(b===c)//false
// //데이터 타입까지 같다(엄격)
// console.log(a!=b)
// //a와b가 다르면 참 같으면 거짓
// console.log(b!=c)
// //데이터 타입 인식 불가
// console.log(b!==c)
// //데이터 타입 인식 가능
// console.log(a>b)//false
// console.log(a<=b)//true
// console.log(!b)
// //논리데이터에서는 참이지만 반대로 처리하여 false
// console.log('조건식')
// 
/*
    if(날씨 == '비'){
        우산챙기기
    }
    if(날씨 != '맑음'){ //날씨를 변수로 처리하기 위해서 '' X
        우산챙기기
    }
    if(점수 >= 60){자격증 합격}
    if(점수 < 60){재시험}
*/
// let weather = window.prompt('오늘 날씨 어때?')
// if(weather == '비'){
//     window.alert('우산챙겨')
// }
let a = true 
let b = false
let c = 10
let d = 20
if(a==true){console.log('a는 참이다.')}//o
if(c>10){console.log('c는 10보다 크다')}//x
if(d<c){console.log('d는 c보다 작다')}//x
if(d<=20){console.log('d는 20보다 작거나 같다')}//o
if(b!=true){console.log('b는 참이 아니다')}//o