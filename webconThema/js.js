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

function maszoomDark(x){
    x.setAttribute("class","card mt-3 shadow-lg border border-dark");
    
}
function menoszoomDark(x){
    x.setAttribute("class","card  border border-dark");
}

function maszoomDanger(x){
    x.setAttribute("class","card mt-3 shadow-lg border border-danger");
    
}
function menoszoomDanger(x){
    x.setAttribute("class","card  border border-danger");
}

function maszoomWarning(x){
    x.setAttribute("class","card mt-3 shadow-lg border border-warning");
    
}
function menoszoomWarning(x){
    x.setAttribute("class","card  border border-warning");
}

function maszoomPrimary(x){
    x.setAttribute("class","card mt-3 shadow-lg border border-primary");
    
}
function menoszoomPrimary(x){
    x.setAttribute("class","card  border border-primary");
}

function temaamarillo(){

    navth.setAttribute("class","navbar navbar-expand-sm navbar-light bg-warning fixed-top ");
    btnf1.setAttribute("class","btn btn-outline-dark my-2 my-sm-0");

    card1h.setAttribute("onmouseover","maszoomWarning(card1h)");
    card1h.setAttribute("onmouseout","menoszoomWarning(card1h)");
    card1h.setAttribute("class","card  border border-warning");
    cardTitle1.setAttribute("class","card-title text-warning");
    card2h.setAttribute("onmouseover","maszoomWarning(card2h)");
    card2h.setAttribute("onmouseout","menoszoomWarning(card2h)");
    card2h.setAttribute("class","card  border border-warning");
    cardTitle2.setAttribute("class","card-title text-warning");
    card3h.setAttribute("onmouseover","maszoomWarning(card3h)");
    card3h.setAttribute("onmouseout","menoszoomWarning(card3h)");
    card3h.setAttribute("class","card  border border-warning");
    cardTitle3.setAttribute("class","card-title text-warning");

    d3text.setAttribute("class","display-3 text-warning");
    jumbtn1.setAttribute("class","btn btn-warning btn-lg");

    acordeonHeader1.setAttribute("class","card-header bg-warning");
    acordeonBtn1.setAttribute("class","btn btn-warning collapsed");
    acordeonHeader2.setAttribute("class","card-header bg-warning");
    acordeonBtn2.setAttribute("class","btn btn-warning collapsed");
    acordeonHeader3.setAttribute("class","card-header bg-warning");
    acordeonBtn3.setAttribute("class","btn btn-warning collapsed");

    elementohidden.setAttribute("class","bg-warning");
    bt4h.setAttribute("class","hbuttonWarning list-group-item list-group-item-action ");
    bt5h.setAttribute("class","hbuttonWarning list-group-item list-group-item-action ");
    bt3h.setAttribute("class","hbuttonWarning list-group-item list-group-item-action ");
    bt2h.setAttribute("class","hbuttonWarning list-group-item list-group-item-action ");
    bt1h.setAttribute("class","hbuttonWarning list-group-item list-group-item-action ");

    footer.setAttribute("class","py-1 bg-warning text-white rounded-top");
    btnfooter.setAttribute("class","btn btn-outline-dark btn-lg ");

}

function temarojo(){

    navth.setAttribute("class","navbar navbar-expand-sm navbar-dark bg-danger fixed-top ");
    btnf1.setAttribute("class","btn btn-outline-light my-2 my-sm-0");

    card1h.setAttribute("onmouseover","maszoomDanger(card1h)");
    card1h.setAttribute("onmouseout","menoszoomDanger(card1h)");
    card1h.setAttribute("class","card  border border-danger");
    cardTitle1.setAttribute("class","card-title text-danger");
    card2h.setAttribute("onmouseover","maszoomDanger(card2h)");
    card2h.setAttribute("onmouseout","menoszoomDanger(card2h)");
    card2h.setAttribute("class","card  border border-danger");
    cardTitle2.setAttribute("class","card-title text-danger");
    card3h.setAttribute("onmouseover","maszoomDanger(card3h)");
    card3h.setAttribute("onmouseout","menoszoomDanger(card3h)");
    card3h.setAttribute("class","card  border border-danger");
    cardTitle3.setAttribute("class","card-title text-danger");

    d3text.setAttribute("class","display-3 text-danger");
    jumbtn1.setAttribute("class","btn btn-danger btn-lg");

    acordeonHeader1.setAttribute("class","card-header bg-danger");
    acordeonBtn1.setAttribute("class","btn btn-danger collapsed");
    acordeonHeader2.setAttribute("class","card-header bg-danger");
    acordeonBtn2.setAttribute("class","btn btn-danger collapsed");
    acordeonHeader3.setAttribute("class","card-header bg-danger");
    acordeonBtn3.setAttribute("class","btn btn-danger collapsed");

    elementohidden.setAttribute("class","bg-danger");
    bt4h.setAttribute("class","hbuttonDanger list-group-item list-group-item-action ");
    bt5h.setAttribute("class","hbuttonDanger list-group-item list-group-item-action ");
    bt3h.setAttribute("class","hbuttonDanger list-group-item list-group-item-action ");
    bt2h.setAttribute("class","hbuttonDanger list-group-item list-group-item-action ");
    bt1h.setAttribute("class","hbuttonDanger list-group-item list-group-item-action ");

    footer.setAttribute("class","py-1 bg-danger text-white rounded-top");
    btnfooter.setAttribute("class","btn btn-outline-light btn-lg ");

}

