//jquery() == $()
$('.sub').hide()
$('#popup').hide()
$('nav > ul> li').on('mouseover',()=>{
    $('.sub').stop(true).slideDown()
})
$('nav > ul> li').on('mouseout',()=>{
    $('.sub').stop(true).slideUp()
})
$('.title a:first-child').on('click',()=>{
    $('.notice').show()
    $('.gallery').hide()
    $('.tab_wrap .title a').removeClass()
    $('.tab_wrap .title a:first-child').addClass('active')
})
//stop(true)를 활용해서 반복해서 나오는 현상 방지
//공지사항 첫 글 클릭 시 팝업 보이기
$('.notice a:first-child').on('click',()=>{
    $('#popup').show()
})
$('#popup a').on('click',()=>{
    $('#popup').hide()
})
$('.title a:last-child').on('click',()=>{
    $('.gallery').css('display','flex')
    $('.notice').hide()
    $('.tab_wrap .title a').removeClass()
    $('.tab_wrap .title a:last-child').addClass('active')
})