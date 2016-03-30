function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "msun";
    weekday[1] = "mmon";
    weekday[2] = "mtue";
    weekday[3] = "mwed";
    weekday[4] = "mthu";
    weekday[5] = "mfri";
    weekday[6] = "msat";
    var n = weekday[d.getDay()];
	document.getElementById( n ).className = "day";
}
window.onload=function(){
	myFunction();
}