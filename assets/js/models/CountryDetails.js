class CountryDetails extends Country {

    constructor(name, capital, flagImg, region, timezone, currencies, area, population) {
        super(name, capital, flagImg, region, timezone)
        this.currencies = currencies;
        this.area = area;
        this.population = population;
    }

}



// {
//     "name": {
//         "common": "Iceland",
//         "official": "Iceland",
//         "nativeName": {
//             "isl": {
//                 "official": "Ísland",
//                 "common": "Ísland"
//             }
//         }
//     },
//     "tld": [
//         ".is"
//     ],
//     "cca2": "IS",
//     "ccn3": "352",
//     "cca3": "ISL",
//     "cioc": "ISL",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//         "ISK": {
//             "name": "Icelandic króna",
//             "symbol": "kr"
//         }
//     },
//     "idd": {
//         "root": "+3",
//         "suffixes": [
//             "54"
//         ]
//     },
//     "capital": [
//         "Reykjavik"
//     ],
//     "altSpellings": [
//         "IS",
//         "Island",
//         "Republic of Iceland",
//         "Lýðveldið Ísland"
//     ],
//     "region": "Europe",
//     "subregion": "Northern Europe",
//     "languages": {
//         "isl": "Icelandic"
//     },
//     "latlng": [
//         65,
//         -18
//     ],
//     "landlocked": false,
//     "area": 103000,
//     "demonyms": {
//         "eng": {
//             "f": "Icelander",
//             "m": "Icelander"
//         },
//         "fra": {
//             "f": "Islandaise",
//             "m": "Islandais"
//         }
//     },
//     "flag": "🇮🇸",
//     "maps": {
//         "googleMaps": "https://goo.gl/maps/WxFWSQuc3oamNxoE6",
//         "openStreetMaps": "https://www.openstreetmap.org/relation/299133"
//     },
//     "population": 366425,
//     "gini": {
//         "2017": 26.1
//     },
//     "fifa": "ISL",
//     "car": {
//         "signs": [
//             "IS"
//         ],
//         "side": "right"
//     },
//     "timezones": [
//         "UTC"
//     ],
//     "continents": [
//         "Europe"
//     ],
//     "flags": {
//         "png": "https://flagcdn.com/w320/is.png",
//         "svg": "https://flagcdn.com/is.svg"
//     },
//     "coatOfArms": {
//         "png": "https://mainfacts.com/media/images/coats_of_arms/is.png",
//         "svg": "https://mainfacts.com/media/images/coats_of_arms/is.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//         "latlng": [
//             64.15,
//             -21.95
//         ]
//     },
//     "postalCode": {
//         "format": "###",
//         "regex": "^(\\d{3})$"
//     }
// }