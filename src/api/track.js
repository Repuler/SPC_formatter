import Note from "./note.js";

class Loop {
    notes = []; //List of notes in this loop.
    iterations = 1; //Amount of times it loops.
}

class Track {
  static MAX_TRACK_NUM = 8; // tracks are numbered 0-7
  notes = [];
  // loops = []; //Notes but also loops because there are loops. (Loops can't be nested so yay (regular ones at least))
  instrument = null //@0 @1 @3 @8 @9 respectiveley
  volume = 150; //0-255
  octave_start = 1; //1-6
  default_length = 4; //1,2,4,8,16,32,64 This is an optional value, if not specified, it should be -1.
  track_length = 4; // for UI uses only; changes the amount of measures created in the piano roll
  measure_length = 4; // also for UI uses only; it wasn't difficult to implement at all, and it organizes the piano roll a bit

  //Track data minipulation functions go here.

  constructor(id) {
    this.id = id;
      //Make some notes probably?
      //Might not have to because it starts out empty anyway.
  }

  getId = () => this.id;
}

export default Track;