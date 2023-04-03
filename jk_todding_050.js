class Student {
    avg(math, english) {
        console.log((math + english) / 2);
    }
}

var a001 = new Student();
a001.name = "sato";
a001.avg(30, 70);

console.log(a001.name);

var a002 = new Student();
console.log(a002.name);