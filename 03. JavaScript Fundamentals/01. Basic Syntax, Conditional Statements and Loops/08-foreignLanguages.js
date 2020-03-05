function showLanguage(country) {
    let language = "";
    switch (country) {
        case "England":
        case "USA":
            language = "English";
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish";
            break;
        default:
            language = "unknown";
            break;
    }
    console.log(language);
}

showLanguage("USA");
showLanguage("Germany");

/*
Task: Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: English is spoken in England and USA; Spanish is spoken in Spain, Argentina and Mexico; for the others, we should print "unknown".
*/
