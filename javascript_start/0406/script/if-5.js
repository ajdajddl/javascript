let userID = 'admin'
let userPW ='1234'
// ver1
// if(userID == 'admin'){
//     if(userPW != '1234'){
//         console.log('비밀번호 오류')
//     }else{
//         console.log('로그인 성공')
//     }
// }else{
//     console.log('아이디 오류')
// }
// ver2
if(userID == 'admin' && userPW == '1234'){
    console.log('로그인 성공')
}else{
    //아이디 오류, 비밀번호 오류
    if(userID != 'admin'){
        console.log('아이디가 틀렸습니다.')
    }else{
        console.log('비밀번호가 틀렸습니다.')
    }
}
//---------------------------
//논리연산자로 줄이기
let value = ""
if(value == "오른쪽" || value == "가운데" || value == "왼쪽"){
    console.log(`${value}을 누르셨군요.`)
}else{
    console.log('확인할 수 없습니다.')
}