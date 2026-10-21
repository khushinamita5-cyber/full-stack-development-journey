// Topic : Conditional Statements

    let a = 4;
    let b = 3;

    // 1. if
     if(a>b){
        console.log(a ,'is greater than',b);    
    }
    //output : 4 'is greater than' 3

    //2. else-if
    if(a>b){
        console.log(a ,'is greater than',b);
    }else if(b>a){
        console.log(b ,'is greater than',a);
    }else{
        console.log(a,'and', b,'are equal');
    }
    //output : 4 'is greater than' 3

    // 3.Nested if-else
        let marks = 55;
        
        if(marks>30){
            if(marks >80){
                console.log('A');
            }else if(marks> 60){
                console.log('B');
            }else if(marks>40){
                console.log('C');
            }else{
                console.log('D');
            }
        }else{
            console.log('Failed');
        }
        //output : C

    //4.Switch 

    let day = 1;
    switch(day){
        case 1:{
            console.log("Monday");
            break;
        }
        case 2:{
            console.log("Tuesday");
            break;
        }
        case 3:{
            console.log("Wednesday");
            break;
        }
        case 4:{
            console.log("Thursday");
            break;
        }
        case 5:{
            console.log("Friday");
            break;
        }
        case 6:{
            console.log("Saturday");
            break;
        }
        case 7:{
            console.log("Sunday");
            break;
        }default :{
            console.log('Enter a valid number');
        }
    }

    // output : Monday
    
