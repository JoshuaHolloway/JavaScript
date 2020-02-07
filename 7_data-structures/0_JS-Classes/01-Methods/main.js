data = new Array(3, 1, 4);
data.push(2);

console.log(data);

data.sort();
console.log(data);


class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
    }
}

const student = new Student('josh', 'holloway', 3);
console.log(student.fullName());
console.log(student.markLate());
console.log(student.markLate());