function temanegro(){

    navth.setAttribute("class","navbar navbar-expand-sm navbar-dark bg-dark fixed-top ");
    btnf1.setAttribute("class","btn btn-outline-light my-2 my-sm-0");

    card1h.setAttribute("onmouseover","maszoomDark(card1h)");
    card1h.setAttribute("onmouseout","menoszoomDark(card1h)");
    card1h.setAttribute("class","card  border border-dark");
    cardTitle1.setAttribute("class","card-title text-dark");
    card2h.setAttribute("onmouseover","maszoomDark(card2h)");
    card2h.setAttribute("onmouseout","menoszoomDark(card2h)");
    card2h.setAttribute("class","card  border border-dark");
    cardTitle2.setAttribute("class","card-title text-dark");
    card3h.setAttribute("onmouseover","maszoomDark(card3h)");
    card3h.setAttribute("onmouseout","menoszoomDark(card3h)");
    card3h.setAttribute("class","card  border border-dark");
    cardTitle3.setAttribute("class","card-title text-dark");

    d3text.setAttribute("class","display-3 text-dark");
    jumbtn1.setAttribute("class","btn btn-dark btn-lg");

    acordeonHeader1.setAttribute("class","card-header bg-dark");
    acordeonBtn1.setAttribute("class","btn btn-dark collapsed");
    acordeonHeader2.setAttribute("class","card-header bg-dark");
    acordeonBtn2.setAttribute("class","btn btn-dark collapsed");
    acordeonHeader3.setAttribute("class","card-header bg-dark");
    acordeonBtn3.setAttribute("class","btn btn-dark collapsed");

    elementohidden.setAttribute("class","bg-dark");
    bt4h.setAttribute("class","hbuttonDark list-group-item list-group-item-action ");
    bt5h.setAttribute("class","hbuttonDark list-group-item list-group-item-action ");
    bt3h.setAttribute("class","hbuttonDark list-group-item list-group-item-action ");
    bt2h.setAttribute("class","hbuttonDark list-group-item list-group-item-action ");
    bt1h.setAttribute("class","hbuttonDark list-group-item list-group-item-action ");

    footer.setAttribute("class","py-1 bg-dark text-white rounded-top");
    btnfooter.setAttribute("class","btn btn-outline-light btn-lg ");

}

function temaazul(){

    navth.setAttribute("class","navbar navbar-expand-sm navbar-dark bg-primary fixed-top ");
    btnf1.setAttribute("class","btn btn-outline-light my-2 my-sm-0");

    card1h.setAttribute("onmouseover","maszoomPrimary(card1h)");
    card1h.setAttribute("onmouseout","menoszoomPrimary(card1h)");
    card1h.setAttribute("class","card  border border-primary");
    cardTitle1.setAttribute("class","card-title text-primary");
    card2h.setAttribute("onmouseover","maszoomPrimary(card2h)");
    card2h.setAttribute("onmouseout","menoszoomPrimary(card2h)");
    card2h.setAttribute("class","card  border border-primary");
    cardTitle2.setAttribute("class","card-title text-primary");
    card3h.setAttribute("onmouseover","maszoomPrimary(card3h)");
    card3h.setAttribute("onmouseout","menoszoomPrimary(card3h)");
    card3h.setAttribute("class","card  border border-primary");
    cardTitle3.setAttribute("class","card-title text-primary");

    d3text.setAttribute("class","display-3 text-primary");
    jumbtn1.setAttribute("class","btn btn-primary btn-lg");

    acordeonHeader1.setAttribute("class","card-header bg-primary");
    acordeonBtn1.setAttribute("class","btn btn-primary collapsed");
    acordeonHeader2.setAttribute("class","card-header bg-primary");
    acordeonBtn2.setAttribute("class","btn btn-primary collapsed");
    acordeonHeader3.setAttribute("class","card-header bg-primary");
    acordeonBtn3.setAttribute("class","btn btn-primary collapsed");

    elementohidden.setAttribute("class","bg-primary");
    bt4h.setAttribute("class","hbuttonPrimary list-group-item list-group-item-action ");
    bt5h.setAttribute("class","hbuttonPrimary list-group-item list-group-item-action ");
    bt3h.setAttribute("class","hbuttonPrimary list-group-item list-group-item-action ");
    bt2h.setAttribute("class","hbuttonPrimary list-group-item list-group-item-action ");
    bt1h.setAttribute("class","hbuttonPrimary list-group-item list-group-item-action ");

    footer.setAttribute("class","py-1 bg-primary text-white rounded-top");
    btnfooter.setAttribute("class","btn btn-outline-light btn-lg ");

}



