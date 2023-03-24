const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')
console.log(money1, money2, total, answer_btn)

answer_btn.addEventListener('click', function(){
    let num1 = Number(window.prompt('입금액을 입력해주세요'))
    money1.value = num1.toLocaleString('ko-kr')
    // let mon1 = Number(money1.value)
    money2.value = 100
    // let mon2 = Number(money2.value)
    // let str_total = mon1 + mon2
    let result = num1 + 100
    total.value = `${result.toLocaleString('ko-kr')}원 입니다.`
})