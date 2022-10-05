window.addEventListener("hashchange", router.handleHashChange);
window.addEventListener("load", router.handleHashChange);

//logout
logoutNavLink.addEventListener("click", function (e) {
    e.preventDefault();
    userManager.logout();
    location.hash = "#login";
});


function search(e) {

    countriesManager.searchCountryByName(e.target.value)
        .then(countries => {
            fillDataList(countriesManager.filteredCountries);
        }).catch(err => {
            console.log(err);
        })

};


function debounce(functionToBeDebounced, time) {

    let timerId;

    return function (...params) {
        clearTimeout(timerId);
        timerId = setTimeout(functionToBeDebounced, time, ...params);
    }

};

let debouncedSearch = debounce(search, 1000);

searchInputEl.addEventListener("input", debouncedSearch);


searchInputEl.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        if (countriesManager.isValidCountry(e.target.value)) {
            console.log(e.target.value);
            userManager.currentUser.addToFavorites(e.target.value);
            userManager.updateUser(userManager.currentUser);

            renderHome();
        }

    }
})


ascendingSortBtn.addEventListener("click", function (e) {
    console.log(e);
    countriesManager.ascendingSort();
    printCountriesCards(countriesManager.currentUserFavoriteCountries, homePageContent);
})



descendingSortBtn.addEventListener("click", function (e) {
    console.log(e);
    countriesManager.descendingSord();
    printCountriesCards(countriesManager.currentUserFavoriteCountries, homePageContent);
})