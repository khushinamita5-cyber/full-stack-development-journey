//for of loop
    let fruits = ['apple' , 'mango' , 'banana'];

    for(i of fruits){
        console.log(i);
    }
    /* output:
    apple
    mango
    banana
    */

   //nested for of loop
   let colour = [['red' , 'pink'] , ['blue' , 'black']];
   for(list of colour){
        for(i of list){
            console.log(i);
        }
   }
   /*output:
   red
   pink
   blue
   black
   */
