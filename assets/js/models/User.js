class User {

    constructor(username, password, favoriteLocations = []) {
        this.username = username;
        this.password = password;
        this.favoriteLocations = favoriteLocations;
    }


    addToFavorites(countryName) {
        if (!this.countryIsInFavorites(countryName)) { //ако локацията не е вече в любими
            this.favoriteLocations.push({
                name: countryName,
                personalMemos: "",
            });
        }
    }

    addPersonalMemo(memo, countryName) {

        let currentLocation = this.favoriteLocations.find(loc => loc.name === countryName);
        currentLocation.personalMemos = memo;


    }

    removeFromFavorites(countryName) {
        // let idxOfCountry = this.favoriteLocations.indexOf(countryName);
        let idxOfCountry = this.favoriteLocations.findIndex(country => country.name === countryName); //намира индекса на елемент, който отговяра на условието 
        this.favoriteLocations.splice(idxOfCountry, 1);
    }

    countryIsInFavorites(countryName) {
        //return this.favoriteLocations.indexOf(countryName) !== -1;
        return this.favoriteLocations.some(country => country.name === countryName);
    }


}