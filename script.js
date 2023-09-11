console.log("Welcome to Spotify");


// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Sasha Sloan - Dancing With Your Ghost", filePath: "songs/Dancing With Your Ghost.mp3", coverPath: "covers/1.jpg"},
    {songName: "Zayn - I Don't Wanna Live Forever", filePath: "songs/I Don't Wanna Live Forever.mp3", coverPath: "covers/2.jpg"},
    {songName: "Charlie Puth - We Dont Talk Anymore", filePath: "songs/We-Dont-Talk-Anymore.mp3", coverPath: "covers/3.jpg"},
    {songName: "Trevor Daniel - Falling", filePath: "songs/Falling.mp3", coverPath: "covers/4.jpg"},
    {songName: "Arijit Singh - Rihaa", filePath: "songs/Rihaa.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tera Yaar Hoon Main", filePath: "songs/Tera Yaar Hoon Main.mp3", coverPath: "covers/6.jpg"},
    {songName: "Vishal Mishra - Teri Hogaiyaan", filePath: "songs/Teri Hogaiyaan.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jubin Nautiyal - Humnava Mere", filePath: "songs/Humnava Mere.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sachet Tandon - Bekhayali Mein Bhi", filePath: "songs/Bekhayali Mein Bhi.mp3", coverPath: "covers/9.jpg"},
    {songName: "Darshan Raval - Asal Mein", filePath: "songs/Asal Mein.mp3", coverPath: "covers/10.jpg"},
]



//Adding Song Name &Cover img to ever element
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})



// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})





const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    //It will change other songs icon to play (show play icon)
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})