// Datos de las canciones
const NombreCancion = [
    'Nine Point Eight','Chocological',
    'Unidentified Flavorful Object', 'Space Colony', 'Sl0t', 'Colorful',
    'Camelia','Lemonade','Extension of You', 'Fossil',
    'Though Our Path May Diverge',
    'Petrolea',
    'Poems of a Machine',
    'Flowerworks',
    'Bento Box Bivouac',
    'Between Two Worlds', 'Fly, My Wings',
    'Chocological (Key Ingridient)'
]
const Albumnes = [
    'Mag Mell', 'Mag Mell',
    'Miracle Milk', 'Miracle Milk', 'Miracle Milk', 'Miracle Milk',
    'Millenium Mother', 'Millenium Mother', 'Millenium Mother', 'Millenium Mother',
    'Rightfully (TV Animation Goblin Slayer OP)',
    'Intrauterine Education',
    'To Kill a Living Book - for Library of Ruina',
    'Flowerworks (Single)',
    'Dandelions & Bento Boxes',
    'Between Two Worlds (EP)', 'Fly, My Wings (Single)',
    'Key Ingridient' 
]
const Duracion = [
    '3:10', '4:20',
    '4:04', '3:13', '4:50', '4:02',
    '4:39', '3:10', '4:51', '3:34',
    '3:18',  
    '4:21',
    '4:34',
    '3:45',
    '4:14',
    '4:55', '3:14',
    '4:01',
]
const Portadas = [
    portada1.jpg, portada1.jpg,
    portada2.jpg, portada2.jpg, portada2.jpg, portada2.jpg,
    portada3.jpg, portada3.jpg, portada3.jpg, portada3.jpg,
    portada4.jpg,
    portada5.jpg,
    portada6.jpg,
    portada7.jpg,
    portada8.jpg,
    portada9.jpg, portada10.jpg,
    portada11.jpg
]

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
    { title: "Canción 1", album: "Álbum 1",  duration: "3:45", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 2", album: "Álbum 1",  duration: "4:20", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 3", album: "Álbum 2",  duration: "3:30", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 4", album: "Álbum 2",  duration: "4:00", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 5", album: "Álbum 3",  duration: "3:15", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 6", album: "Álbum 3",  duration: "3:55", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 7", album: "Álbum 4",  duration: "4:10", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 8", album: "Álbum 4",  duration: "3:20", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 9", album: "Álbum 5",  duration: "3:40", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 10", album: "Álbum 5", duration: "4:30", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 11", album: "Álbum 6", duration: "3:25", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 12", album: "Álbum 6", duration: "4:15", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 13", album: "Álbum 7", duration: "3:50", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 14", album: "Álbum 7", duration: "4:05", albumCover: "https://via.placeholder.com/200" },
    { title: "Canción 15", album: "Álbum 8", duration: "3:35", albumCover: "https://via.placeholder.com/200" }
];

const reproductor = new Reproductor(songs);
reproductor.songsList();

document.getElementById("play-pause").addEventListener("click", () => {
    reproductor.playPause();
});