const plants = [
    
    {
    name: "Zucchini",
    zones: [2,3,4,5,6,7,8,9,10,11],
    IdealPlantingMonth: "May",
    DaytoMaturity: "50 days",
    AnnualPerrenial: "Annual",
     SunExposure: "8-10 hours",
     MoreInfo: "https://www.almanac.com/plant/zucchini",

    },

   { 
    name: "Yellow Squash",
    zones: [3,4,5,6,7,8,9,10,11],
    IdealPlantingMonth: "March",
    DaytoMaturity: "35-110 days",
    AnnualPerrenial: "Annual",
    SunExposure: "6+ hours",
    MoreInfo: "https://bonnieplants.com/blogs/how-to-grow/growing-squash",

    },

    {
    name: "Pumpkin",
    zones: [3,4,5,6,7,8,9],
    IdealPlantingMonth: "May/June",
    DaytoMaturity: "90-120 days",
    AnnualPerrenial: "Annual",
    SunExposure: "6+ hours",
    MoreInfo: "https://www.thespruce.com/how-to-grow-pumpkins-1403469#:~:text=Plant%20pumpkins%20in%20early%20spring,hill%2C%20about%201%20inch%20deep.",

    },

    {
    name: "Cucumber",
    zones: [4,5,6,7,8,9,10,11,12],
    IdealPlantingMonth: "May",
    DaytoMaturity: "60 days",
    AnnualPerrenial: "Annual",
    SunExposure: "6-8 hours",
    MoreInfo: "https://bonnieplants.com/blogs/how-to-grow/growing-cucumbers",

    },

    {
    name: "Cabbage",
    zones: [2,3,4,5,6,7,8,9],
    IdealPlantingMonth: "April",
    DaytoMaturity: "100-120 days",
    AnnualPerrenial: "Annual",
    SunExposure: "6-8 hours",
    MoreInfo: "https://extension.usu.edu/yardandgarden/research/cabbage-in-the-garden",

    },

    {
    name: "Eggplant",
    zones: [2,3,4,8],
    IdealPlantingMonth: "March",
    DaytoMaturity: "60 days",
    AnnualPerrenial: "Annual",
     SunExposure: "6-9 hours",
     MoreInfo: "https://bonnieplants.com/blogs/how-to-grow/growing-eggplant",

    },

    {
    name: "Strawberry",
    zones: [4,6,7],
    IdealPlantingMonth: "April",
    DaytoMaturity: "75 days",
    AnnualPerrenial: "Perennial",
    SunExposure: "8 hours",
    MoreInfo: "https://bonnieplants.com/blogs/how-to-grow/growing-strawberries",
    },

    {
    name: "Blueberry",
    zones: [3,5,8,9],
    IdealPlantingMonth: "April",
    DaytoMaturity: "120 days",
    AnnualPerrenial: "Annual",
     SunExposure: "7-9 hours",
     MoreInfo: "https://extension.umn.edu/fruit/growing-blueberries-home-garden",

    },

    {
    name: "Cilantro",
    zones: [2,5,6],
    IdealPlantingMonth: "May",
    DaytoMaturity: "40 days",
    AnnualPerrenial: "Annual",
     SunExposure: "6-8 hours",
     MoreInfo: "https://bonnieplants.com/blogs/how-to-grow/growing-cilantro",

    },

    {
    name: "Basil",
    zones: [3,4],
    IdealPlantingMonth: "March",
    DaytoMaturity: "40 days",
    AnnualPerrenial: "Annual",
     SunExposure: "7 hours",
     MoreInfo: "https://www.almanac.com/plant/basil",

    },

{
    name: "Raspberry",
    zones: [2,6,9],
    IdealPlantingMonth: "April",
    DaytoMaturity: "80 days",
    AnnualPerrenial: "Perrenial",
     SunExposure: "7 hours",
     MoreInfo: "https://miraclegro.com/en-us/learn-grow/how-to-grow-raspberry-bushes.html",

},

  {
    name: "Blackberry",
    zones: [6,9],
    IdealPlantingMonth: "May",
    DaytoMaturity: "90 days",
    AnnualPerrenial: "Perrenial",
     SunExposure: "9 hours",
     MoreInfo: "https://www.southernliving.com/garden/growing-blackberries",

},
 {
    name: "Tomato",
    zones: [3,5,6,7],
    IdealPlantingMonth: "May",
    DaytoMaturity: "50-80 days",
    AnnualPerrenial: "Perennial",
    SunExposure: "6-8 hours",
    MoreInfo: "https://www.almanac.com/plant/tomatoes",

},

{
    name: "Bell Peppers",
    zones: [2,7],
    IdealPlantingMonth: "May",
    DaytoMaturity: "60-90 days",
    AnnualPerrenial: "Perennial",
    SunExposure: "6-8 hours",
    MoreInfo: "https://www.almanac.com/plant/bell-peppers",

},

 {
    name: "Spicy Peppers",
    zones: [2,3,6],
    IdealPlantingMonth: "January",
    DaytoMaturity: "50-80 days",
    AnnualPerrenial: "Perennial",
    SunExposure: "6-8 hours",
    MoreInfo: "https://savvygardening.com/growing-hot-peppers/",

},

{
    name: "Potato",
    zones: [3,7],
    IdealPlantingMonth: "May",
    DaytoMaturity: "90-120 days",
    AnnualPerrenial: "Annual",
    SunExposure: "6-8 hours",
    MoreInfo: "https://www.gardendesign.com/vegetables/potatoes.html",

},

{
    name: "Beans",
    zones: [4,5,9],
    IdealPlantingMonth: "April",
    DaytoMaturity: "45-60 days",
    AnnualPerrenial: "Annual",
    SunExposure: "8 hours",
    MoreInfo: "https://www.almanac.com/plant/beans",

},

 {
    name: "Watermelon",
    zones: [4,6,7],
    IdealPlantingMonth: "February",
    DaytoMaturity: "65-100 days",
    AnnualPerrenial: "Annual",
    SunExposure: "8-10 hours",
    MoreInfo: "https://bonnieplants.com/blogs/how-to-grow/growing-watermelons",

}];

