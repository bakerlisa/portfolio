// sets the background to revolve
var bckImg= [
    "banner1.jpeg",
    "banner2.jpeg",
    "banner3.jpeg"
];
var count = 0;
var bckImgLeng = bckImg.length();

setInterval(() => {
    document.querySelector("main").style.backgroundImage = `img/${bckImg[count]}`;
    
    if(count <= bckImgLeng){
        count = 0;
    }else{
        count++;
    }
}, 5000);