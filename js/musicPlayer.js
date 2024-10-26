var sounds = [
];
musicArray.forEach(music=>{
sounds.push( new Audio(`music/${music}`))
})

var currentIndex = 0;
function onended(evt) {
currentIndex = (currentIndex + 1) % sounds.length; 
sounds[currentIndex].play();
}
sounds.forEach(function(sound) {
sound.onended = onended;
});

document.addEventListener('DOMContentLoaded',()=>{
const stop_sound = document.getElementById('stop_sound');
const previous_sound = document.getElementById('previous_sound');
const next_sound = document.getElementById('next_sound');
const current_music = document.getElementById('current_music');
current_music.innerText = musicArray[0].split('.')[0];
stop_sound.addEventListener('click',()=>{
if(stop_sound.classList.contains('bi-pause-fill')){
stop_sound.classList.remove('bi-pause-fill')
stop_sound.classList.add('bi-play-fill');
sounds[currentIndex].pause(); 
}else{
stop_sound.classList.remove('bi-play-fill');
stop_sound.classList.add('bi-pause-fill')

if (sounds[currentIndex].paused) {
sounds[currentIndex].play(); 
} else {
sounds[currentIndex].play(); 
}
}
})

previous_sound.addEventListener('click', () => {
sounds[currentIndex].pause(); 
sounds[currentIndex].currentTime = 0; 


currentIndex = (currentIndex - 1 + sounds.length) % sounds.length;
current_music.innerText = musicArray[currentIndex].split('.')[0];
});

next_sound.addEventListener('click', () => {
sounds[currentIndex].pause(); 
sounds[currentIndex].currentTime = 0; 
currentIndex = (currentIndex + 1) % sounds.length;
current_music.innerText = musicArray[currentIndex].split('.')[0];
});
})