const wth = {
    weather:'맑음',
    rain:'20%',
    wind:'3.4m/s',
    humidity:'15%'
}
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
console.log(wth)

btn[0].addEventListener('click',function(){
    result.innerHTML = `${wth.weather}`
    console.log(this)
})
btn[1].addEventListener('click',function(){
    result.innerHTML = `${wth.rain}`
})
btn[2].addEventListener('click',function(){
    result.innerHTML = `${wth.wind}`
})
btn[3].addEventListener('click',function(){
    result.innerHTML = `${wth.humidity}`
})