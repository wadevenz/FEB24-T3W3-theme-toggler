console.log("CSS Theme Toggler loaded and running!")

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
            backgroundColour: "#87E0e0",
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
}

if (getChosenTheme() == null) {

    const darkThemeMq = window.matchMedia("(prefers-color-cheme: dark)");
    if (darkThemeMq.matches) {
        setChosenTheme("dark");
        console.log("No theme found, apploed the dark theme");
    } else {
        setChosenTheme("light");
        console.log("No theme found, applied the dark theme");
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

let themeToggleButton = document.getElementById("themeToggle");
themeToggleButton.onclick= toggleTheme;
// themeToggleButton.addEventListener("click", toggleTheme);


// Loop through properties key in chosen theme object
// apply those properties to CSS
function updateCssVariables() {

}

let rootELement = document.querySelector(":root");

function getVariablesFromCSS() {
    console.log(rootELement);

    // console.log(rootELement.documentElement.style.getPropertyValue("--backgroundColour"));


        let rootStyles = getComputedStyle(rootELement);

        console.log(rootStyles.getPropertyValue("--backgroundColour"));
        
}

getVariablesFromCSS();
getChosenTheme();

