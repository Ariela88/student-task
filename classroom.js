class Classroom {

    constructor(studentsArray = []) {

        this.studentsArray = studentsArray



    }

    addStudents(student) {

        this.studentsArray.push(student)
    }


    printSquad() {

        let acc = '';

        for (let i = 0; i < this.studentsArray.length; i++) {
            const student = this.studentsArray[i];

            if (i % 2 === 0) {
                acc += 'Coppia ' + (i / 2 + 1) + ': ' + '\n'

            } acc += student.toString();
        } return acc;

    }


    shuffleStudents() {

        const tempArray = []
        const originalLength = this.studentsArray.length;

        for (let i = 0; i < originalLength; i++) {
            const randomIndex = Math.floor(Math.random() * this.studentsArray.length);

            const student = this.studentsArray[randomIndex]
            tempArray.push([student]);
            this.studentsArray.splice(randomIndex, 1)

        } this.studentsArray = tempArray

    }
}











