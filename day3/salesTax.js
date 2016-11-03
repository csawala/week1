var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSales(companies){
  return companies.sales.reduce(function(prev, curr) {
    return prev + curr;
  })
}

function calculateTaxes(company) {
  var totalSales = calculateSales(company)
  var taxRate = salesTaxRates[company.province];
  return totalSales * taxRate;
}


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var produceResults = {};

  salesData.forEach(function(company, i){
    if (!produceResults.hasOwnProperty(company.name)){
      produceResults[company.name] = {};
      produceResults[company.name].totalSales = calculateSales(company);
      produceResults[company.name].totalTaxes = calculateTaxes(company);
    } else {
      produceResults[company.name].totalSales += calculateSales(company);
      produceResults[company.name].totalTaxes += calculateTaxes(company);
    }

  })
  return produceResults;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/