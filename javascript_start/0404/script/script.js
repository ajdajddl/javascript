//배열, 객체
//배열: 2개 이상의 값 저장소
//객체: 2개 이상의 속성: 값 저장소
//배열vs객체 : 값에 대한 속성의 유무
//객체는 값에 의미있는 속성명이 함께 지정되기 때문에 의미있는 지정으로 대상을 쉽게 구분가능하다.
let num = new Array(5,4,3)
console.log(num)
num[4] = 1 //
console.log(num)
//vs
let num2 = [1,2,3,4,5,6,7,8,9]
console.log(num2)
num2[20] = 'last'
console.log(num2)
//console 창에서 바로 확인하는 경우 최종결과만 나옴.
console.log('----------객체')
let study = {
    subject:['html','css','js','jq','sass','git','photoshop','illustrator'],
    name:'홍길동',
    age:20,
    area:'인천',
    goals:'풀스택',
    birthday:'1990-04-05'
}
console.log(study)
console.log(study.subject)
console.log(study.name)
console.log(study.area)
console.log(study.goals)
console.log(study)
study.age++
console.log(`내일 ${study.name}은 ${study.age}살이 됩니다! 생일 축하해주세요! `)
console.log(`홍길동의 시험점수는 ${study.subject[0]}+${study.subject[1]} 70점, ${study.subject[2]} 60점 입니다.`)

//html,css,js,jq,sass,git, photoshop, illustrator