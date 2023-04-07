const userp = document.querySelector('#user_point')
const usep = document.querySelector('#use_point')
const reset = document.querySelector('#point_reset')
const allbtn = document.querySelector('#point_all_btn')
console.log(userp,usep,reset,allbtn)

let point = 5000
let use_value = 0
userp.value = point.toLocaleString('ko-kr')
reset.style.display = 'none'

allbtn.addEventListener('click',()=>{
    usep.value = userp.value
    userp.value = 0
    use_value = point
    reset_display()
})

reset.addEventListener('click',()=>{
    userp.value = usep.value
    usep.value = 0
    use_value = 0
    reset_display()
})
function reset_display(){
    if(usep.value >= 1){
        point_reset.style.display = 'inline-block'
    }else{
        point_reset.style.display = 'none'
    }
}