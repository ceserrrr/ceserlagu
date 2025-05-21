
var lagufavorit = [
    { Judul:'Sweater Weather' ,
      Artis:'The Neighbourhood' ,
      Likes: '5M' ,
      Played: '30M',
      Audiosongs:'sweater weather.mp3',
      Images:'sweater weather.jpg'},
    { Judul:'Here With Me' ,
      Artis: 'd4vd' ,
      Likes: '9M' ,
      Played: '45M',
      Audiosongs: 'here with me.mp3',
      Images: 'here with me.jpg'},
    { Judul:'The Days' ,
      Artis: 'Chrystal' ,
      Likes: '4M' ,
      Played: '32M',
      Audiosongs: 'the days.mp3',
      Images:'the days.jpg'},
    { Judul:'Sailor Song' ,
      Artis: 'Gigi Perez' ,
      Likes: '11M' ,
      Played: '67M',
      Audiosongs:'sailor song.mp3',
      Images:'sailor song.jpg'},
    { Judul:'nuts' ,
      Artis:'Lil Peep' ,
      Likes: '15M' ,
      Played: '86M',
      Audiosongs:'nuts.mp3',
      Images:'nuts.jpg'},
];
  

var konten = document.getElementById("container");

var element = ``;

for (var n=0;n < lagufavorit.length;n++) {
    element +=     
    `<div class="lagu">
        <h4>${(n+1)+"."}</h4>
        <h2>
            ${lagufavorit[n].Judul}
        </h2>
        <small>
            <i>${lagufavorit[n].Artis}</i>
        </small>
        <img src="${lagufavorit[n].Images}" alt="">
        <div class="playpause">
            <audio id="${'myAudio' + (n)}"src="${lagufavorit[n].Audiosongs}"></audio>
            <button class="audio-button" id="${'audioButton'+ (n)}"><i class="material-icons">play_arrow</i></button>
        </div>
        <div class="bawah">
            <div class="kiri"><h3><i class="material-icons">thumb_up</i>${lagufavorit[n].Likes}</h3></div>
            <div class="kanan"><h3><i class="material-icons">visibility</i>${lagufavorit[n].Played}</h3></div>
        </div>
    </div>
    `
}
konten.innerHTML = element;
let currentAudio = null;
let currentButton = null;

for (let n = 0; n < lagufavorit.length; n++) {
  const audio = document.getElementById(`myAudio${n}`);
  const button = document.getElementById(`audioButton${n}`);

  if (!audio || !button) continue; //mencegah adanya eror saat addEventListener (akan eror jika salah satunya tidak ada)

  button.addEventListener('click', () => {
    // Jika ada audio lain yang sedang diputar, stop dulu
    if (currentAudio && currentAudio !== audio) { //Apakah lagu yang sedang diputar berbeda dengan lagu yang akan diputar
      currentAudio.pause();
      currentAudio.currentTime = 0;
      
      if (currentButton) {
        currentButton.innerHTML = `<i class="material-icons">play_arrow</i>`;
      }
    }

    // Toggle play/pause untuk audio 
    if (audio.paused) {
      audio.play();
      button.innerHTML = `<i class="material-icons">pause</i>`;
      currentAudio = audio;
      currentButton = button;
    } else {
      audio.pause();
      button.innerHTML = `<i class="material-icons">play_arrow</i>`;
      currentAudio = null;
      currentButton = null;
    }
  });
}
