class Bank{
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;

    }
}
const axis_bank = new Bank("AXIS BANK", "Kothrud","011789562345","AX0045", 9.8);
const sbi_bank = new Bank("SBI BANK", "Katraj","023645875422","SB1255",  7.8);
const icici_bank = new Bank("ICICI BANK", "Karad","012879555623","IC6455",  9.5);
const kotak_bank = new Bank("KOTAK BANK", "Koregaon Park","011325874544","KO4586",  10.2);
const hdfc_bank = new Bank("HDFC BANK", "Shivaji Nagar","0128895642222", "HD0069",  9.75);
const panjab_bank = new Bank("PANJAB BANK", "Satara","011235414222","PN5678",  8.5);

const bankArray = [axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];
console.log(`------Dispaying Bank name and Location using for of loop------`);
for (const iterator of bankArray) {
    console.log(`Bank Name - ${iterator.bankName}, Location - ${iterator.location}`);
       
    }
    console.log(`------Dispaying Kotak Bank details using for of loop------`);
    for (const element of bankArray) {
        if(element == kotak_bank){
            console.log(element);
            
        }
        
    }




