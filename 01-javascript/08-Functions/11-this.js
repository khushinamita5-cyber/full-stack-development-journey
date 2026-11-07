// This 
const student = {
    name : "Namita",
    eng : 89,
    math : 90,
    sci : 98,
    getavg(){
        let avg = (this.eng + this.math + this.sci)/3;
        console.log(`${this.name} got avg marks : ${avg}` );
    }
}

//student.getavg()
// Namita got avg marks : 92.3333333
