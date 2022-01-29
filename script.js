// sets the background to revolve
var bckImg= [
    "banner1.jpeg",
    "banner2.jpeg",
    "banner3.jpeg"
];
var count = 0;
var bckImgLeng = bckImg.length;

setInterval(() => {
    console.log("Hello world");
    document.querySelector("main").style.backgroundImage = `img/${bckImg[count]}`;
    
    if(count <= bckImgLeng){
        count = 0;
    }else{
        count++;
    }
}, 5000);

// Resume

//Toggle Functions: ON
function addName(name){
    let hasClass = document.querySelector(`.${name}`);

    if(hasClass){
        hasClass.classList.add('active');
    }
}
//OFF
function removeClass(name){
   let hasClass = document.querySelector(`.${name}`);

    if(hasClass){
        hasClass.classList.remove('active'); 
    }
}