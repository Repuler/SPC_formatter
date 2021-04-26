class Updater {
    static update(text, state) {
        var tracks = text.split("#");

        let notesExist = false;
        for(let i = 0; i < state.tracks.length; i++)
            if(state.tracks[i].notes.length !== 0)
                notesExist = true;
        
        if(!notesExist) 
            return text;
        
        //At this point there are notes.

        if(tracks.length === 1) { //Notes must be set up and tracks must be inserted.

            text = "#amk 2\n\n";
            for(let i = 0; i < state.tracks.length; i++) {
                if(state.tracks[i].notes.length !== 0) {
                    //Header
                    text += "#" + i;
                    if(i === 0) {
                        text += " w" + state.volume + " t" + state.tempo;
                    }
                    text += "\n@" + this.getInstrument(state.tracks[i].instrument) + " v" + state.tracks[i].volume + " o" + state.tracks[i].octave_start;
                    if(state.tracks[i].default_length !== -1) {
                        text += " l" + state.tracks[i].default_length;
                    }
                    text += "\n\n"
                    
                    //Notes!!!1!!
                    var currOctave = state.tracks[i].octave_start;
                    for(let n = 0; n < state.tracks[i].notes.length; n++) {
                        text += state.tracks[i].notes[n].note;
                    }
                    text += "\n\n";
                }
            }

        } else { //Update existing text
            text = ""; //rip lol

            for(let i = 0; i < tracks.length; i++) {
                let track = parseInt(tracks[i][0], 10);
                if(tracks[i].indexOf('@') !== -1) { //INSTRUMENT
                    let instrument = tracks[i][tracks[i].indexOf('@') + 1];
                    if(this.getInstrumentName(instrument) !== state.tracks[track].instrument) {
                        tracks[i] = this.setCharAt(tracks[i], tracks[i].indexOf('@') + 1, this.getInstrument(state.tracks[track].instrument));
                    }
                }
                
            }

            for(let i = 1; i < tracks.length; i++)
                text += "#"+tracks[i];
        }

        return text;
    }

    static getInstrument(instrument) {
        switch (instrument) {
            case 'Flute':
                return '0';
            case 'Strings':
                return '1';
            case 'Marimba':
                return '3';
            case 'Bass':
                return '8';
            case 'Piano':
                return '9';
            default:
                return null;
        }
    }

    static getInstrumentName(instrument){
        switch (instrument) {
            case '0':
                return 'Flute';
            case '1':
                return 'Strings';
            case '3':
                return 'Marimba';
            case '8':
                return 'Bass';
            case '9':
                return 'Piano';
            default:
                return null;
        }
    }

    static setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
}

export default Updater;