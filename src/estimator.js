// const data = {
//     region: {
//     name: "Africa",
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//     },
//     periodType: "days",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614
// }

// console.log(data)

const covid19ImpactEstimator = (data) => {

    const impact = {...data};
    const severeImpact = {...data};
    
    impact.days ; //test days
    impact.months  ; //test months    

    //  IMPACT
    impact.currentlyInfected = impact.reportedCases * 10;

    if(impact.days === undefined && impact.months === undefined){
        console.log('enter period of duration you want  to consider')
    }else{       

        if(impact.months !== undefined){
            impact.days = impact.months * 30;

            impact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2, Math.trunc(impact.days/3));
            console.log(impact.infectionsByRequestedTime);
        }else{
            impact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2, Math.trunc(impact.days/3));
            console.log(impact.infectionsByRequestedTime);
        }
        
    }


    //   SEVERE IMPACT
    severeImpact.days = 1;
    severeImpact.month ;
    
    severeImpact.currentlyInfected = severeImpact.reportedCases * 50;

    if(severeImpact.days === undefined && severeImpact.months === undefined){
        console.log('enter period of duration you want  to consider')
    }else{       

        if(severeImpact.months !== undefined){
            severeImpact.days = severeImpact.months * 30;

            severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * Math.pow(2, Math.trunc(impact.days/3));
            console.log(severeImpact.infectionsByRequestedTime);
        }else{
            severeImpact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2, Math.trunc(impact.days/3));
            console.log(severeImpact.infectionsByRequestedTime);
        }
        
    }


    
    

    // console.log(impact.currentlyInfected);
    // console.log(severeImpact.currentlyInfected);

    

    return{
        data: {}, //the input data you got
        impact: {}, //your best case estimation
        severImpact: {} ///severe case estimation
    }
};

// covid19ImpactEstimator(data);

export default covid19ImpactEstimator;