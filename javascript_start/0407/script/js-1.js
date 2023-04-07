//조건문 switch 다중조건처리
// let a = 20
// switch(a){
//     case 10:console.log('a==10'); break; //이 case 조건이 맞으면 여기서 끝내라.
//     case 20:console.log('a==20');break;
//     default:console.log('일치하는 값 없음');
// }
//---------------------
// let b = 10 
// let c = 5
// let total = b>c //if(b>c){참}else{거짓}
// switch(total){
//     case true:console.log('참'); break;
//     case true:console.log('거짓'); break;
//     default:console.log('잘못된 접근입니다.')
// }
//----------------------
//쇼핑몰에서 과일을 검색하면 판매가를 표시해줍니다.
// 딸기는 1000원. 수박은 5000원 오렌지는 2000원이 출력되고 
// 다른 과일을 작성한다면 '판매하지 않는 상품입니다' 라고 출력해보세요
// let fruit = '수박'
// switch(fruit){ //민정님이 알려준거 까먹으면 바보
//     case '딸기':console.log('딸기는 1000원입니다.'); break;
//     case '수박':console.log('수박은 5000원입니다.'); break;
//     case '오렌지':console.log('오렌지는 2000원입니다.'); break;
//     default:console.log('판매하지 않는 상품입니다.')
// }
// -----------------------
//두 개의 수가 저장된 변수를 저장하고
//연산법을 사용자가 직접 정할 수 있는 변수를 제작하세요.
//사용자가 입력한 값과 계산법에 따라서 두개의 수가 계산되는
//간단한 계산기를 만들어보세요
//오류시->잘못된 계산방법입니다.
// let num1 = Number(prompt('첫번째 수 입력'))
// let num2 = Number(prompt('두번째 수 입력'))
// let op = prompt('연산법(+,-,*,%,/)를 정하세요')
// let result 
// switch(op){
//     case '+':result = num1 + num2; break;
//     case '-':result = num1 - num2; break;
//     case '*':result = num1 * num2; break;
//     case '%':result = num1 % num2; break;
//     case '/':result = num1 / num2; break;
//     default:console.log('잘못된 입력방법 입니다.')
// }
// console.log(result)
//-------------------------------
/**/
// let result
// if(lucky == 1){
//     result = '당첨! 냉장고'
// }else if(lucky == 2){
//     result = '당첨! 세탁기'
// }else if(lucky == 3){
//     result = '당첨! tv'
// }else{
//     result = '꽝'
// }
// console.log(result)
let lucky = 3
let result
switch(lucky){
    case 1:result='당첨! 냉장고';break;
    case 2:result='당첨! 세탁기';break;
    case 3:result='당첨! tv';break;
    default:result='꽝!'
}
console.log(result)