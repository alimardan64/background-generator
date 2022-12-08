var css = document.querySelector("h3");
var color1 = document.querySelector('[name="color1"]');
var color2 = document.querySelector('[name="color2"]');
var body = document.querySelector("body");
var h4=document.querySelector("h4");
var button=document.querySelector("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerHTML = body.style.background + ";";
}

function matchingcolor() {
    a = window.getComputedStyle(body).background;
    stringslice(a);
    rgbtohex(firstelement);
    color1.value=hexString;
    rgbtohex(secondelement);
    color2.value=hexString;
    h4.innerHTML="linear-gradient(to right, " + firstelement  + ", " + secondelement + ")";
    
   
}

function stringslice (a) {
    firstindex1=a.indexOf('rgb',15);
    secondindex1=a.indexOf(')',firstindex1);
    length=secondindex1-firstindex1+1;
    firstelement=a.substr(firstindex1,length);
    firstindex2=a.indexOf('rgb',firstindex1+1);
    secondindex2=a.indexOf('))',firstindex1);
    secondelement=a.substr(firstindex2,secondindex2-firstindex2+1);
}

function rgbtohex (a) {
    var rgbString = a; // get this in whatever way.

    var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]

    delete (parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    hexString = '#' + parts.join('').toUpperCase(); // "#0070FF"

}
var rand=[];
function buttonevent () {
    for (i=0;i<6;i++)
    {
        rand[i]=Math.floor(Math.random() * 256);

    }
    firstnumber="rgb("+rand[0]+", "+rand[1]+", "+ rand[2]+")";
    rgbtohex(firstnumber);
    a=hexString;
    secondnumber="rgb("+rand[3]+", "+rand[4]+", "+ rand[5]+")";
    rgbtohex(secondnumber);
    b=hexString;
    body.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
    css.innerHTML = body.style.background + ";"
    matchingcolor();
}
matchingcolor();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", buttonevent);


