// DOM
//원시데이터(문자) ="", '', '표시문자', 'class', 'id', 'tag'
const container = document.getElementById('container')
const item = document.getElementsByClassName('item')
console.log(container, item)
console.log(item[1].length)
console.log(typeof item[1])
console.log(typeof item[1].innerHTML)
console.log(item[1].innerHTML.length) 
//객체.속성.속성 가능
//객체,메서드().메서드() 불가능
//객체.속성.속성.속성.메서드() 가능
///원시데이터(숫자) = '1' vs 1 = X
let a = 10
let b = '20'
let c = 20
console.log(a+b) //숫자+문자 = 문자
console.log(a+c) //숫자+숫자 = 숫자
// ---------------------------------
let number = window.prompt('좋아하는 숫자를 입력하세요')
let total = Number(number) //데이터변환변수
console.log(total, number)
console.log(typeof total)