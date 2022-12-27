const professor = {
    name : "Rahul Dravid",
    hight : 5.7,
    weight: 75,
    age: 37,
    subject : "Maths",
    

    degrees : {
        engineering : "CSC",
        PHD : "Adv Computing",
        MS : "JavaScript",
    },

    certificates : {

        first : "Hacker Rank Participation",
        second : "Certificate in IFE course",
        third : "Certificate in Adv programming",
    },
    value : function() {
     return professor.degrees.engineering+" "+professor.degrees.PHD+" "+professor.degrees.MS; 
    },
    
}
console.log(`01. Professor Information`);
console.log(professor);
console.log(`02. Adding nested object degree`);
console.log(professor.degrees);
console.log(`03. Adding nested object certificates`);
console.log(professor.certificates);
const totalDegree = professor.value();
console.log(`04. Total degrees are: ${totalDegree}`);

professor.city = "Pune";
console.log(`05. Added new property in object professor is city name ${professor.city}`);
console.log(professor);
professor.subject = "JavaScript Programming";
console.log(`06. Modifying existing property subject`);
console.log(professor);
delete professor.certificates.third;
console.log(`07. After deleting third certificate`);
console.log(professor.certificates);
console.log(`08. After adding new certificate`);
professor.certificates.third = "Advance java";
console.log(professor.certificates);



