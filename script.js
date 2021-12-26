'use strict';

const persone = {
    age: "25",
    name: "Alex",

        // Геттер служит для получения данных
    get userAge() {
        return this.age;
    },
        //  Сеттер служит для того, чтобы задать значение
    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge = 30);