import Note from "./note.js";

class Parser {
    static parse(state, text) {
        var tracks = text.split("#");

        for (let i = 2; i < tracks.length; i++) {
            var track = parseInt(tracks[i][0], 10);

            if (tracks[i].indexOf('w') !== -1) { //MASTER VOLUME
                let index = tracks[i].indexOf('w') + 1;
                let num = "";
                while (tracks[i][index] >= '0' && tracks[i][index] <= '9') {
                    num += tracks[i][index];
                    index++;
                }
                state.volume = parseInt(num, 10);
            }
            if (tracks[i].indexOf('t') !== -1) { //MASTER TEMPO
                let index = tracks[i].indexOf('t') + 1;
                let num = "";
                while (tracks[i][index] >= '0' && tracks[i][index] <= '9') {
                    num += tracks[i][index];
                    index++;
                }
                state.tempo = parseInt(num, 10);
            }

            if (tracks[i].indexOf('@') !== -1) { //INSTRUMENT
                let instrument = tracks[i][tracks[i].indexOf('@') + 1];
                switch (instrument) {
                    case '0':
                        state.tracks[track].instrument = state.instruments[0];
                        break;
                    case '1':
                        state.tracks[track].instrument = state.instruments[1];
                        break;
                    case '3':
                        state.tracks[track].instrument = state.instruments[2];
                        break;
                    case '8':
                        state.tracks[track].instrument = state.instruments[3];
                        break;
                    case '9':
                        state.tracks[track].instrument = state.instruments[4];
                        break;
                    default:
                        break;
                }
            }
            if (tracks[i].indexOf('v') !== -1) { //VOLUME
                let index = tracks[i].indexOf('v') + 1;
                let num = "";
                while (tracks[i][index] >= '0' && tracks[i][index] <= '9') {
                    num += tracks[i][index];
                    index++;
                }
                state.tracks[track].volume = parseInt(num, 10);
            }
            if (tracks[i].indexOf('o') !== -1) { //OCTAVE
                let index = tracks[i].indexOf('o') + 1;
                let num = "";
                while (tracks[i][index] >= '0' && tracks[i][index] <= '9') {
                    num += tracks[i][index];
                    index++;
                }
                state.tracks[track].octave_start = parseInt(num, 10); //THIS IS IMPORTANT <-------
            }
            if (tracks[i].indexOf('l') !== -1) { //NOTE LENGTH
                let index = tracks[i].indexOf('l') + 1;
                let num = "";
                while (tracks[i][index] >= '0' && tracks[i][index] <= '9') {
                    num += tracks[i][index];
                    index++;
                }
                state.tracks[track].default_length = parseInt(num, 10); //THIS IS IMPORTANT <-------
            }

            //note time!
            var currOctave = state.tracks[track].octave_start;
            var note = -1;
            var notes = [];
            var location = 1;
            var start = tracks[i].length;
            if (tracks[i].indexOf('a') < start && tracks[i].indexOf('a') > 0) start = tracks[i].indexOf('a');
            if (tracks[i].indexOf('b') < start && tracks[i].indexOf('b') > 0) start = tracks[i].indexOf('b');
            if (tracks[i].indexOf('c') < start && tracks[i].indexOf('c') > 0) start = tracks[i].indexOf('c');
            if (tracks[i].indexOf('d') < start && tracks[i].indexOf('d') > 0) start = tracks[i].indexOf('d');
            if (tracks[i].indexOf('e') < start && tracks[i].indexOf('e') > 0) start = tracks[i].indexOf('e');
            if (tracks[i].indexOf('f') < start && tracks[i].indexOf('f') > 0) start = tracks[i].indexOf('f');
            if (tracks[i].indexOf('g') < start && tracks[i].indexOf('g') > 0) start = tracks[i].indexOf('g');
            if (tracks[i].indexOf('r') < start && tracks[i].indexOf('r') > 0) start = tracks[i].indexOf('r');
            for (let n = start; n < tracks[i].length; n++) {
                let isRest = false;
                if ("abcdefgr".indexOf(tracks[i][n]) !== -1) {
                    if (tracks[i][n] === 'r') {
                        isRest = true;
                    } else {
                        note++;
                        if (notes[note] === undefined) notes.push(new Note());
                        notes[note].note = tracks[i][n];
                        notes[note].length = 16 / state.tracks[track].default_length;
                        notes[note].octave = currOctave;
                        notes[note].location = location;
                    }
                    if (state.tracks[track].default_length !== -1) location += 16 / state.tracks[track].default_length;
                }
                if (tracks[i][n] >= '0' && tracks[i][n] <= '9') {
                    let num = "";
                    while (tracks[i][n] >= '0' && tracks[i][n] <= '9') {
                        num += tracks[i][n];
                        n++;
                    }
                    n--;
                    if (!isRest) notes[note].length = 16 / parseInt(num, 10);
                    location += 16 / parseInt(num, 10);
                }
                isRest = false;
                if (tracks[i][n] === '+') notes[note].sharp = true;
                if (tracks[i][n] === '<') currOctave--;
                if (tracks[i][n] === '>') currOctave++;
            }
            state.tracks[track].notes = notes;
        }

        return state;
    }
}

export default Parser;