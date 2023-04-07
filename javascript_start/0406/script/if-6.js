let score = 90
if( score >=90 && score <= 100){
    console.log('A학점')
}else if(score >= 80 && score <=89){
    console.log('B학점')
}else if(score >=70 && score <=79){
    console.log('C학점')
}else if(score >=60 && score <=69){
    console.log('D학점')
}else if(score > -1 && score <= 59){
    console.log('F학점')
}else{
    window.alert('잘못된 입력값입니다.')
}