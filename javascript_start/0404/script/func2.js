//출금하기 버튼 클릭
// 얼마 출금하시겠습니까?
//3자리 간격 콤마
//남은 잔액은 -- 남았습니다.
const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order,result)
let bank = 1000000000000

order.addEventListener('click',atm)
function atm () {
    let money = Number(window.prompt('얼마 출금하시겠습니까?'))
    let money_type = money.toLocaleString('ko-kr')
    result.innerHTML = `${money_type}원`
    let bank_total = bank - money
    result.innerHTML += `잔액은 ${bank_total.toLocaleString('ko-kr')}원 입니다.`
}