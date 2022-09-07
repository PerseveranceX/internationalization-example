function setLanguage() {
    //Get the languages object from the json file, and call the changeText() function
    fetch('languages.json')
        .then((response) => response.json())
        .then((languages) => changeText(languages));

    function changeText(languages) {
        let languageCode = document.getElementById("languages").value; //Get the selected language code(en, ar, etc.)
        let data = languages[languageCode]; // Get the selected language data
        document.getElementsByTagName("html")[0].style.direction = data["languageDirection"];//Set the page direction according to the language direction

        //Loop through the language data object
        for (let text in data) {
            //Check if the property of the object is not languageDirection, then set the corresponding html element's text
            if (text != "languageDirection") {
                let element = document.getElementById(text);
                element.textContent = data[text];
            }
        }
    }
}

setLanguage();