// -------------DOm 변수 
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2') 
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')
console.log(btn1,btn2,btn3,result)
// let qa = window.confirm('let과 const의 차이점을 서술하시오.')
// let qa = window.confirm -> 확인과 취소로 답이 나오는 창 만들기
btn1.addEventListener('click',function(){
    result.innerHTML = `let은 값이 변하는 변수, const는 변하지 않는 상수`
})
btn2.addEventListener('click',function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오.')
    result.innerHTML = `변수는 한가지 값을 배열은 2개이상의 데이터값을 가질 경우 사용합니다.`
})
btn3.addEventListener('click',function(){
    qa = window.confirm('증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.')
    result.innerHTML = `변수의 값을 1씩 증가하는 증감연사자는 전위, 후위 위치에 따라 값을 대입 후 증가할지, 증가하고 대입할지가 결정된다.`
})
// console.log(this) 
//-->현재 대상