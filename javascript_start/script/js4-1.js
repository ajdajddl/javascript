const order = document.querySelector('#order')
const reset = document.querySelector('#reset')
const number = document.querySelector('#number')
const result = document.querySelector('#result')
const price = 4700 //고정가격
let num = 0 //변경 수량 변수(초기값 0)
let total = 0//변경 최종가격 변수(초기값 0)
console.log(order,reset,number,result,price,num,total)
function order_add(){
    if(num < 10){
        num++
        total= price*num
        number.innerHTML = num
        result.innerHTML = total.toLocaleString('ko-kr')
    }else{
        window.alert('은지님 그만드세요.') //else{}
    }
}
order.addEventListener('click',order_add)
function reset_r(){
    num = 0
    total= price*num
    number.innerHTML = num
    result.innerHTML = total.toLocaleString('ko-kr')
}
reset.addEventListener('click',reset_r)
//쇼핑몰에서 많이 활용하는 함수
