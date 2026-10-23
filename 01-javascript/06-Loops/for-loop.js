//for loops
for(let i =1 ; i<=5; i++){
    console.log(i);
}
/*
output :
1
2
3
4
5
*/
// Q1. print all odd numbers from 1-15
for(let i =1 ; i<=15 ;i=i+2 ){
  console.log(i);
}
//Q2. print all even number from 2-10
for(let i = 2;i<=10 ; i= i+2){
  console.log(i);
}
// Nested-for loop
    for(let i =1; i<=3 ; i++){
        console.log(`Outer loop ${i}`);
        for(let j =1; j<=3 ; j++){
            console.log(j);
        }
    }
    /*
    Output: 
    Outer loop 1
    1
    2
    3
    Outer loop 2
    1
    2
    3
    Outer loop 3
    1
    2
    3
    */
