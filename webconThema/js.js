


function cambiarimagen1(x){
    
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","imagenes/tw1.jpg");
    bt1h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen2(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","imagenes/tw2.jpg");
    bt2h.setAttribute("class", n+" "+h);
    bt1h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen3(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","imagenes/tw3.jpg");
    bt3h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen4(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","imagenes/tw4.jpg");
    bt4h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen5(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","imagenes/tw5.jpg");
    bt5h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
}

function maszoom(x){
    var h = elementohidden2.getAttribute("class");
    x.setAttribute("class","card mt-3 shadow-lg border border-"+h);
    
}
function menoszoom(x){
    var h = elementohidden2.getAttribute("class");
    x.setAttribute("class","card  border border-"+h);
}

function cambiartema(texto){

    var color;
    var colorC;

    var hElemt = elementohidden.getAttribute("class");
    
    var navxlvar = document.getElementById("navthxl");
    if (isInPage(navxlvar)) {
        $("#navthxl").removeClass(hElemt);
    }

    var navsmvar = document.getElementById("navthsm");
    if (isInPage(navsmvar)) {
        $("#navthsm").removeClass(hElemt);
    }

    var navlgvar = document.getElementById("navthlg");
    if (isInPage(navlgvar)) {
        $("#navthlg").removeClass(hElemt);
    }

    var navmdvar = document.getElementById("navthmd");
    if (isInPage(navmdvar)) {
        $("#navthmd").removeClass(hElemt);
    }

    var navxsvar = document.getElementById("navthxs");
    if (isInPage(navxsvar)) {
        $("#navthxs").removeClass(hElemt);
    }


    if(texto.localeCompare("dropdowncolor1")==0){
        console.log("Warning");
        color = "warning";
        colorC = "Warning";
    }
    if(texto.localeCompare("dropdowncolor2")==0){
        console.log("Danger");
        color = "danger";
        colorC = "Danger";
    }
    if(texto.localeCompare("dropdowncolor3")==0){
        console.log("Primary");
        color = "primary";
        colorC = "Primary";
    }
    if(texto.localeCompare("dropdowncolor4")==0){
        console.log("Dark");
        color = "dark";
        colorC = "Dark";
    }

    var formCSS1 = document.getElementById("card1h");
    if (isInPage(formCSS1)) {
        card1h.setAttribute("onmouseover","maszoom(card1h)");
        card1h.setAttribute("onmouseout","menoszoom(card1h)");
        card1h.setAttribute("class","card  border border-"+color+"");
        cardTitle1.setAttribute("class","card-title text-"+color+"");
    }
    
    var formCSS2 = document.getElementById("card2h");
    if (isInPage(formCSS2)) {
        card2h.setAttribute("onmouseover","maszoom(card2h)");
        card2h.setAttribute("onmouseout","menoszoom(card2h)");
        card2h.setAttribute("class","card  border border-"+color+"");
        cardTitle2.setAttribute("class","card-title text-"+color+"");
    }

    var formCSS3 = document.getElementById("card3h");
    if (isInPage(formCSS3)) {
        card3h.setAttribute("onmouseover","maszoom(card3h)");
        card3h.setAttribute("onmouseout","menoszoom(card3h)");
        card3h.setAttribute("class","card  border border-"+color+"");
        cardTitle3.setAttribute("class","card-title text-"+color+"");

    }

    var formCSS4 = document.getElementById("card4h");
    if (isInPage(formCSS1)) {
        card4h.setAttribute("onmouseover","maszoom(card1h)");
        card4h.setAttribute("onmouseout","menoszoom(card1h)");
        card4h.setAttribute("class","card  border border-"+color+"");
        cardTitle4.setAttribute("class","card-title text-"+color+"");
    }
    
    var formCSS5 = document.getElementById("card5h");
    if (isInPage(formCSS5)) {
        card5h.setAttribute("onmouseover","maszoom(card2h)");
        card5h.setAttribute("onmouseout","menoszoom(card2h)");
        card5h.setAttribute("class","card  border border-"+color+"");
        cardTitle5.setAttribute("class","card-title text-"+color+"");
    }

    var formCSS6 = document.getElementById("card6h");
    if (isInPage(formCSS6)) {
        card6h.setAttribute("onmouseover","maszoom(card3h)");
        card6h.setAttribute("onmouseout","menoszoom(card3h)");
        card6h.setAttribute("class","card  border border-"+color+"");
        cardTitle6.setAttribute("class","card-title text-"+color+"");

    }
    
    
    
    if (color.localeCompare("dark")==0) {
        d3text.setAttribute("class","display-3 text-light");
    }
    
    jumbtn1.setAttribute("class","btn btn-"+color+" btn-lg");

    acordeonHeader1.setAttribute("class","card-header bg-"+color+"");
    acordeonBtn1.setAttribute("class","btn btn-"+color+" collapsed");
    acordeonHeader2.setAttribute("class","card-header bg-"+color+"");
    acordeonBtn2.setAttribute("class","btn btn-"+color+" collapsed");
    acordeonHeader3.setAttribute("class","card-header bg-"+color+"");
    acordeonBtn3.setAttribute("class","btn btn-"+color+" collapsed");

    elementohidden2.setAttribute("class",color);
    elementohidden.setAttribute("class","bg-"+color+"");
    bt4h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt5h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt3h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt2h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt1h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");

    footer.setAttribute("class","py-1 bg-"+color+" text-light rounded-top");
    btnfooter.setAttribute("class","btn btn-outline-light btn-lg ");

}

function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}

new WOW().init();

$(window).scroll(function(){
    var h = elementohidden.getAttribute("class");

    if ($("#navthxl").offset().top > 800) {
        $("#navthxl").addClass(h);
    } else {
        $("#navthxl").removeClass(h);
    }

    if ($("#navthlg").offset().top > 450) {
        $("#navthlg").addClass(h);
    } else {
        $("#navthlg").removeClass(h);
    }

    if ($("#navthmd").offset().top > 300) {
        $("#navthmd").addClass(h);
    } else {
        $("#navthmd").removeClass(h);
    }

    if ($("#navthsm").offset().top > 800) {
        $("#navthsm").addClass(h);
    } else {
        $("#navthsm").removeClass(h);
    }

    if ($("#navthxs").offset().top > 500) {
        $("#navthxs").addClass(h);
    } else {
        $("#navthxs").removeClass(h);
    }
});

$('.parallax-window').parallax({imageSrc: 'imagenes/tw2.jpg'});




