const covid19ImpactEstimator = (data) => {
  let impact = { ...data };
  let severeImpact = { ...data };
  const days = 0;
  const weeks = 0;
  const months = 0;

  impact.days = days;
  impact.weeks = weeks;
  impact.months = months;

  let multiplier;

  //  IMPACT
  impact.currentlyInfected = impact.reportedCases * 10;

  if (impact.days <= 0 && impact.weeks <= 0 && impact.months <= 0) {
    impact = { ...data };
  } else if (impact.months > 0) {
    impact.days = impact.months * 30;
    multiplier = 2 ** Math.trunc(impact.days / 3);
    impact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  } else if (impact.weeks > 0) {
    impact.days = impact.weeks * 7;
    multiplier = 2 ** Math.trunc(impact.days / 3);
    impact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  } else {
    multiplier = 2 ** Math.trunc(impact.days / 3);
    impact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  }


  //   SEVERE IMPACT
  severeImpact.days = days;
  severeImpact.weeks = weeks;
  severeImpact.month = months;

  severeImpact.currentlyInfected = severeImpact.reportedCases * 50;

  if (severeImpact.days <= 0 && severeImpact.weeks <= 0 && severeImpact.months <= 0) {
    severeImpact = { ...data };
  } else if (severeImpact.months > 0) {
    severeImpact.days = severeImpact.months * 30;
    multiplier = 2 ** Math.trunc(impact.days / 3);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * multiplier;
    severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;
  } else if (severeImpact.weeks > 0) {
    severeImpact.weeks = severeImpact.months * 7;
    multiplier = 2 ** Math.trunc(impact.days / 3);
    severeImpact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;
  } else {
    multiplier = 2 ** Math.trunc(impact.days / 3);
    severeImpact.infectionsByRequestedTime = impact.currentlyInfected * multiplier;
    severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;
  }

  return {
    data: {}, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // /severe case estimation
  };
};

export default covid19ImpactEstimator;
