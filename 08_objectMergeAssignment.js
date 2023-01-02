const car = {
    carName : "Creta SX",
    company : "Hyundai",
    launchYear : 2017
}
const carEngine ={
    enginePower : "1499CC",
    maxPower : "113 BHP"
}
console.log(`-----------01. Merge object car and carEngine using Object.assign ----------`);
const mergeObject = Object.assign(car,carEngine);
for (const key in mergeObject) {
    if (Object.hasOwnProperty.call(mergeObject, key)) {
        let element = mergeObject[key];
        
      console.log(key, element);  
    }
    
}
console.log(`-----------02. Merge object car and carEngine using spread operator----------`);

const mergeObjectSpread = {...car,...carEngine}
console.log(mergeObjectSpread);
