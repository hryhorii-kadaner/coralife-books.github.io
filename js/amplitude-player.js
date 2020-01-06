/*
    When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
    play the song.
*/

let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
    /*
        Ensure that on mouseover, CSS styles don't get messed up for active songs.
    */
    songElements[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = '#00A0FF';

        this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
        this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

        if( !this.classList.contains('amplitude-active-song-container') ){
            this.querySelectorAll('.play-button-container')[0].style.display = 'block';
        }
    });

    /*
        Ensure that on mouseout, CSS styles don't get messed up for active songs.
    */
    songElements[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = '#FFFFFF';
        this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
        this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
        this.querySelectorAll('.play-button-container')[0].style.display = 'none';
        this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
    });

    /*
        Show and hide the play button container on the song when the song is clicked.
    */
    songElements[i].addEventListener('click', function(){
        this.querySelectorAll('.play-button-container')[0].style.display = 'none';
    });
}

/*
    Initializes AmplitudeJS
*/
Amplitude.init({
    "songs": [
        {
            "name": "Прощение",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/1.mp3",
            "cover_art_url": "images/album.jpg"
        },
        {
            "name": "Благодарность",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/2.mp3",
            "cover_art_url": "images/album.jpg"
        },
        {
            "name": "Гармония и любовь в семье",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/3.mp3",
            "cover_art_url": "images/album.jpg"
        },
        {
            "name": "Исцеление",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/4.mp3",
            "cover_art_url": "images/album.jpg"
        },
        {
            "name": "Волшебная медитация",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/5.mp3",
            "cover_art_url": "images/album.jpg"
        },
        {
            "name": "Деньги",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/6.mp3",
            "cover_art_url": "images/album.jpg"
        },
        {
            "name": "Любовь к себе",
            "artist": "Неизвестно",
            "album": "Медитации",
            "url": "../audio/7.mp3",
            "cover_art_url": "images/album.jpg"
        }
    ],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
  waveforms: {
    sample_rate: 50
  }
});
document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';