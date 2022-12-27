const sbiBank = {
  bankName: "SBI Bank",
  location: "Mumbai",
  accountNo: "41523564581",
  ifsc: "SBIN000065",
  interestRate: 7.5,
  showDetails: function () {
    console.log(`Invoke SBI Bank details using function`);
    console.log(sbiBank);
  },
};
const axisBank = {
  bankName: "AXIS Bank",
  location: "Pune",
  accountNo: "77523564456",
  ifsc: "AXI001276",
  interestRate: 8.5,
  showDetails: function () {
    console.log(`Invoke AXIS Bank details using function`);
    console.log(axisBank);
  },
};
const hdfcBank = {
  bankName: "HDFC Bank",
  location: "Kolhapur",
  accountNo: "78952458741",
  ifsc: "HDFC004568",
  interestRate: 7.8,
  showDetails: function () {
    console.log(`Invoke HDFC Bank details using function`);
    console.log(hdfcBank);
  },
};
const yesBank = {
  bankName: "SBI Bank",
  location: "Mumbai",
  accountNo: "41523564581",
  ifsc: "SBIN000065",
  interestRate: 7.9,
  showDetails: function () {
    console.log(`Invoke SBI Bank details using function`);
    console.log(sbiBank);
  },
};
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();

