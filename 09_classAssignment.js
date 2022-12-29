console.log(`================== 01.Vehicle Details ==================`);
class Vehicle {
  constructor(brand, engine, mileage, fuel) {
    this.brand = brand;
    this.engine = engine;
    this.mileage = mileage;
    this.fuel = fuel;
  }
}
let marutiSuzuki = new Vehicle("Baleno", "1200cc", 21, "Petrol");
let hyundai = new Vehicle("i20", "1000cc", 18, "Petrol");
let Volkswagen = new Vehicle("Polo", "1500cc", 22, "diesel");
let toyota = new Vehicle("Glanza", "1200cc", 23, "Petrol");
console.log(marutiSuzuki);
console.log(hyundai);
console.log(Volkswagen);
console.log(toyota);
console.log(`================== 02.College Details ==================`);

class College {
  constructor(name, location, faculty, university) {
    this.name = name;
    this.location = location;
    this.faculty = faculty;
    this.university = university;
  }
  showDetails() {
    console.log(this.name, this.location, this.faculty, this.university);
  }
}
let sgmCollege = new College("S.G.M College", "Karad", "Science", "Shivaji");
let bharatiVid = new College(
  "Bharati Vidyapeeth",
  "Katraj",
  "Medical",
  "Deemed"
);
let mitCollege = new College("M.I.T College", "Kothrud", "Commerce", "Pune");
let coepCollege = new College(
  "COEP College",
  "Shivaji Nagar",
  "Engineering",
  "Autonomous"
);

sgmCollege.showDetails();
bharatiVid.showDetails();
mitCollege.showDetails();
coepCollege.showDetails();
console.log(`================== 03.calling object using function and for loop ==================`);

function traverseObject(value) {
  for (const key in value) {
    if (Object.hasOwnProperty.call(value, key)) {
      const element = value[key];
      console.log(`${key} = ${element}`);
    }
  }
}
traverseObject(sgmCollege);
console.log("----------------------------");
traverseObject(bharatiVid);
console.log("----------------------------");
traverseObject(mitCollege);
console.log("----------------------------");
traverseObject(coepCollege);
