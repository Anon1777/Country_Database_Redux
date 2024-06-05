var countries = [
    "Abkhazia",
    "Afghanistan",
    "Alabama",
    "The &Aring;land Islands",
    "Alaska",
    "Albania",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Arizona",
    "Arkansas",
    "Armenia",
    "Artsakh",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Balearic Islands",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Antarctic Territory",
    "British Indian Ocean Territory",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "California",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Canary Islands",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Chuuk",
    "Cocos Islands",
    "Colombia",
    "Colorado",
    "Comoros",
    "Connecticut",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cura&ccedil;ao",
    "Cyprus",
    "Czech Republic",
    "Delaware",
    "Democratic Republic of the Congo",
    "Denmark",
    "District of Columbia",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "England",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "Florida",
    "France",
    "French Guyana",
    "French Polynesia",
    "French Southern and Antarctic Lands",
    "Gabon",
    "Gambia",
    "Georgia (State)",
    "Georgia (Country)",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadaloupe",
    "Guam",
    "Guatemala",
    "Guinea-Bissau",
    "Guinea",
    "Guyana",
    "Haiti",
    "Hawaii",
    "Heard and McDonald Islands",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "Idaho",
    "Illinois",
    "India",
    "Indiana",
    "Indonesia",
    "Iowa",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Isle of Wight",
    "Isles of Scilly",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kansas",
    "Karakalpakstan",
    "Kazakhstan",
    "Kentucky",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Louisiana",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Maine",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Manitoba",
    "Marshall Islands",
    "Martinique",
    "Maryland",
    "Massachusetts",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Michigan",
    "Micronesia",
    "Midway Islands",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montana",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nebraska",
    "Nepal",
    "Netherlands",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New South Wales",
    "New York",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Islands",
    "North Carolina",
    "North Dakota",
    "North Korea",
    "North Macedonia",
    "Northern Cyprus",
    "Northern Ireland",
    "Norway",
    "Ohio",
    "Oklahoma",
    "Oman",
    "Oregon",
    "Orkney Islands",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Pennsylvania",
    "Peru",
    "Philippines",
    "Pitcairn Islands",
    "Pohnpei",
    "Poland",
    "Portugal",
    "Qatar",
    "Queensland",
    "Republic of Congo",
    "Republika Srpska",
    "Rhode Island",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "S&atilde;o Tom&eacute; and Principe",
    "Saudi Arabia",
    "Scotland",
    "Seborga",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Shetland Islands",
    "Sierra Leone",
    "Singapore",
    "Sint Eustatius",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "Somaliland",
    "South Africa",
    "South Carolina",
    "South Dakota",
    "South Georgia and the South Sandwich Islands",
    "South Korea",
    "South Ossetia",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Tasmania",
    "Tennessee",
    "Texas",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tristan ta Cunha",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "United States Virgin Islands",
    "Uruguay",
    "Utah",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vermont",
    "Victoria",
    "Vietnam",
    "Virginia",
    "Wake Island",
    "Wales",
    "Wallis and Futuna",
    "Washington",
    "West Virginia",
    "Western Australia",
    "Western Sahara",
    "Wisconsin",
    "Wyoming",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]


function autocomplete(inp, arr){
    var currentFocus;
    if (inp) {
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e){
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
    }
    if (inp) {
        inp.addEventListener("keydown", function(e){
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keycode == 13) {
                e.preventDefault();
                    if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });
     }
    function addActive(x){
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x){
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active")
        }
    }
    function closeAllLists(elmnt){
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function(e){
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("myInput"), countries);

function sendToFile(event){
    var myInput = getElementById("myInput").toLowerCase();
    location.assign("/Page/" + myInput.value + ".html");
}
