const person = {
    name: 'Nicolas',
    age: 28,
    hello: () => {
        return () => {
            console.log(this.name + ' ' + this.age);
        }
    }
}

person.hello()();