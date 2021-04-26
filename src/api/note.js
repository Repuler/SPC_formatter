class Note {
    //For note to text conversion: Have a current octave variable and compare for proper placement of the < and > symbols.
    location = 1; // measured in eighth notes (for you heathens (looking at you Charlie), that's the small column in the piano roll)
        // basically, which column is it in on the piano roll
    note = 'c'; //Valid values: c, d, e, f, g, a, b, r(rest)
    sharp = false;
    length = 4; //1,2,4,8,16,32,64
    octave = 5; //Valid values: 1-6
}
  
export default Note;