let money1 = 10000
let money2 = 2000
let money3 = 1000
let total = money1 - (money2 + money3)
let total_replace = total.toLocaleString('ko-kr')

const answer_btn = document.querySelector('#answer_btn')
const input_btn = document.querySelector('#result')

console.log(answer_btn)
console.log(input_btn)
console.log(total_replace)

answer_btn.addEventListener('click',function(){
    // console.log('this')
    input_btn.value = `정답은 ${total_replace}원 입니다.`
})