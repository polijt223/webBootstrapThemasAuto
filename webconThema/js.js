function cambiarimagen1(x){
    
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../imagenes/tw1.jpg");
    bt1h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen2(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../imagenes/tw2.jpg");
    bt2h.setAttribute("class", n+" "+h);
    bt1h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen3(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../imagenes/tw3.jpg");
    bt3h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen4(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../imagenes/tw4.jpg");
    bt4h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen5(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../imagenes/tw5.jpg");
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


    navth.setAttribute("class","navbar navbar-expand-sm navbar-dark bg-"+color+" fixed-top ");
    btnf1.setAttribute("class","btn btn-outline-light my-2 my-sm-0");

    card1h.setAttribute("onmouseover","maszoom(card1h)");
    card1h.setAttribute("onmouseout","menoszoom(card1h)");
    card1h.setAttribute("class","card  border border-"+color+"");
    cardTitle1.setAttribute("class","card-title text-"+color+"");
    card2h.setAttribute("onmouseover","maszoom(card2h)");
    card2h.setAttribute("onmouseout","menoszoom(card2h)");
    card2h.setAttribute("class","card  border border-"+color+"");
    cardTitle2.setAttribute("class","card-title text-"+color+"");
    card3h.setAttribute("onmouseover","maszoom(card3h)");
    card3h.setAttribute("onmouseout","menoszoom(card3h)");
    card3h.setAttribute("class","card  border border-"+color+"");
    cardTitle3.setAttribute("class","card-title text-"+color+"");

    d3text.setAttribute("class","display-3 text-"+color+"");
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





