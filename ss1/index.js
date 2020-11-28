class Person {
    name;
    age;
    address;

    constructor(name,age,address){
        this.name = name
        this.age = age
        this.address = address

        console.log(this)
    
    }
    speak(){
        console.log(this.name)
    }
    introduce(){
        console.log(`chao moi nguoi minh la ${this.name}`)
    }
}

class Boy extends Person {
    size;
    handsome;
    rich;
    constructor(name,age,address,size,handsome,rich){
        super(name,age,address);
        this.size=size
        this.handsome=handsome
        this.rich=rich
        console.log(this)
    }
}
class Girl extends Person {
    size;
    beauty;
    good;
    constructor(name,age,address,size,beauty,good){
        super(name,age,address)
        this.size=size
        this.beauty=beauty
        this.good=good
        console.log(this)
    }
    }
class GoodBoy extends Boy {
    tedious;
    constructor(name,age,address,size,handsome,rich,tedious){
        super(name,age,address,size,handsome,rich)
        this.tedious=tedious
        console.log(this)
    }
}

let hung = new GoodBoy ("hung",17,"hung yen",60,10,10,5)


class MyMath {
    static sum(a,b){
        return a+b
    }
    static substract(a,b){
        return a-b
    }1
}


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}