const Media = require("./Media");

// create your Music class:

class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }

    static shortestAlbum(arr) {
        let shortestAlbum = new Music();
        shortestAlbum.length = 10000000;
        for (let i = 0; i < arr.length; ++i) {
            if (arr[i].length < shortestAlbum.length) shortestAlbum = arr[i];
        }

        return shortestAlbum;
    }

}


// don't change below
module.exports = Music;
