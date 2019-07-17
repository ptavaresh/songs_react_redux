// Reducers index

const songsreducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:20'},
        { title: 'All Star', duration: '3:05'},
        { title: 'Du hast', duration: '4:15'},
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};