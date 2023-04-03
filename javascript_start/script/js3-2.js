//월 - 맑음
//화 - 맑음
//수 - 비
//목 - 비
//금 - 맑음
//토 - 흐림
//일 - 눈 
const day = ['월','화','수','목','금','토','일']
const wheater = ['맑음','비','흐림','눈']

const day_wt_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(day_wt_result,answer_btn)

answer_btn.addEventListener('click',function(){
    day_wt_result[0].innerHTML = `${day[0]}요일 날씨는 ${wheater[0]}입니다.`
    day_wt_result[1].innerHTML = `${day[1]}요일 날씨는 ${wheater[0]}입니다.`
    day_wt_result[2].innerHTML = `${day[2]}요일 날씨는 ${wheater[1]}입니다.`
    day_wt_result[3].innerHTML = `${day[3]}요일 날씨는 ${wheater[1]}입니다.`
    day_wt_result[4].innerHTML = `${day[4]}요일 날씨는 ${wheater[0]}입니다.`
    day_wt_result[5].innerHTML = `${day[5]}요일 날씨는 ${wheater[2]}입니다.`
    day_wt_result[6].innerHTML = `${day[6]}요일 날씨는 ${wheater[3]}입니다.`
})
