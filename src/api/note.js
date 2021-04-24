class Note {
    //For note to text conversion: Have a current octave variable and compare for proper placement of the < and > symbols.
    note = 'c'; //Valid values: c, d, e, f, g, a, b
    octave = 5; //Valid values: 1-6
    location = 0; // measured in eighth notes (for you heathens (looking at you Charlie), that's the small column in the piano roll)
        // basically, which column is it in on the piano roll
    duration = 4; // measured in eighth notes; how long the note is
    isSharp = false; // for me until nathan finishes what he's doing
  
    //Note data minipulation functions go here.
  
    constructor() {
        //doo doo fart
    }
  }
  
  export default Note;