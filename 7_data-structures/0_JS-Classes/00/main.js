class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

const student = new Student('josh', 'holloway', 3);
console.log(student);