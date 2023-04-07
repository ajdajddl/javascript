//1. 사용자 아이디 확인
let userID = 'admin'
if(userID == 'admin'){
    console.log(`${userID}님 어서오세요`)
}
//2. 사용자한테 숫자를 입력 => 해당 숫자 짝수면 => 당신이 좋아하는 숫자는 짝수입니다.
let userNum = 6
if(userNum%2 == 0){
    console.log('당신이 좋아하는 숫자는 짝수입니다.')
}
//3. 나이 입력 => 10살 이상이면 탑승가능 놀이기구
let age = 8
if(age >= 10){
    console.log('탑승가능')
}
//4.24시간 기준 현재 시간 입력
let time = 15
if(time >= 12){
    console.log(`오후 ${time}시 입니다.`)
}
//------------------------------
let print = window.confirm('인쇄할까요?')
console.log(print)
if(print){
    window.print()
}