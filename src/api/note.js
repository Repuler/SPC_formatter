class Note {
    //For note to text conversion: Have a current octave variable and compare for proper placement of the < and > symbols.
    note = 'c'; //Valid values: c, d, e, f, g, a, b, r(rest)
    sharp = false;
    length = 1; //1,2,4,8,16,32,64
    octave = 1; //Valid values: 1-6
}
  
export default Note;