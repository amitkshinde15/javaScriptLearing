console.log("===== Object merge using spread operator ======");
let empAnil = {
    name : "Anil",
    role: "Software Developer"
}
let empAddress = {
    city: "Pune",
    street: "Wakad - 411057"
}
let mergedObject = {...empAnil, ...empAddress};console.log(mergedObject);

console.log(mergedObject);