const covid19ImpactEstimator = (data) => {
  const impact = { ...data };
  const severeImpact = { ...data };
    
    impact.days ;
    impact.months  ; 

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

    return{
        data: {}, //the input data you got
        impact: {}, //your best case estimation
        severImpact: {} ///severe case estimation
    }
};

// covid19ImpactEstimator(data);

export default covid19ImpactEstimator;