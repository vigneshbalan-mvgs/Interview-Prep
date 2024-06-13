var minMovesToSeat = function(seats, students) {
  // Sort both the seats and students arrays
  let Sseats = seats.sort((a, b) => a - b);
  let Sstudents = students.sort((a, b) => a - b);
  
  let totalMoves = 0;
  
  // Calculate the total moves required
  for (let i = 0; i < Sseats.length; i++) {
    totalMoves += Math.abs(Sstudents[i] - Sseats[i]);
  }
  
  return totalMoves;
}

let seats = [3, 1, 5];
let students = [2, 7, 5];

console.log(minMovesToSeat(seats, students)); // Output: 5

