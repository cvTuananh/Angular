function greeter(person:string){
    return "Hello" + person;
}
let user = "Lisa Jeniphee";
document.body.textContent=greeter(user);

class Person {
    firtName:string;
    lastName:string;
    constructor(firtName:string,lastName:string){
        this.firtName =firtName;
        this.lastName =lastName;
    }
}

class Student extends Person {
    age:number;
    scoreHTML:number;
    scoreJS:number;
    scoreCSS:number;
    constructor(firtName,lastName,age:number,scoreHTML:number,scoreJS:number,scoreCSS:number){
        super(firtName,lastName);
        this.age = age;
        this.scoreHTML=scoreHTML;
        this.scoreJS=scoreJS;
        this.scoreCSS = scoreCSS;
    }
        info(){
            document.write(`firtName:${this.firtName}, lastName:${this.lastName}`);
        }
        avgScore(){
            let avg = (this.scoreHTML + this.scoreCSS + this.scoreJS)/3
            return document.write(`diem trung binh ca 3 mon la ${avg}`);
        }
}

let student = new Student('Cu Vi','Tuan Anh',25,9,8,6);
student.info();
student.avgScore();
console.log(student);