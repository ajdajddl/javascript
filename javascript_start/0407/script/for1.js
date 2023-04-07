//반복문 ⭐🌟⭐🌟⭐
/*
    for(초기값; 조건식; 증감식){
        조건식이 참일 때 반복실행구문
    }
*/
//for 초기변수명: i, j, m, n
// for(let i=0; i<10; i++){
//     //i가 0으로 시작해서 10보다 작을때까지 1씩 증가한다.
//     console.log(`javascript ${i+1}`)
// }
// //day1
// //day2
// //day3
// //day4
// for(let i=0; i<4; i++){
//     console.log(`day${i+1}`)
// }
// let a = ['html','css','javascript']
// for(let i=0; i<3; i++){
//     console.log(a[i])
// }

// let coffe = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
// for(let i=0; i<5; i++){
//     console.log(`${i+1}번 메뉴 ${coffe[i]}`)
// }
// console.log('------------------')
// //역순출력

// for(let i=4; i>=0; i--){
//     console.log(`${i+1}번 메뉴 ${coffe[i]}`)
// }
// console.log('------------------')
// //---------------------------
// let fruit = new Array('사과','망고','토마토');
// // console.log(fruit.length) //length 사용으로 조건 추가시 자동으로 교체
// for(let i=0; i<fruit.length; i++){
//     console.log(fruit[i])
// }
// console.log('------------------------')
// for(let i=fruit.length-1; i>=0; i--){
//     console.log(fruit[i])
// }
// console.log('---------------')
// //반복문+조건문
// //반복 {조건문}
// //1~20 홀수만 출력
// for(let i=1; i<21; i++){
//     if(i%2){
//         console.log(i)
//     }
// }
// console.log('---------------------')
// //5~15 짝수만 출력
// //1~10 역순 홀수 출력
// //10~20 역순 짝수 출력
// for(let i=5; i<15; i++){
//     if(i%2){
//         console.log(i+1)
//     }
// }
// console.log('--------------')
// for(let i=10; i>0; i--){
//     if(i%2){
//         console.log(i)
//     }
// }
// console.log('--------------')
// for(let i=20; i>8; i--){
//     if(i%2){
//         console.log(i+1)
//     }
// }
// console.log('--------------')
// //반복문 이용 총 합 구하기
// let data = [10,20,30,40,50]
// let result = 0 //초기값 설정 중요
// //설정 안할시 NAN 뜸.
// result += data[0]
// result += data[1]
// result += data[2]
// result += data[3]
// result += data[4]

// for(let i=0; i<data.length; i++){
//     result += data[i]
// }
// console.log(`data변수의 총 합은 ${result}입니다`)
console.log('-----------------')
//1~10 반복문
for(let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}</p>`)
    }else{
        document.write(`<p class="bg2">${i}</p>`)
    }
}