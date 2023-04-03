let userID =['a','b','c','d','e','f']
let userPW =['1','2','3','4','6','6']

const id_pw_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(id_pw_result,answer_btn)
console.log(id_pw_result[0],id_pw_result[1])
answer_btn.addEventListener('click',function(){
    id_pw_result[0].innerHTML = userID[1]
    id_pw_result[1].innerHTML = userPW[1]
})