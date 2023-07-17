var totalTheme = {
    id: 0,
    themes: ["light", "dark"]
};
eleThemes = ["--background-theme-color", "--general-theme-color"]
function changeThemes() {
    totalTheme.id = 1 - totalTheme.id;
    for (let i = 0; i < eleThemes.length; i++) {
        var str = "var(" + eleThemes[i] + "-" + totalTheme.themes[totalTheme.id] + ")";
        document.documentElement.style.setProperty(eleThemes[i], str);
    }
    window.getComputedStyle(document.body).getPropertyValue('transform');
}
