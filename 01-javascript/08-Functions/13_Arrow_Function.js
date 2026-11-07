//Arrow Function 

const sum = ( a , b) =>{
    console.log(a+b);
};

//sum(2 ,3)
//5

const cube = n =>{      //we can remove parenthesis in case of single arguement
    console.log(n*n*n);
};

//cube(4)
//64

const hello = () =>{    //we have to use parenthesis in case of no arguement
    console.log("Hello World");
};

//Implicit return in Arrow Function

const mul = (a,b) =>a*b;

//mul(3,2)
//6
