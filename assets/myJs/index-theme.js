var totalTheme = "light";
var background_theme_light = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)fixed";
var background_theme_dark = "linear-gradient(to top, #29323c 0%, #485563 100%)fixed";
function changeThemes() {
    if (totalTheme === "dark") {
        document.documentElement.style.setProperty("--background-theme-color", background_theme_light);
        totalTheme = "light";
    } else {
        document.documentElement.style.setProperty("--background-theme-color", background_theme_dark);
        totalTheme = "dark";
    }
    console.log(totalTheme);
    console.log(document.documentElement.style.getPropertyValue("--background-theme-color"));
}
