//1. frequent number

const angka = [1, 1, 2, 2, 2, 3, 3, 3, 3];

const Angka = angka.reduce((frequency, num) => {
    frequency[num] = (frequency[num] || 0) + 1; 
    return frequency; 
}, {});

console.log(Angka);

//2. find the unique element

const nilai = [1, 2, 2, 3, 3, 4, 5, 5];

const unique = nilai.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

const ada = Object.keys(unique).filter(num => unique[num] === 1).map(Number);

const range = [...Array(6).keys()].slice(1); 

const tidakada = range.filter(num => !unique[num]);

console.log('Bilamana ada =', ada);
console.log('Bilamana tidak ada =', tidakada);

//3. check the similarity

const baris1 = [7, 8, 9];
const baris2 = [7, 9, 10, 11];

const Similarity = baris1.filter(num => baris2.filter(val => val === num).length > 0);
console.log(Similarity);