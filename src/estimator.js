const covid19ImpactEstimator = (data) => {
  const impact = { ...data };
  const severeImpact = { ...data };

  impact.days = 0;
  impact.months = 0;

  let multiplier;

  //  IMPACT
  impact.currentlyInfected = impact.reportedCases * 10;

  if (impact.days <= 0 && impact.months <= 0) {
    // console.log('enter period of duration you want  to consider');
  } else if (impact.months > 0) {
    impact.days = impact.months * 30;

    // multiplier = Math.pow(2, Math.trunc(impact.days / 3));
    multiplier = 2 ** Math.trunc(impact.days / 3);
    impact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    // console.log(impact.infectionsByRequestedTime);
  } else {
    multiplier = 2 ** Math.trunc(impact.days / 3);
    impact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    // console.log(impact.infectionsByRequestedTime);
  }


  //   SEVERE IMPACT
  severeImpact.days = 0;
  severeImpact.month = 0;

  severeImpact.currentlyInfected = severeImpact.reportedCases * 50;

  if (severeImpact.days <= 0 && severeImpact.months <= 0) {
    // console.log('enter period of duration you want  to consider');
  } else if (severeImpact.months > 0) {
    severeImpact.days = severeImpact.months * 30;

    // multiplier = Math.pow(2, Math.trunc(impact.days / 3));
    multiplier = 2 ** Math.trunc(impact.days / 3);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * multiplier;
    // console.log(severeImpact.infectionsByRequestedTime);
  } else {
    multiplier = 2 ** Math.trunc(impact.days / 3);
    severeImpact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    // console.log(severeImpact.infectionsByRequestedTime);
  }

  return {
    data: {}, // the input data you got
    impact: {}, // your best case estimation
    severImpact: {} // /severe case estimation
  };
};

export default covid19ImpactEstimator;
