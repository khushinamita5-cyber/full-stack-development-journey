    let a = 8;
    let b = 6;

    // Arithmetic
    console.log(a+b);   //print 14
    console.log(a-b);   //print 2
    console.log(a*b);   //print 48
    console.log(a**2);  // print 64 (a to the power 2)
    console.log(a/b);   //print 1.33333333
    console.log(a%2);   //print 0 as a is divisible by 2

    //Unary
    console.log(++a);   //9 pre increment
    console.log(a++);   //9 post increment 
    console.log(a);     //10
    console.log(a--);   //10
    console.log(--a);   //8

    // Comparison
    console.log(a>b);           //true
    console.log(a<b);           //false
    console.log(a == "8");      //true  , == compares values after possible type conversion.
    console.log(a === "8");     //false , === compares values and types without that conversion.
    console.log("a" > "A");     //true as ascii value of 'a' is greater than 'A'.

    // Logical
    console.log(true || false);   //true
    console.log(true && true);    //true
    console.log(!true);          //false
