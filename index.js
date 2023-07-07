const student1 = new Student('Cesare', 'Falzone', 2003, 'Ceccio');
const student2 = new Student('Manuela', 'Ariotti', 1988, 'Ariela');
const student3 = new Student('Damiano', 'Di Lionardo', 1993, 'Imperial Rules');
const student4 = new Student('Isabella', 'Ottonello', 1996, 'Isa');
const student5 = new Student('Stefano', 'Florio', 1998, 'Ste');
const student6 = new Student('Bryan', 'Rojas', 1994, 'Bry');
const student7 = new Student('Stefania', 'Ghergut', 1996, 'Stephany');
const student8 = new Student('Francesca', 'Ercolani', 1989, 'Frenzi');
const student9 = new Student('Luca', 'Verduci', 1999, 'Verdu');
const student10 = new Student('Ares', 'Fiumicelli', 1993, 'Aresso');

const classroom1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);



function renderPage() {
    
    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < classroom1.studentsArray.length; i++){

       let student = classroom1.studentsArray[i]

const cardStudent = document.createElement('div')

cardStudent.classList.add('card-student')
const nameCard = document.createElement('span')
const surnameCard = document.createElement('span')
const yobCard = document.createElement('span')
const nickCard = document.createElement('span')

const nodeName = document.createTextNode('Nome: '+ student.name)
const nodeSurname = document.createTextNode('Cognome: '+ student.surname)
const nodeYob = document.createTextNode('Anno di nascita: '+ student.yob)
const nodeNick = document.createTextNode('Soprannome: '+ student.nick)

nameCard.appendChild(nodeName)
surnameCard.appendChild(nodeSurname)
yobCard.appendChild(nodeYob)
nickCard.appendChild(nodeNick)

cardStudent.appendChild(nameCard)
cardStudent.appendChild(surnameCard)
cardStudent.appendChild(yobCard)
cardStudent.appendChild(nickCard)

mainContainer.appendChild(cardStudent)
mainContainer.classList.add('main-container')
















        





    }
  
    }

renderPage();