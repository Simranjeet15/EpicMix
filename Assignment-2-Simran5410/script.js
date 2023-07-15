
class Music{
  constructor(Song, name, duration, thumbnail){
    this.Song=Song;
    this.name=name;
    this.duration=duration;
    this.thumbnail= thumbnail;
    
    this.song=function(){
      return `${this.Song}, ${this.name}, ${this.duration}, ${this.thumbnail}`
    }
  }
}
let Song0 = new Music('US', 'Sidhu Moosewala', '3.49 min','img/t0.jpeg');
let Song1 = new Music('Time to Pretend', 'MGMT', '2.30 min','img/t1.jpeg');
let Song2=new Music(' My Love ', 'Wazir Patar', '2.12 min','img/t2.jpeg');

const epicMix = [];
epicMix.push(Song0);
epicMix.push(Song1);
epicMix.push(Song2);
const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    
    li.innerHTML = `<div class='main'><span class='image'><img src='${song.thumbnail}'</span><span class='songname'> ${song.Song} </span><span class='name'> ${song.name}</span><span class='duration'> ${song.duration}</span></div>`
    mixList.append(li);
    console.log(song);
     li.addEventListener("click", function () {
          playMusic(song.Song);
        });
  });
};
function playMusic(song) {
      let audioFile = getAudioFile(song);
      let audio = new Audio(audioFile);
      audio.play();
    }
function getAudioFile(song) {
      if (song === 'US') {
        return 'US.mp3'; 
      } else if (song === 'Time to Pretend') {
        return 'MGMT_-_Time_to_Pretend.mp3'; 
      } else if (song === 'My Love') {
        return 'MyLovmp3'; 
      }
      return ''; 
    }