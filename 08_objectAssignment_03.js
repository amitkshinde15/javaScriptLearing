function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

let yesBank = new Bank("YES BANK", "Kothrud", "YESB0000951", 951);
let sbiBank = new Bank("SBI BANK", "Katraj", "SBIN0008752", 8752);
let mahBank = new Bank("BANK OF MAHARASHTRA", "Karad", "MAHB0000188", 188);
let axisBank = new Bank("AXIS BANK", "Koregaon Park", "UTIB0002136", 2136);

console.log(
  `--------------------------------------------------------------------------------------------------`
);
console.log(
  `bank Details is => Bank Name:${yesBank.bankName}, Branch:${yesBank.location}, IFCS Code:${yesBank.ifscCode}, Branch Code:${yesBank.branchCode}`
);
console.log(
  `bank Details is => Bank Name: ${sbiBank.bankName}, Branch: ${sbiBank.location}, IFCS Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`
);
console.log(
  `bank Details is => Bank Name: ${mahBank.bankName}, Branch: ${mahBank.location}, IFCS Code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`
);
console.log(
  `bank Details is => Bank Name: ${axisBank.bankName}, Branch: ${axisBank.location}, IFCS Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`
);

console.log(
  `--------------------------------------------------------------------------------------------------`
);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(
  `SBI Bank Opens at ${sbiBank.openTime} and closes at ${sbiBank.closeTime}`
);
console.log(
  `AXIS Bank Opens at ${axisBank.openTime} and closes at ${axisBank.closeTime}`
);

console.log(
  `--------------------------------------------------------------------------------------------------`
);
console.log(
  `Bank name - ${yesBank.bankName}, Branch Code - ${yesBank.branchCode}, OpenTime - ${yesBank.openTime}`
);
