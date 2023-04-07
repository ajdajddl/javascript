//1.아이디를 안적고 로그인 누를 시 '아이디를 입력하세요' 라고 나오게 하기 #error_result
const id = document.querySelector('#user_id')
const pw = document.querySelector('user_pw')
const error = document.querySelector('#error_result')
const loginbtn = document.querySelector('#login_btn')

loginbtn.addEventListener('click',()=>{
    if(id.value == ''){
        error.innerHTML = '아이디를 입력하세요'
    }
})
