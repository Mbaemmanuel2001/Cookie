setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value; 
}

document.querySelector("#cookies-btn1").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("accepted-cookie", true, 30);
   
   
})
document.querySelector("#cookies-btn2").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("No-cookie", false, 30)
   
})

cookieMessage1 = () => {
    if(!getCookie("accepted-cookie"))
    document.querySelector("#cookies").style.display = "block";

}

cookieMessage2 = () => {
    if(!getCookie("No-cookie"))
    document.querySelector("#cookies").style.display = "block";

}
window.addEventListener("load", cookieMessage1, cookieMessage2);