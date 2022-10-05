// function renderDetails(lat, long, countryName, flagSrc) {
function renderDetails(countryName) {
    console.log(countryName);

    showLoadingDiv(detailsPageContent);

    countriesManager.getOneCountry(countryName)
        .then(countryData => {
            // console.log(countriesManager.currentCountry);
            printMoreInfo(countriesManager.currentCountry);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            //
        })
}


function printMoreInfo(countryData) {
    console.log(countryData);

    detailsPageContent.innerHTML = "";

    let dataContainer = document.createElement("div");
    dataContainer.classList.add("dataContainer");

    let countryNameH2 = document.createElement("h2");
    countryNameH2.innerText = countryData.name;

    let flagImage = document.createElement("img");
    flagImage.src = countryData.flagImg;

    let p1 = document.createElement("p");
    let countryCurrency = Object.values(countryData.currencies);
    p1.innerHTML = "Currency: " + countryCurrency[0].name;

    let p2 = document.createElement("p");
    p2.innerHTML = "Area: " + countryData.area;

    let p3 = document.createElement("p");
    p3.innerHTML = "Population: " + countryData.population;

    let iFrameMapEl = document.createElement("iframe");
    iFrameMapEl.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500743.6543926417!2d24.422236884776645!3d42.721928504121024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2sBulgaria!5e0!3m2!1sen!2sbg!4v1664805465999!5m2!1sen!2sbg`
    iFrameMapEl.allowFullscreen = "";
    iFrameMapEl.loading = "lazy";
    iFrameMapEl.referrerPolicy = "no-referrer-when-downgrade";

    dataContainer.append(countryNameH2, flagImage, p1, p2, p3, iFrameMapEl);


    detailsPageContent.append(dataContainer);



}



/*
{
    "name": "Malawi",
    "capital": "Lilongwe",
    "flagImg": "https://flagcdn.com/w320/mw.png",
    "region": "Africa",
    "timezone": "UTC+02:00",
    "currencies": {
        "MWK": {
            "name": "Malawian kwacha",
            "symbol": "MK"
        }
    },
    "area": 118484,
    "population": 19129955
}

*/