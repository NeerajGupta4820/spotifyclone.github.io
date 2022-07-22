console.log("Welecome to spotify");

// Initialize the Varibles
let songindex = 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');

let songs=[
    {SongName:"Bhula dena",filePath:"songs/1.mp3", coverPath: "covers/cover1.jpg"} ,
    {SongName:"Gali Gali",filePath:"songs/2.mp3", coverPath: "covers/cover2.jpg"} ,
    {SongName:"Happy Birthday",filePath:"songs/3.mp3", coverPath: "covers/cover3.jpg"} ,
    {SongName:"Milne hai mujhe se aayi",filePath:"songs/4.mp3", coverPath: "covers/cover4.jpg"} ,
    {SongName:"Naina",filePath:"songs/5.mp3", coverPath: "covers/cover5.jpg"} ,
    {SongName:"Roke na Ruke",filePath:"songs/6.mp3", coverPath: "coverscover/6.jpg"} ,
    {SongName:"saat samunder par me",filePath:"songs/7.mp3", coverPath: "covers/cover7.jpg"} ,
    {SongName:"same beef",filePath:"songs/8.mp3", coverPath: "covers/cover8.jpg"} ,
    {SongName:"Sun raha hai na tu",filePath:"songs/9.mp3", coverPath: "covers/cover9.jpg"} ,
    {SongName:"Tum hi ho",filePath:"songs/10.mp3", coverPath: "covers/cover10.jpg"} ,
]

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        // console.log(e.target);
    makeAllPlays();
    songindex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src=`songs/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    })
})  
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex=10;
    }
     else{
        songindex-=1;
     }
     audioElement.src=`songs/${songindex}.mp3`;
     mastersongname.innerText=songs[songindex-1].SongName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
})
document.getElementById('forward').addEventListener('click',()=>{
     if(songindex>=10){
        songindex=1;
     }
     else{
        songindex+=1;
     }
     audioElement.src=`songs/${songindex}.mp3`;
     mastersongname.innerText=songs[songindex-1].SongName;
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
})