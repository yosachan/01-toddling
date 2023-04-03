class Student {

    constructor(name) {
        this.name = name;
    }
    avg(math, english) {
        console.log((math + english) / 2);
    }
}

var a001 = new Student();
a001.name = "sato";
console.log(a001.name);

var a002 = new Student();
a002.name = "tanaka";
console.log(a002.name);