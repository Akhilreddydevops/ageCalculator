const calculateBtn = document.querySelector("#calculateBtn");
calculateBtn.addEventListener("click", function() {
  const birthdate = new Date(document.querySelector("#birthdate").value);
  const today = new Date();
  const ageInMilliseconds = today - birthdate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInWeeks = ageInDays / 7;
  const ageInMonths = ageInDays / 30.44;
  const ageInYears = ageInMonths / 12;
  const leapYears = Math.floor(ageInYears / 4);

  document.querySelector("#result").innerHTML = `
    Age in Years: ${ageInYears.toFixed(2)}<br>
    Age in Months: ${ageInMonths.toFixed(2)}<br>
    Age in Weeks: ${ageInWeeks.toFixed(2)}<br>
    Age in Days: ${ageInDays.toFixed(2)}<br>
    Age in Hours: ${ageInHours.toFixed(2)}<br>
    Age in Minutes: ${ageInMinutes.toFixed(2)}<br>
    Age in Seconds: ${ageInSeconds.toFixed(2)}<br>
    Leap Years: ${leapYears}
  `;
});
