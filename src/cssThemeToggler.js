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

}

// Set theme name to local storage
// update CSS variables based on that theme
function setChosenTheme() {

}

// Loop through properties key in chosen theme object
// apply those properties to CSS
function updateChosenTheme() {
    
}

let rootELement = document.querySelector(":root");

function getVariablesFromCSS() {
    console.log(rootELement);

    // console.log(rootELement.documentElement.style.getPropertyValue("--backgroundColour"));


        let rootStyles = getComputedStyle(rootELement);

        console.log(rootStyles.getPropertyValue("--backgroundColour"));
        
}

getVariablesFromCSS();

