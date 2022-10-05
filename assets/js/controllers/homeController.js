function renderHome() {
    console.log("Рендерираме home page");

    showLoadingDiv(homePageContent);

    countriesManager.getCurrentUserFavoriteCountries()
        .then(countries => {

            printCountriesCards(countriesManager.currentUserFavoriteCountries, homePageContent);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            // removeLoadingDiv();
        })

};