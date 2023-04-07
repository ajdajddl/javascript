// let num = Number(window.prompt('숫자입력'))
// if(num%2 == 1){
//     console.log('홀수')
// }else{
//     console.log('짝수')
// }
//admin :관리자 아이디
//아이디 입력받기
//admin이면 관리자님 어서오세요
//X => 관리자 페이지 접근불가

let masterID = 'admin'
let id = window.prompt('아이디 입력')
if(id == masterID){
    window.alert('관리자님 어서오세요')
}else{
    window.alert('관리자 페이지 접근불가')
}