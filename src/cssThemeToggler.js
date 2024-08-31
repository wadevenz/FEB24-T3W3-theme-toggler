console.log("CSS Theme Toggler loaded and running!")


let rootELement = document.querySelector(":root");
let themeToggleButton = document.getElementById("themeToggle");

let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "darkgrey",
            fontColour: "white",
            "theme-100": "#4641d1"
        }
    },
    {
        name: "light",
        properties: {
            backgroundColour: "#63c4d6",
            fontColour: "black",
            "theme-100": "#87E0E0"
        }
    }
]; 



// Read theme name read in local storage
// update CSS variables based on that name
function getChosenTheme() {
    let foundTheme = localStorage.getItem("theme");
    console.log(foundTheme);
    return foundTheme;
}

// Set theme name to local storage
// update CSS variables based on that theme
function setChosenTheme(newThemeName) {
    localStorage.setItem("theme", newThemeName);
    updateCssVariables();
}

if (getChosenTheme() == null) {
    // if a theme does not exist in local storage,
    // get the system light/dark preference and apply
    const darkThemeMq = window.matchMedia("(prefers-color-cheme: dark)");
    if (darkThemeMq.matches) {
        setChosenTheme("dark");
        console.log("No theme found, apploed the dark theme");
    } else {
        setChosenTheme("light");
        console.log("No theme found, applied the dark theme");
    }
} else {
    // if a theme does exist in local storage,
    // apply that themes properties to CSS
    updateCssVariables();
}

function updateButtonText() {
    // read current theme
    if (getChosenTheme() == "dark") {
        // change button text to alternate
        themeToggleButton.innerText = "Change theme to Light";
    } else {
        themeToggleButton.innerText = "Change theme to Dark";
    }
}


function toggleTheme() {
    if (getChosenTheme() == "dark"){
        // set to light
        setChosenTheme("light");
    } else {
        // set it to dark
        setChosenTheme("dark");  
    }
}


themeToggleButton.onclick= toggleTheme;
// themeToggleButton.addEventListener("click", toggleTheme);


// Loop through properties key in chosen theme object
// apply those properties to CSS
function updateCssVariables() {
    // find the matching theme object
    let matchingTheme = themes.find(themeObject => themeObject.name == getChosenTheme());
    console.log(matchingTheme);
    // find the properties object in the matching theme object
    // for (const cssProperty of matchingTheme.properties) {
    //     console.log(cssProperty);
    // }

    // loop through al properties
    Object.keys(matchingTheme.properties).forEach(cssProperty => {
        console.log(cssProperty + ": " + matchingTheme.properties[cssProperty]);
        // apply property value to CSS variables
        rootELement.style.setProperty(`--${cssProperty}`,matchingTheme.properties[cssProperty]);
    })

    updateButtonText()
}



function getVariablesFromCSS() {
    console.log(rootELement);

    // console.log(rootELement.documentElement.style.getPropertyValue("--backgroundColour"));


        let rootStyles = getComputedStyle(rootELement);

        console.log(rootStyles.getPropertyValue("--backgroundColour"));
        
}

getVariablesFromCSS();
getChosenTheme();

