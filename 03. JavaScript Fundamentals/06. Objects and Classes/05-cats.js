function catsList(catsInput) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        catSaysMaow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for(let cat of catsInput) {
        let [name, age] = cat.split(' ');
        cats.push(new Cat(name, age));
    }

    for(let cat of cats) {
        console.log(cat.catSaysMaow());
    }
}

catsList(['Mellow 2', 'Tom 5']);

/*
Task: Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input. 
It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided you must create a cat object.
*/
