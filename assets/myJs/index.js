import "./index-theme.js"
window.onload = function () {
    // 获取用户当前时间
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    // 判断当前时间是否在白天时间段
    if (currentHour >= 6 && currentHour < 18) {
        totalTheme.id = 0;
        initThemes("light");
        console.log("白天");
    } else {
        totalTheme.id = 1;
        initThemes("dark");
        console.log("晚上");
    }
    
}