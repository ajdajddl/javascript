// let id = 'admin'
// let pw = '1234'
// if(id == 'admin' && pw=='1234'){
//     console.log('관리자 로그인 성공')
// }else{
//     console.log('로그인 실패')
// }
//-------------------
//1~20사이 숫자를 입력받고 해당 숫자가 10보다 작다면 '10이하입니다.'
//아니라면 '11이상입니다'를 출력하세요
// let num = window.prompt('숫자입력')
// if(num <= 10 && num > 0){
//     window.alert('10이하입니다.')
// }else{
//     window.alert('11이상입니다.')
// }
//-------------------------------
// let a = 5
// if(a > 10){
//     console.log('a>10')
// }else if(a == 10){
//     console.log('a==10')
// }else if(a < 9){ //조건에 맞을 경우 마지막 읽어줌.
//     console.log('a<9')
// }
// console.log('if종료')
// console.log('-----------')
// let number = 22
// if(number > 0 && number < 21){
//     if(number < 11){
//         console.log('10이하')
//     }else{
//         console.log('10이상')
//     }
//     console.log('1단 if 종료 위치')
// }else{
//     console.log('error')
// }
// console.log('if종료')
//--------------------------
//6~25
let num = 6
if(num >5 && num <= 25){
    if(num < 15){
        console.log('진짜 은지님은 15명 이하입니다 그 중 진짜는 몇 명인지 찾아보세요.')
    }else{
        console.log('15명 이상의 민정님이 있습니다.')
    }
    console.log('if')
}else{
    console.log('error')
}
console.log('if end')