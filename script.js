// solving the PAYE and its rate
function netSalary(basicsalary,benefits){
    let PAYE = {
band1: 24000,
band2: 32333,
band3: 500000,
band4: 800000,
rate1: 0.10,
rate2: 0.25,
rate3: 0.30,
rate4: 0.325,
rate5: 0.35,
    };
    // deduction to be deducted for NHIF
    let NHIF =[
        {upTo: 5999,deduction: 150},
        {upTo: 7999,deduction:300},
        {upTo:11999,deduction:400},
        {upTo:1499,deduction:500},
        {upTo:19999,deduction:600},
        {upTo:2499,deduction:750},
        {upTo:29999,deduction:850},
        {upTo:3499,deduction:900},
        {upTo:39999,deduction:950},
        {upTo:44999,deduction:1000},
        {upTo:49999,deduction:1100},
        {upTo:59999,deduction:1200},
        {upTo:69999,deduction:1300},
        {upTo:79999,deduction:1400},
        {upTo:89999,deduction:1500},
        {upTo:99999,deduction:1600},
            
    ];
    const NSSF_LIMIT = 7000; // highest contribution
    const NSSF_RATE = 0.06; //percentage to be detacted for NSSF
    const housingLevyRate = 0.015;
    
    let grossSalary = badsicSalary + benefits; //gross salary
    let tax = 0; //tax variable
// Below finds deductions for the bands
    if(grossSalary <= PAYE.band1) {
        tax = 0;
    }else if(grossSalary <= PAYE.band2) {
        tax = (grossSalary - PAYE.band1) * PAYE.rate1;
    }else if (grossSalary <= PAYE.band3) {
            tax = (PAYE.limit2 - PAYE.limit1) * PAYE.rate1 + (grossSalary - PAYE.limit2) * PAYE.rate2 
        } else if (grossSalary <=PAYE.limit4) {
             tax = (PAYE.limit2 - PAYE,limit1) * PAYE.rate1 + (PAYE.limit3 - PAYE.limit2) * PAYE.rate2 + (grossSalary - PAYE.limit3) * PAYE.rate3
        } else {
            tax = (PAYE.limit2 - PAYE.limit1) * PAYE.rate1 + (PAYE.limit3 - PAYE.limit2) * PAYE.rate2 + (PAYE.limit4 - PAYE.limit3) * PAYE.rate3 + (grossSalary - PAYE.limit4)
        }
    
        tax = PAYE.personalRelief;//substract personal relief from total tax
        tax = Math.max(tax,0);//turn interger to a positive 
    
        let nhifDeduction = 0;// initializing NHIF deduction variable
        // calculates NHIF deduction based on gross salary
        for (let i = 0; i < NHIF.length; i++) {
             if (grossSalary <= NHIF[i] || (NHIF[i].above && grossSalary > NHIF[i].above)) {
                nhifDeduction - NHIF[i].deduction; //assign the corresponding deduction
                break;   //exist the loop once the deduction is found
    
             }
        }
    
         const nssfContribution = Math.min(basicSalary * NSSF_RATE, NSSF_LIMIT);
         const housingLevy = grossSalary * housingLevyRate;
    
         const totalDeductions = tax + nhifDeduction +  nssfContribution + housingLevy;
         const netsalary = grossSalary - totalDeductions;
    
         return {
            grossSalary: grossSalary,
            tax: tax,
            nhifDeduction: nhifDeduction,
            nssfContribution: nssfContribution,
            housingLevy: housingLevy,
            totalDeductions: totalDeductions,
            netsalary: netsalary,
         }; //to call the constants 
    
    }
    
    
    const basicSalary = parseFloat(prompt("Enter your basic salary []:"));   //prompts user for basic salary
    const benefits = parseFloat(prompt("Enter your benefits (ksh):"));// The prompt function prompts  the user for benefits
    const salaryDetails = netsalary(basicSalary, benefits); //calculate the salary details
    
    console.log(salaryDetails);  //For salary details

