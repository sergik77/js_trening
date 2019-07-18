
function funInp() {
    var chbox;
    chbox = document.getElementById('one');
    console.log(chbox);
    if (chbox.checked) {
        alert('выбран');
    } else {
        alert('не выбран');
    }
}
// radio
function funRdi() {
    var radi = document.getElementsByName('radio');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            window.alert('Выбран ' + i + ' элемент');
        }
    }
}
//select
function funSel() {
    var sel = document.getElementById('mysel').selectedIndex;
    var options = document.getElementById('mysel').options;
    alert('Выбрана опция' + options[sel].text);
}
// renge
function funRen() {
    var rng = document.getElementById('ren');
    var p = document.getElementById('too');
    p.innerHTML = rng.value;
    var inpt = document.getElementById('inp');
    inpt.value = rng.value;
    var div = document.getElementById('red');
    div.style.width = rng.value + 'px';
}
//css generator
function funBlo() {
    var rtl = document.getElementById('rtl').value;
    var ttl = document.getElementById('ttl');
    var rtr = document.getElementById('rtr').value;
    var ttr = document.getElementById('ttr');
    var rbr = document.getElementById('rbr').value;
    var tbr = document.getElementById('tbr');
    var rbl = document.getElementById('rbl').value;
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl+'px ' + rbr+'px ' + rtl+'px ' + rtr+'px ';
}
//menu
document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
};
document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className!= 'menu-item' && target.className!= 'submenu') {
        closeMenu();
    }
};  
function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
    
}
//tabs
var tab;
var tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
};
function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tads').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};
function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove;('hide');
        tabContent[b].classList.add('show');
    }
}