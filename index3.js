// defining the tax rates and the exisitng rates
const TAX_RATES = [
  { min: 0, max: 24000, rate: 10 },
  { min: 24001, max: 32333, rate: 15 },
  { min: 32334, max: 40383, rate: 20 },
  { min: 40384, max: 48333, rate: 25 },
  { min: 48334, max: 60000, rate: 30 },
  { min: 60001, max: Infinity, rate: 35 }
];
// defining NHIF rates and the rates for various values.
const NHIF_RATES = [
  { min: 0, max: 5999, amount: 150 },
  { min: 6000, max: 7999, amount: 300 },
  { min: 8000, max: 11999, amount: 400 },
  { min: 12000, max: 14999, amount: 500 },
  { min: 15000, max: 19999, amount: 600 },
  { min: 20000, max: 24999, amount: 750 },
  { min: 25000, max: 29999, amount: 850 },
  { min: 30000, max: 34999, amount: 900 },
  { min: 35000, max: 39999, amount: 1000 },
  { min: 40000, max: 44999, amount: 1100 },
  { min: 45000, max: 49999, amount: 1200 },
  { min: 50000, max: 59999, amount: 1300 },
  { min: 60000, max: 69999, amount: 1400 },
  { min: 70000, max: 79999, amount: 1500 },
  { min: 80000, max: 89999, amount: 1600 },
  { min: 90000, max: 99999, amount: 1700 },
  { min: 100000, max: Infinity, amount: 1800 }];

// define values for NSSF rates for employers and employees
const NSSF_RATE_EMPLOYEE = 6;
const NSSF_RATE_EMPLOYER = 6;

// calculating tax based on the salary bracket
function calculateTax(basicSalary) {
  let tax = 0;
  for (const { min, max, rate } of TAX_RATES) {
    if (basicSalary > max) {
      tax += (max - min + 1) * (rate / 100);
    } else if (basicSalary >= min) {
      tax += (basicSalary - min + 1) * (rate / 100);
      break;
    }
  }
  return tax;
}

// calculate NHIF deductions based on the salary bracket
function calculateNHIF(grossSalary) {
  for (const { min, max, amount } of NHIF_RATES) {
    if (grossSalary > max) {
      continue;
    } else if (grossSalary >= min) {
      return amount;
    }
  }
  return 0;
}

// calculate NSSF deductions based on the salary bracket
function calculateNSSF(basicSalary) {
  return basicSalary * (NSSF_RATE_EMPLOYEE / 100);
}

function calculateNetSalary(basicSalary, benefits) {
  const tax = calculateTax(basicSalary);
  const nssf = calculateNSSF(basicSalary);
  const grossSalary = basicSalary + benefits;
  const nhif = calculateNHIF(grossSalary);
  const totalDeductions = tax + nssf + nhif;
  const netSalary = grossSalary - totalDeductions;

  return {
    basicSalary,
    benefits,
    grossSalary,
    tax,
    nssf,
    nhif,
    totalDeductions,
    netSalary,
  };
}

// test case
const basicSalary = 70000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);
console.log(result);
