/*1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

var danasnjiDatum = new Date();
var listaDanaTjedno = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var dan = danasnjiDatum.getDay();

var sati = danasnjiDatum.getHours();
var minute = danasnjiDatum.getMinutes();
var sekunde = danasnjiDatum.getSeconds();

var sufiks = (sati > 11) ? "PM" : "AM";
if (sati > 11) sati = sati - 12;

if (sati === "0" && sufiks === "PM") {
    if (minute === 0 && sekunde === "0") {
        sati = 12;
        sufiks = "Noon";
    }
} else if (sati === "0" && sufiks === "AM") {
    if (minute === "0" && sekunde === "0") {
        sati = 12;
        sufiks = "Midnight";
    }
}

var datumIspis = document.getElementById("datumIspis");
datumIspis.innerHTML = "Today is: " + listaDanaTjedno[dan];
var vrijemeIspis = document.getElementById("vrijemeIspis");
vrijemeIspis.innerHTML = "The time is: " + sati + " " + sufiks + " : " + minute + " : " + sekunde;

/* 2. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */
var str1 = 4;
var str2 = 5;
var str3 = 7;
var s = (str1 + str2 + str3) / 2;
var p = Math.sqrt(s * (s - str1) * (s - str2) * (s - str3));

var ispisPovrsine = document.getElementById("povrsina");
ispisPovrsine.innerHTML = "Area of a triangle where lengths of sides are 5, 6, 7 is " + p;

/* 3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. */

function provjeriPrestupnu() {
    var year = parseInt(document.getElementById("godinaP").value);
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        document.getElementById("divGod").innerHTML = year + " je prestupna. ";
    } else {
        document.getElementById("divGod").innerHTML = year + " nije prestupna. ";
    }
}


/* 4. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050 */
function pronadji() {
    for (var god = 2014; god <= 2050; god++) {
        var d = new Date(god, 0, 1);
        if (d.getDay() === 0) {
            console.log('1. januar ' + god + '. godine je nedjelja. ');
        }
    }
}
pronadji();

/* 5. Write a JavaScript program to calculate days left until next Christmas */

dns = new Date();
var bozic = new Date(dns.getFullYear(), 11, 25);
if (dns.getMonth() == 11 && dns.getDate() > 25) {
    bozic.setFullYear(bozic.getFullYear() + 1);
}
var jedan_dan = 1000 * 60 * 60 * 24;
console.log(Math.ceil((bozic.getTime() - dns.getTime()) / (jedan_dan)) +
    " preostalih dana do Bozica!");

/* 6. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). */

function mul() {
    var a, b, proiz, kol;
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById("second").value);
    proiz = a * b;
    kol = a / b;
    document.getElementById("mul").innerHTML = "Proizvod: " + a + "*" + b + " = " + proiz;
    document.getElementById("div").innerHTML = "Kolicnik: " + a + "/" + b + " = " + kol;
}

/* 7. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */
function get_Fahrenheit() {
    var c = parseInt(document.getElementById('c1').value);
    var f;
    f = c / 5 * (9) + 32;
    document.getElementById("div1").innerHTML = "Fahrenheit : " + f;
}

function get_Celsius() {
    var f = parseInt(document.getElementById('f1').value);
    var c;
    c = ((f - 32) / 9) * 5;
    document.getElementById("div1").innerHTML = "Celsius : " + c;
}

/* 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.*/

function saberi() {
    var c, d, zbir;
    c = parseInt(document.getElementById("broj1").value);
    d = parseInt(document.getElementById("broj2").value);
    if (c != d) {
        zbir = c + d;
        document.getElementById("div3").innerHTML = "Zbir: " + c + " + " + d + " = " + zbir;
    } else {
        zbir = c + c + c;
        document.getElementById("div3").innerHTML = "Zbir: " + c + " + " + c + " + " + c + " = " + zbir;
    }
}

/* 9. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19 */

function vratiApsolutno() {
    var n, aps;
    n = parseInt(document.getElementById("brojA").value);
    if (n <= 19) {
        aps = 19 - n;
    } else {
        aps = (n - 19) * 3;
    }
    document.getElementById("div4").innerHTML = "Apsolutna udaljenost izmedju unesenog broja " + n + " i broja 19 je " + aps;
}

/* 10. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

function uradi() {
    var e, f, sum;
    e = parseInt(document.getElementById("br1").value);
    f = parseInt(document.getElementById("br2").value);

    if (e == 50 || f == 50 || e + f == 50) {
        return true;
    }
    return false;

}