var totalTheme = {
    id: 0,
    themes: ["light", "dark"]
};
eleThemes = ["--background-theme-color", "--general-theme-color", "--general-theme-grey","--general-theme-green"]
function changeThemes() {
    totalTheme.id = 1 - totalTheme.id;
    for (let i = 0; i < eleThemes.length; i++) {
        var str = "var(" + eleThemes[i] + "-" + totalTheme.themes[totalTheme.id] + ")";
        document.documentElement.style.setProperty(eleThemes[i], str);
        console.log(str);
    }
    window.getComputedStyle(document.body).getPropertyValue('transform');
}
function initThemes(theme) {
    if (theme==="light") {
        totalTheme.id = 0;
    } else {
        totalTheme.id = 1;
    }
    for (let i = 0; i < eleThemes.length; i++) {
        var str = "var(" + eleThemes[i] + "-" + theme + ")";
        document.documentElement.style.setProperty(eleThemes[i], str);
        console.log(str);
    }
    window.getComputedStyle(document.body).getPropertyValue('transform');
}