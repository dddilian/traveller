let countriesManager = (function () {

    class CountriesManager {

        constructor() {
            this.allCountries = [];
            this.currentUserFavoriteCountries = [];
            this.filteredCountries = [];
            this.currentCountry = undefined;

        }

        getAllCountries() {

            return getRes(`https://restcountries.com/v3.1/all`)
                .then(data => {
                    console.log(data);
                    //!В this.allCountries слагаме обекти от class Country, съдържащи само пропъртитата, които ни интересуват за тази задача
                    this.allCountries = data.map(country => new Country(country.name.common, country.capital && country.capital[0], country.flags.png, country.region, country.timezones[0]));
                    //this.currentUserFavoriteCountries = this.allCountries.filter(country => userManager.currentUser.favoriteLocations.includes(country.name));
                    console.log(this.allCountries);
                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }


        getCurrentUserFavoriteCountries() {
            console.log(this.allCountries);
            return this.getAllCountries()
                .then(data => {
                    this.currentUserFavoriteCountries = this.allCountries.filter(country => userManager.currentUser.favoriteLocations.some(c => c.name === country.name));

                    return data;
                })
        }


        searchCountryByName(countryName) {

            let url = `https://restcountries.com/v3.1/name/${countryName}`;

            if (!countryName) {
                url = "https://restcountries.com/v3.1/all";
            }

            return getRes(url)
                .then(data => {

                    this.filteredCountries = data.map(country => new Country(country.name.common, country.capital && country.capital[0], country.flags.png, country.region, country.timezones[0]));

                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }


        getOneCountry(countryName) {
            console.log(countryName);
            let url2 = `https://restcountries.com/v3.1/name/${countryName}`;

            return getRes(url2)
                .then(country => {
                    console.log(country);

                    this.currentCountry = new CountryDetails(
                        country[0].name.common,
                        country[0].capital && country[0].capital[0],
                        country[0].flags.png,
                        country[0].region,
                        country[0].timezones[0],
                        country[0].currencies,
                        country[0].area,
                        country[0].population
                    );

                    return country[0];

                }).catch(err => {
                    console.log(err);
                })

        }


        isValidCountry(countryName) {
            return this.allCountries.some(country => country.name === countryName); //ако името е валидно
        }


        ascendingSort() {
            this.currentUserFavoriteCountries.sort((a, b) => a.name.localeCompare(b.name))
        }

        descendingSord() {
            this.currentUserFavoriteCountries.sort((a, b) => b.name.localeCompare(a.name))
        }


    }

    return new CountriesManager();

})();