//设置当前版本数据
var versionName = "1.8.0";
var versionCode = 108000;
var buildDate = "2023年9月16日";
//函数：获取最新版本数据
function checkUpdate() {
    var getUpdateData = new XMLHttpRequest();
    getUpdateData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            updateData = JSON.parse(this.responseText);
            processUpdate();
        }
    };
    getUpdateData.open("GET", "https://bgdroid.netlify.app/version.json", true);
    getUpdateData.send();
}