const zoneselect = document.getElementById('zoneSelect');
const plantselect = document.getElementById('plantSelect');
zoneselect.addEventListener('change', function(event){
let plantName = '';
const plantNameArray = [];
const chosenzone = plants.filter((name) => name.zones.includes(Number(event.target.value)))
for (i=0; i < chosenzone.length; i++){
    plantName = chosenzone[i].name
    plantNameArray.push(plantName);
  };
plantselect.innerHTML = '';
for(let i=0; i<plantNameArray.length; i++) { 
    const option = document.createElement('option');
        option.textContent = plantNameArray[i];
        plantselect.appendChild(option);
        };
});

const nameOfPlant = document.getElementById('plantName');
const plantingMonth = document.getElementById('plantingMonth');
const daysToMaturity = document.getElementById('daysToMaturity');
const annualOrPer = document.getElementById('annualOrPer');
const sunExposure = document.getElementById('sunExposure');
const moreInfoLink = document.getElementById('moreInfoLink');


const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
    const selectedPlantName = plantselect.value;
    const selectedPlantObject = plants.find(plant => plant.name === selectedPlantName);
    if (selectedPlantObject) {
        plantName.innerHTML = "Plant Name: " + selectedPlantObject.name;
        plantingMonth.innerHTML = "Ideal Planting Month: " + selectedPlantObject.IdealPlantingMonth;
        daysToMaturity.innerHTML = "Days to Maturity: " + selectedPlantObject.DaytoMaturity;
        annualOrPer.innerHTML = "Annual or Perennial: " + selectedPlantObject.AnnualPerrenial;
        sunExposure.innerHTML = "Sun Exposure: " + selectedPlantObject.SunExposure;
        
        // Clear the existing moreInfoLink content before adding the new link
        moreInfoLink.innerHTML = "More Info: ";
        const anchorElement = document.createElement('a');
        anchorElement.href = selectedPlantObject.MoreInfo;
        anchorElement.textContent = "Click here!"; 
        moreInfoLink.appendChild(anchorElement);
    }
});
