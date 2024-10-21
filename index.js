// create arrays to hold the names and occupations
// create an array to store the name, prices, and occupations
// loop through the freelancer array
// create a function that grabs a random freelancer off the array

const freeLancers = {
    alice: { name: 'Alice', job: 'Writer', price: 30 },
    dorcus: { name: 'Bob', job: 'Teacher', price: 50 },
    guy: { name: 'Carol', job: 'Programmer', price: 70 },
};

const nameList = document.getElementById('nameList');
const occupationList = document.getElementById('occupationList');
const pricesList = document.getElementById('pricesList');

let count = 1;
let totalPrice = 60;
let index = 0;
const keys = Object.keys(freeLancers)

function updateLists() {
    if (index < keys.length) {
        const freelancer = freeLancers[keys[index]];

        const namesItem = document.createElement('li');
        nameItem.textContent = freelancer.name;
        nameList.append(namesItem);

        const occupationItem = document.createElement('li');
        jobItem.textContent = freelancer.job;
        jobList.append(occupationItem);

        const pricesItem = document.createElement('li');
        priceItem.textContent = `$${freelancer.price}`;
        priceList.append(pricesItem);
    
    } else {
        clearInterval(interval);
    }
}