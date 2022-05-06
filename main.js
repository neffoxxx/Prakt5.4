let x = -6;
for (x; x<=6; x+=2){
    if(x < -4){
        document.write('При x < -4 функція = ',  Math.abs(x) + Math.tan(x), '<br>');
    }
    if(x === -4){
        document.write('При x = -4 функція = ', '23', '<br>');
    }
    if(x > -4){
        document.write('При x > -4 функція = ', Math.cos(x) + x, '<br>');
    }
}