// creating object

function Student(name,age,cgpa,sub){

    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.sub = sub;

    this.display = function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.sub);
    }


}

var stud1 = new Student("Robin",26,3.01,["oop","js","flask"]);
var stud2 = new Student("Das",26,3.00,["ML","DL","RL"]);
var stud3 = new Student("BB",27,2.90,["python","django","CV"]);

stud1.display();
stud2.display();
stud3.display()


function DreamCar(name,color,mileage){
    this.name = name;
    this.color = color;
    this.mileage = mileage;

    this.display = function(){
    console.log(this.name);
    console.log(this.color);
    console.log(this.mileage);
    }
}

var car1 = new DreamCar("Lamborgini", "Black", 100)
var car2 = new DreamCar("Ferari", "Red", 110)
var car3 = new DreamCar("Dodge69", "Black",90)

car1.display()
car2.display()
car3.display()

// product object

function Product(pname,price,amount){
    this.pname = pname
    this.price = price
    this.amount = amount

    this.display = function(){
        console.log(this.pname)
        console.log(this.price)
        console.log(this.amount)
    }
}

var product1 = new Product("Laptop","500$",1)
var product2 = new Product("mobile","200$",2)
var product3 = new Product("SoundBox","150$",4)

product1.display()
product2.display()
product3.display()