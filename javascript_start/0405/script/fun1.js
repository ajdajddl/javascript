const user = document.querySelectorAll('.box input')
console.log(user)
//input 마우스 커서 올렸을때 == focus
//이벤트 내에 function은 this대상을 DOM이벤트 객체로 인식하고 
//화살표 함수는 this를 js 전역객체대상으로 인식하기 때문에
//정확하게 대상을 구분해서 작성
// user[0].addEventListener('focus',()=>{ bg(user[0]) }) 
// //(this)오류나는 이유: 화살표 함수(사용하려면 대상을 직접 잡아줘야함)/ 오류 안나려면: function(){bg(this)}
// user[1].addEventListener('focus',()=>{ bg(user[1]) })
// user[2].addEventListener('focus',()=>{ bg(user[2]) })
//함수
// function bg(target){
//return target.style.backgroundColor = '#00ffff'
// }
// 객체.style.backgroundColor = '#ff0'

user[0].addEventListener('focus',()=>{bg(user[0])})
user[1].addEventListener('focus',()=>{bg(user[1])})
user[2].addEventListener('focus',()=>{bg(user[2])})
function bg(target){
    bg_reset()
    return target.style.backgroundColor = '#00ffff'
}
function bg_reset(){
    user[0].style.background = 'none'
    user[1].style.background = 'none'
    user[2].style.background = 'none'
}
// ------------------
const like = document.querySelector('.like img')
const bird = document.querySelector('.bird img')
console.log(like)
like.addEventListener('mouseover',()=>{like_on(like,'heart')})
like.addEventListener('mouseout',()=>{like_off(like,'heart')})
like.addEventListener('mouseover',()=>{like_on(bird,'bird')})
like.addEventListener('mouseout',()=>{like_off(bird,'bird')})
//객체.src = '값'
function like_on(target, name){
    return target.src = `./image/${name}_on.png`
}
function like_off(target, name){
    return target.src = `./image/${name}_off.png`
}
//객체.src = '../image/heart_on.png'