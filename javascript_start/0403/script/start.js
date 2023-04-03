var box1 = 10
let box2 = 20
const box3 = 30 //let은 값이 변하는 변수, const는 변하지 않는 상수
let box4 = 'hello javascript' 
console.log(`box1 변수 값 = ${box1}`)
console.log(`box1 변수 값 = ${box2}`)
console.log(`box1 변수 값 = ${box3}`)
box1 += 1 
box1 += 10 //box1 = box1+10 //->다른예시 복합대입
//대입연산자: 기존의 값을 버리고 인식
box1 = box1+1 //-> 기존의 값에 더하여 인식 
console.log(`box1 변수 값 = ${box1}`)//->객체//->메소드 //->템플릿 문자열
box2 = box2%2 //->box3은 상수라 변할수 없음 
console.log(`box2 변수 값 = ${box2}`)//->객체//->메소드 //->템플릿 문자열
box2 = box1++ //->box3은 상수라 변할수 없음 
console.log(`box2 변수 값 = ${box2}`)
console.log(`box2=${box2}, box1=${box1}`)
box1 = box3
console.log(`box1=${box1}, box3=${box3}`)
console.log(box4.length)
// ------------------
let array1 = ['aqua','lime','yellow']//이미 값이 정해져있을 경우
let array2 = new Array('black','pink','blue') //나중에 사용자에 의해 값이 채워질때 ex)영화관 좌석, 비행기 좌석, 키오스크 주문 
let array3 = new Array(10) //나중에 사용자에 의해 값이 채워질때 ex)영화관 좌석, 비행기 좌석, 키오스크 주문 
//취소되었을 경우 'null'상태 //선언될 경우에만 소괄호 처리 
console.log(array1)
console.log(array1[0],array1[1],array1[2])
console.log(array2)
console.log(array3)
array3[9] = 'black' //0부터 
console.log(array3)
// ----------------------------
let array4 = [10,20,30,40,50]
console.log(array4)
console.log(array4[0]+1) //->10 배열에 들어가는 데이터에 따라 결과가 다르게 나온다.
console.log(array4[1]%2) //->0
console.log(++array4[4]) //->51
console.log(array4[3]++) //->40
total = array4[3]++
console.log(`total=${total}, array4[3]=${array4[3]}`)
