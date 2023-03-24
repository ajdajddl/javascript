const btn1 = document.getElementById('btn1')
console.log(btn1)
console.log(btn1.innerHTML)
const btn = document.getElementsByClassName('btn')
//내용변경 == 대입한다
btn1.innerHTML = '확인완료' //innerHTML ''로 바꿔줌
btn[0].innerHTML = 'home'
btn[1].innerHTML = 'mail'
btn[2].innerHTML = 'cafe'
btn[3].innerHTML = 'blog'