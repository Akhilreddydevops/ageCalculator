const calculateAge = () => {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const ageInMilliseconds = today - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInWeeks = ageInDays / 7;
    const ageInMonths = ageInDays / 30.44;
    const ageInYears = ageInDays / 365.25;
  
    const result = document.getElementById("result");
    result.innerHTML = `You are ${Math.floor(ageInYears)} years, ${Math.floor(
    ageInMonths % 12
  )} months, ${Math.floor(ageInWeeks % 4)} weeks, ${Math.floor(
    ageInDays % 7
  )} days, ${Math.floor(ageInHours % 24)} hours, ${Math.floor(
    ageInMinutes % 60
  )} minutes, and ${Math.floor(ageInSeconds % 60)} seconds old.`;
  
  const audio = document.createElement("audio");
  audio.src = "msnarayana1.mp3";
  audio.autoplay = true;
  result.appendChild(audio);
  
  result.classList.add("show");
};
  
  document.getElementById("calculate").addEventListener("click", calculateAge);
