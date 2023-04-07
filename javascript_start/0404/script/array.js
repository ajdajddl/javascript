let study = ['html','css','js','jq','sass','git']
let device = ['desktop','tablet','mobile','Tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0 
console.log(study,device,weather)
// ----------------------배열 속성 및 메서드
// true/false:논리데이터
console.log(Array.isArray(study)) //true
console.log(Array.isArray(device)) 
console.log(Array.isArray(weather)) 
console.log(Array.isArray(num)) //false
//----------------------- 
// console.log(study.pop()) 
// console.log(study)
// console.log(study.pop())
// console.log(study) 
// 마지막 값이 반환
// 원본의 반영한다
// ex) 예매한 좌석, 상품 담은거 삭제
console.log(study.shift()) //->html
console.log(study) //html이 지워진 나머지 배열값만 나옴.
study.unshift('html5') //공백을 html5로 대체함
console.log(study)
study.pop()//마지막 위치 삭제
console.log(study)
study.push('gitHub') //마지막 위치에 값을 추가
console.log(study) 
console.log('-----------')
// study.concat(device)//1.배열에 변수 및 배열 값을 결합시킵니다.2.원본 배열이 변경되지않음.
console.log(study.concat(device))
console.log(device.concat(study))
console.log('-----------------')
// reverse
study.reverse() //원본 
console.log(study)
//sort
device.sort() //배열 숫자 및 알피벳 순서로 정렬
console.log(device)
//slice
console.log('-------------------')
// let weather = ['맑음','비','눈','흐림','태풍']
// 음수는 -1부터 양수는 0부터 
// slice는 원본 배열에 영향을 안준다.
console.log(weather.slice(0,2))
console.log(weather.slice(1,3))
console.log(weather.slice(0,-1)) //0 부터 -1 전까지
console.log(weather.slice(2)) //눈부터 다
console.log(weather.slice(-1))
console.log('----------------')
//splice
// weather.splice(0,2)
weather.splice(0,2,'sunny') //0부터 1개 제거하라.
console.log(weather) //제거한 자리를 다른 데이터로 교체(제거한 자리에만)
//join 최종 배열을 문자열
let yoil = ['월','화','수','목','금','토','일']
console.log(yoil.join('요일 '))//- 마지막 데이터에는 적용X
//test
yoil.push('')
console.log(yoil.join('요일 '))
console.log('----------------------------')
let month = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
month.reverse()
console.log(month)