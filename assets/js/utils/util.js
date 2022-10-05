function getRes(url, options = {}) {

    return fetch(url, options)
        .then(res => {
            //ако статуса е в неуспешния диапазон - 4xx - 5xx, хвърли тази грешка, за да може после да се влезе в catch
            if (!res.ok) {
                throw new Error("HTTP error " + res.status);
            }
            return res.json();
        })
};


function printCountriesCards(countries, container) {

    container.innerHTML = ""; //зачистваме всеки контейнер, преди да го напълним

    // console.log(countries);

    countries.forEach(country => {
        //console.log(country);

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.width = "18rem";
        cardDiv.id = country.name;


        let cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = country.flagImg;

        let cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body", "d-flex", "flex-column", "align-items-center");

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");
        cardH5.innerText = country.name;

        let cardP1 = document.createElement("p");
        cardP1.classList.add("card-text");
        cardP1.innerText = country.capital;

        let cardP2 = document.createElement("p");
        cardP2.classList.add("card-text");
        cardP2.innerText = country.region;


        let cardP3 = document.createElement("p");
        cardP3.classList.add("card-text");
        cardP3.innerText = country.timezone;

        cardBodyDiv.append(cardH5, cardP1, cardP2, cardP3);

        // let cardButtonsDiv = document.createElement("div");
        // cardButtonsDiv.classList.add("d-flex", "align-items-center", "justify-content-between");

        // let forecastButton = document.createElement("button");
        // forecastButton.classList.add("btn", "btn-primary", "p-2", "m-2");

        // forecastButton.innerText = "Check forecast";
        // forecastButton.id = `${country.lat} ${country.lng}`; //координатите на страната


        // let favoritesButton = document.createElement("button");
        // favoritesButton.classList.add("btn", "btn-primary", "p-2", "m-2");

        // //логика текст add to favorites/remove from favorites бутони 
        // if (userManager.currentUser.countryIsInFavorites(country.name)) {
        //     favoritesButton.innerText = "Remove from favorites";
        // } else {
        //     favoritesButton.innerText = "Add to favorites";
        // }

        // // favoritesButton.id = country.name.common;
        // favoritesButton.id = country.name;

        // forecastButton.addEventListener("click", function (e) {
        //     // console.log(e.target.id.split(" "));
        //     let [lat, long] = e.target.id.split(" ");


        //     renderDetails(country.name, country.flagImg); //това е в detailsController
        //     location.hash = `#details`; //а тук сменяме hash, за да покажем view-то

        // })

        // //логика какво да става в зависимост от това дали страната е в любими или не
        // favoritesButton.addEventListener("click", function (e) {

        //     if (userManager.currentUser.countryIsInFavorites(country.name)) { //ако страната вече е лайкната, махни я от лайкнати
        //         userManager.currentUser.removeFromFavorites(country.name);
        //         favoritesButton.innerText = "Add to favorites";

        //         if (location.hash === "#favorites") { //ако сме на favorites, разкарай веднага картичката, без да правим ново рендериране
        //             e.target.parentElement.parentElement.remove();
        //         }

        //     } else {
        //         userManager.currentUser.addToFavorites(country.name);
        //         favoritesButton.innerText = "Remove from favorites";
        //     }
        //     userManager.updateUser(userManager.currentUser); //ъпдейтни юзъра, каквото и да е ставало
        // });

        // cardButtonsDiv.append(forecastButton, favoritesButton);

        cardDiv.addEventListener("click", function (e) {
            console.log(e.currentTarget.id); //the name of the country

            renderDetails(country.name); //
            location.hash = `#details`; //а тук сменяме hash, за да покажем view-то

        })

        cardDiv.append(cardImg, cardBodyDiv, /*cardButtonsDiv*/ );

        container.append(cardDiv);


    });

};


function showLoadingDiv(container) {
    let loadingDiv = document.createElement("div");
    loadingDiv.id = "loadingDiv";
    loadingDiv.innerText = "Loading...";
    container.append(loadingDiv);
}


// не ни трябва, защото така или иначе зачистваме предварително всеки контейнер, който ще рендерираме/пълним, така че това така или иначе изчезва
// function removeLoadingDiv(container) {
//     let loadingDiv = document.getElementById("loadingDiv");
//     container.remove(loadingDiv);
// }

function fillDataList(countries) {
    countriesDataList.innerHTML = "";

    countries.forEach(country => {
        let newOption = document.createElement("option");
        newOption.value = country.name;
        countriesDataList.append(newOption);
    })

}