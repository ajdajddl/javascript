//원시데이터(논리형 데이터 true(1) false(0))
let a = false
let b = 1
console.log(a==b)
//원시데이터(null(빔), undefined(정의x))
let c = 10 //선언0 대입0
let d//선언0 대입x
c = null //대입된 후 특정상황에 따라 값을 제거할 경우
console.log(c) //null
console.log(d) //undefined
let e = 10
let f = '0' //숫자+문자 = 문자
console.log(e+f)
console.log('--------------------------------------------------')
console.log(a)
//산술연산자
let num1 = 10+20
let num2 = 50-20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%3
console.log(num1,num2,num3,num4,num5)
console.log('--------------------------------------------------')
let box1 = 1
// box1 = box1+10 //기존의 값을 버리지 않고 그대로 사용
box1 += 10 //산술연산자 표시만 바꿔서 표시
console.log(box1)
console.log('--------------------------------------------------')
let box2 = 0
box2 =box2+10 //복합대입 변경식10 box2 += 10
console.log(box2) //  
box2 =box2-5//5 box2 -= 5        
console.log(box2)//               값 이어서 계산
box2 =box2*2//10 box2 *= 2
console.log(box2)//
box2 += '살 입니다.'
// window.alert(box2)
console.log('--------------------------------------------------')
let box3 = 10
console.log(box3)
let box4 = box3++
console.log(box4, box3)
