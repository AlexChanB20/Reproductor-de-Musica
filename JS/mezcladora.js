// Agregando datos de las canciones
const songs = [
    { title: "Chocological", album: "Mag Mell",  duration: "4:20", albumCover: "Portadas/Portada1.jpg" },
    { title: "YUBIKIRI-GENMAN", album: "Mag Mell",  duration: "3:55", albumCover: "Portadas/Portada1.jpg" },
    { title: "Sl0t", album: "Miracle Milk",  duration: "4:50", albumCover: "Portadas/Portada2.jpg" },
    { title: "Colorful", album: "Miracle Milk",  duration: "4:02", albumCover: "Portadas/Portada2.jpg" },
    { title: "Extension of You", album: "Millenium Mother",  duration: "4:51", albumCover: "Portadas/Portada3.jpg" },
    { title: "Fossil", album: "Millenium Mother",  duration: "3:34", albumCover: "Portadas/Portada3.jpg" },
    { title: "Though Our Path May Diverge", album: "Rightfully (EP)",  duration: "3:18", albumCover: "Portadas/Portada4.jpg" },
    { title: "Petrolea", album: "Intrauterine Education",  duration: "4:21", albumCover: "Portadas/Portada5.jpg" },
    { title: "Poems of a Machine", album: "To Kill a Living Book",  duration: "4:34", albumCover: "Portadas/Portada6.jpg" },
    { title: "Flowerworks", album: "Flowerworks (Single)", duration: "3:45", albumCover: "Portadas/Portada7.jpg" },
    { title: "Bento Box Bivouac", album: "Dandelions & Bento Boxes", duration: "4:14", albumCover: "Portadas/Portada8.jpg" },
    { title: "Between Two Worlds", album: "Beetween Two Worlds (EP)", duration: "4:56", albumCover: "Portadas/Portada9.jpg" },
    { title: "Fly, My Wings", album: "Fly, My Wings (Single)", duration: "3:14", albumCover: "Portadas/Portada10.jpg" },
    { title: "Chocological (Key Ingridient)", album: "Key Ingridient", duration: "4:01", albumCover: "Portadas/Portada11.jpg" },
    { title: "DK", album: "Hue", duration: "2:25", albumCover: "Portadas/Portada14.jpg" }
];
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