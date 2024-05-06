var main_home = document.getElementById('main-logo');
var mode_d = document.getElementById('mode-d');
var mode_l = document.getElementById('mode-l');
var reg_back_home = document.getElementsByClassName('home-back');

main_home.onclick = function(){
}

mode_d.onclick = function(){
    document.body.classList.toggle('dark-mode');
    mode_d.style.display = 'none';
    mode_l.style.display = 'block';
}

mode_l.onclick = function(){
    document.body.classList.toggle('dark-mode');
    mode_d.style.display = 'block';
    mode_l.style.display = 'none';
}
reg_back_home.onclick = function(){
    location.href = "index.html";
}





