const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')[0]
const plus = document.getElementsByClassName('plus')
const join = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')
const li1 = document.getElementsByTagName('li')[0]
const li2 = document.getElementsByTagName('li')[1]
const li3 = document.getElementsByTagName('li')[2]
const li4 = document.getElementsByTagName('li')[3]
const li5 = document.getElementsByTagName('li')[4]
// 출력
console.log(more[0], img)
// console.log(more)
// console.log(img)
console.log(plus[0], plus[1])
console.log(join_btn)
// console.log(li[0], li[1], li[2], li[3], li[4])
console.log(li1, li2, li3, li4, li5)

//-----------style 속성
//객체.속성
//style == css
//속성종류 
//객체.style.속성 = 값 
more[0].style.color = 'red'
li[0].style.background = 'beige'
li[1].style.background = 'lightgreen'
li[2].style.background = 'yellow'
li[3].style.background = 'pink'
li[4].style.background = 'lightblue'
li[3].style.fontSize = '3rem'