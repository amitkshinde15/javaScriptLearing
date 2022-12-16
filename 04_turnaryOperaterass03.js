var interviewEligibility = function (
  gradScore,
  hscScore,
  sscScore,
  candidateName
) {
  var eligibility =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? `Congrates ${candidateName} you are eligible for TCS interview`
      : `Unfortunately ${candidateName} you are not eligible for TCS interview`;
  console.log(`${eligibility}`);
  console.log(
    "---------------------------------------------------------------\n"
  );
};
interviewEligibility(80, 86, 90, "Amit");
interviewEligibility(70, 65, 55, "Ganesh");
interviewEligibility(60, 79, 88, "Sadhana");
