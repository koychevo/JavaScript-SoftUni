function showSongs(inputSongs) {
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let count = inputSongs[0];
    let desirableType = inputSongs[inputSongs.length-1];

    for(let i = 1; i < count + 1; i++) {
        let [typeList, name, time] = inputSongs[i].split('_');
        if(typeList === desirableType || desirableType === 'all') {
            songs.push(new Song(typeList, name, time));
        }
    }

    for(let song of songs) {
        console.log(song.name);
    }
}

showSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
showSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
showSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

/*
Task: Define a class Song, which holds the following information about songs: typeList, name and time.
You will receive the input as an array.
The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the the last element will be Type List / "all".
Print only the names of the songs which are from that Type List / All songs. 
*/
