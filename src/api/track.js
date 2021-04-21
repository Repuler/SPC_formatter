import Note from "./note.js";

class Loop {
    notes = []; //List of notes in this loop.
    iterations = 1; //Amount of times it loops.
}

class Track {
  loops = []; //Notes but also loops because there are loops. (Loops can't be nested so yay (regular ones at least))
  //instrument: ['Flute', 'Strings', 'Marimba', 'Bass', 'Piano'] //@0 @1 @3 @8 @9 respectiveley
  volume = 150; //0-255
  octave_start = 1; //1-6
  default_length = 4; //1,2,4,8,16,32,64 This is an optional value, if not specified, it should be -1.

  //Track data minipulation functions go here.

  constructor() {
      //Make some notes probably?
      //Might not have to because it starts out empty anyway.
  }
}

export default Track;