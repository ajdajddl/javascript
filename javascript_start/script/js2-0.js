//인증번호 확인 클릭하면 prompt창에 입력하면 input창에 뜨게
// let data_type = window.prompt('인증 데이터 타입을 입력해주세요.')
// let massage = window.prompt('인증번호를 입력해주세요.')

const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(result1, result2, answer_btn)
// answer_btn 클릭했을 때
answer_btn.addEventListener('click',function(){
    // prompt 값 입력(인증번호)
    let num = window.prompt('인증번호를 입력해주세요.')
    // 2번 값의 데이터타입이 result1 출력
    result1.value = typeof num
    // 2번 값의 데이터결과가 result2 출력
    result2.value = num 
})


// console.log(typeof data_type)
