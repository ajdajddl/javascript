const result = document.querySelector('#result')
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')

console.log(result, result1, result2, answer_btn)
console.log(result.value)//실시간으로 값이 추적되지 않으므로 결과값 표시안됨.
console.log(this)
answer_btn.addEventListener('click',function(){
    let number_type = Number(result.value) //값을 숫자로 변환하는 저장 변수
    console.log(result.value)
    console.log(typeof result.value)
    console.log(number_type+1) // 위 변수가 숫자인지 +1을 통해 숫자 + 숫자 = 숫자 인지 결과 확인
    console.log(typeof number_type) //위 변수가 number 데이터타입인지 typeof 연산자 확인
    // result2.value = result
    result2.value = result.value //모든 결과 console 확인 후 각 변수에 최종 데이터 결과 대입
    result1.value = typeof number_type
})