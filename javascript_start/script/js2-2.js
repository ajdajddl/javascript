const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')
console.log(result1, result2, result, answer_btn)

answer_btn.addEventListener('click', function(){
    // let total_replace = total_toLocalString('ko-kr')
    console.log(money1.value, money2.value) //이름 중복 X
    let num1 = Number(money1.value)
    let num2 = Number(money2.value)
    let str_total = num1+num2
    total.value = `${str_total.toLocaleString('ko-kr')}원 벌었습니다.`
})
