const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers);
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// per invertire l'ordine degli insegnanti direttamente in una variabile, senza invertirlo nella variabile originale

const reversedTeachersAlternative = teachers.toReversed();
console.log(reversedTeachersAlternative);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length > 4) {
    longNames.push(teachers[i]);
  }
}

console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers

// for (let i = 0; i < teachers.length; i++) {
//   if (teachers[i] === 'Ed') {
//     teachers.splice(i, 1)
//   }
// }

teachers.splice(teachers.indexOf('Ed'), 1);

console.log(teachers);



// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);

let isFabioPresent2 = false;

// for (let i = 0; i < teachers.length; i++) {
//   if (teachers[i] === 'Fabio') {
//     isFabioPresent2 = true
//   }
// }


for (let i = 0; i < teachers.length; i++) {
  const thisTeacher = teachers[i];
  if (thisTeacher === 'Fabio') {
    isFabioPresent2 = true;
  }
  
}
console.log(isFabioPresent2);





// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');
console.log(teachersString);

let teachersString2 = teachers[0]

for (let i = 1; i < teachers.length; i++) {
  teachersString2 +=  ', ' + teachers[i]
}

console.log(teachersString2);

