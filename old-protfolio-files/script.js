//Toggle Functions: ON
function toggleClass(event,name){
    event.stopPropagation;
    console.log(event.target);
    let hasClass = document.querySelector(`.${name}`);

    if(hasClass){
        hasClass.classList.add('active');
    }else{
        hasClass.classList.remove('active'); 
    }
}

setTimeout(function(){
    var allEls = document.querySelectorAll('.el');
    for(var e=0;e<allEls.length;e++){
        var el1 = allEls[e].getAttribute('data-el1');
        var el2 = allEls[e].getAttribute('data-el2');
        var elFull = el1+"@"+el2+".com";
        allEls[e].setAttribute('href', "mailto:"+elFull);
    }
}, 3000);


function tab(name){
    document.querySelector("main").classList = "";
    if(name == 'about'){
        document.querySelector("main").style.backgroundImage = "url('img/banner1.jpeg')";
    }else if(name == 'skills'){
        document.querySelector("main").style.backgroundImage = "url('img/cave02.jpeg')";
    }else if(name == 'projects'){
        document.querySelector("main").style.backgroundImage = "url('img/project01.jpg')";
    }
    document.querySelector("main").classList.add(name);
}
