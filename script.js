// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong','drum-bells','drum-roll', 'heartbeat', 'impact-drum', 'jungle-drum', 'tribal-drum-1','tribal-drum-2']
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const drums = ['drum-bells','drum-roll', 'heartbeat', 'impact-drum', 'jungle-drum', 'tribal-drum-1','tribal-drum-2'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs(); //first check and stop song currently playing.

        document.getElementById(sound).play();
    })

    document.getElementById('sound-buttons').appendChild(btn)
})

drums.forEach(drum => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = drum;

    btn.addEventListener('click', () => {
        stopSongs(); //first check and stop drum currently playing.

        document.getElementById(drum).play();
    })

    document.getElementById('drum-buttons').appendChild(btn)
})


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
    drums.forEach(drum => {
        const song = document.getElementById(drum)

        song.pause()
        song.currentTime = 0;
    })
}
