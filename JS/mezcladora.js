// Construyendo Clase para reproducir las canciones
class Reproductor {
    constructor(songs) {
        this.songs = songs;
        this.enReproduccion = false;
        this.ahoraSuena = 0;
        this.showSongInSite();
    }

    playPause() {
        this.enReproduccion = !this.enReproduccion;
        if (this.enReproduccion) {
            console.log("Ahora escuchas: " + this.songs[this.ahoraSuena].title);
        } else {
            console.log("Pausaste la playlist");
        }
        this.showSongInSite();
    }

    shuffle() {
        this.ahoraSuena = Math.floor(Math.random() * this.songs.length);
        this.showSongInSite();
    }

    next() {
        if (this.ahoraSuena < this.songs.length - 1) {
            this.ahoraSuena++;
        }
        this.showSongInSite();
    }

    prev() {
        if (this.ahoraSuena > 0) {
            this.ahoraSuena--;
        }
        this.showSongInSite();
    }

    stop() {
        console.log("Playlist Detenida");
        this.ahoraSuena = -1;
        this.showSongInSite();
    }

    play(song) {
        if (typeof song === "number") {
            this.ahoraSuena = song;
        } else if (typeof song === "string") {
            this.ahoraSuena = this.songs.findIndex(s => s.title === song);
        }
        this.showSongInSite();
    }

    songsList() {
        const songsList = document.getElementById("songs-list");
        songsList.innerHTML = "";
        this.songs.forEach((song, index) => {
            const li = document.createElement("li");
            li.textContent = song.title;
            li.addEventListener("click", () => {
                this.play(index);
            });
            songsList.appendChild(li);
        });
    }

    showSongInSite() {
        const albumCover = document.getElementById("Portada");
        const songTitle = document.getElementById("Título");
        const album = document.getElementById("Album");
        const duration = document.getElementById("Duración");

        if (this.ahoraSuena !== -1) {
            const song = this.songs[this.ahoraSuena];
            albumCover.src = song.albumCover;
            songTitle.textContent = song.title;
            album.textContent = "Álbum: " + song.album;
            duration.textContent = "Duración: " + song.duration;
        } else {
            albumCover.src = "";
            songTitle.textContent = "";
            album.textContent = "";
            artist.textContent = "";
            duration.textContent = "";
        }
    }
}

const songs = [
    { title: "Chocological", album: "Mag Mell",  duration: "4:20", albumCover: "Portada1.jpg/200" },
    { title: "YUBIKIRI-GENMAN", album: "Mag Mell",  duration: "3:55", albumCover: "Portada1.jpg/200" },
    { title: "Sl0t", album: "Miracle Milk",  duration: "4:50", albumCover: "Portada2.jpg/200" },
    { title: "Colorful", album: "Miracle Milk",  duration: "4:02", albumCover: "Portada2.jpg/200" },
    { title: "Extension of You", album: "Millenium Mother",  duration: "4:51", albumCover: "Portada3.jpg/200" },
    { title: "Fossil", album: "Millenium Mother",  duration: "3:34", albumCover: "Portada3.jpg/200" },
    { title: "Though Our Path May Diverge", album: "Rightfully (EP)",  duration: "3:18", albumCover: "Portada4.jpg/200" },
    { title: "Petrolea", album: "Intrauterine Education",  duration: "4:21", albumCover: "Portada5.jpg/200" },
    { title: "Poems of a Machine", album: "To Kill a Living Book",  duration: "4:34", albumCover: "Portada6.jpg/200" },
    { title: "Flowerworks", album: "Flowerworks (Single)", duration: "3:45", albumCover: "Portada7.jpg/200" },
    { title: "Bento Box Bivouac", album: "Dandelions & Bento Boxes", duration: "4:14", albumCover: "Portada8.jpg/200" },
    { title: "Between Two Worlds", album: "Beetween Two Worlds (EP)", duration: "4:56", albumCover: "Portada9.jpg/200" },
    { title: "Fly, My Wings", album: "Fly, My Wings (Single)", duration: "3:14", albumCover: "Portada10.jpg/200" },
    { title: "Chocological (Key Ingridient)", album: "Key Ingridient", duration: "4:01", albumCover: "Portada11.jpg/200" },
    { title: "DK", album: "Hue", duration: "2:25", albumCover: "Portada14.jpg/200" }
];

const reproductor = new Reproductor(songs);
reproductor.songsList();

document.getElementById("play-pause").addEventListener("click", () => {
    reproductor.playPause();
});

document.getElementById("stop").addEventListener("click", () => {
    reproductor.stop();
});

document.getElementById("shuffle").addEventListener("click", () => {
    reproductor.shuffle();
});

document.getElementById("prev").addEventListener("click", () => {
    reproductor.prev();
});

document.getElementById("next").addEventListener("click", () => {
    reproductor.next();
});