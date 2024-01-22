
let companies=["bloomberg","microsoft","uber","google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log("remove first company",companies);
companies.splice(1,1,"Ola");//replace uber with ola
companies.push("Amazon");//adding amazon at end
console.log(companies);