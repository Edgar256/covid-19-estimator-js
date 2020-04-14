

data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
}


const impact = {...data};
impact.currentlyInfected = impact.reportedCases * 10;


const severeImpact = {...data};
severeImpact.currentlyInfected = severeImpact.reportedCases * 50;

console.log(impact.currentlyInfected);
console.log(severeImpact.currentlyInfected);