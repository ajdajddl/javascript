let money1 = 10000
let money2 = 1000
let total = money1 + money2
//객체.메서드()
//객체.toLocalString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
console.log(total_replace)
console.log(answer_btn, answer_input, total)

answer_btn.addEventListener('click',function(){
    // console.log(this)
    answer_input.value = `정답은 ${total_replace}원 입니다.`
})