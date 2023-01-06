console.log(`A. Created class Bank and added bank object using constructor`);
console.log(
  `-------------------------------------------------------------------------------`
);

class Bank {
  constructor(bankName, location, accountNo, ifsc, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNo = accountNo;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
  }
}
console.log(`B. Created objects of Bank`);
console.log(
  `-------------------------------------------------------------------------------`
);
const axis_bank = new Bank(
  "AXIS BANK",
  "Kothrud",
  "011789562345",
  "AX0045",
  9.8
);
const sbi_bank = new Bank("SBI BANK", "Katraj", "023645875422", "SB1255", 7.8);
const icici_bank = new Bank(
  "ICICI BANK",
  "Karad",
  "012879555623",
  "IC6455",
  9.5
);
const kotak_bank = new Bank(
  "KOTAK BANK",
  "Koregaon Park",
  "011325874544",
  "KO4586",
  10.2
);
const hdfc_bank = new Bank(
  "HDFC BANK",
  "Shivaji Nagar",
  "0128895642222",
  "HD0069",
  9.75
);
const panjab_bank = new Bank(
  "PANJAB BANK",
  "Satara",
  "011235414222",
  "PN5678",
  8.5
);

const mapOfBankDetails = new Map();
mapOfBankDetails.set(axis_bank.accountNo, axis_bank);
mapOfBankDetails.set(sbi_bank.accountNo, sbi_bank);
mapOfBankDetails.set(icici_bank.accountNo, icici_bank);
mapOfBankDetails.set(kotak_bank.accountNo, kotak_bank);
mapOfBankDetails.set(hdfc_bank.accountNo, hdfc_bank);
mapOfBankDetails.set(panjab_bank.accountNo, panjab_bank);

console.log(
  `C. Created Map and stored accountNo as key and bank objects as value`
);
const keyOfBankDetails = mapOfBankDetails.keys();
console.log(keyOfBankDetails);
console.log(`---------------Bank Details----------------------`);
for (const keyAccountNo of keyOfBankDetails) {
  const bankDetails = mapOfBankDetails.get(keyAccountNo);
  console.log(bankDetails);
}
console.log(
  `-------------------------------------------------------------------------------`
);

console.log(
  `D. Traverse the map using for of loop and log bankName, accountNo, interestRate\n`
);

const keyOfBankDetail = mapOfBankDetails.keys();
for (const key of keyOfBankDetail) {
  const bankDetails = mapOfBankDetails.get(key);
  // console.log(bankDetails.bankName,key,bankDetails.interestRate);
  console.log(
    `Bank Name-> ${bankDetails.bankName}   Account No.-> ${key}   Interest Rate-> ${bankDetails.interestRate}`
  );
}
