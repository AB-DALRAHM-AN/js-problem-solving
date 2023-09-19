// my solution
function pillars(numPill, dist, width) {
  numPill === 1
    ? console.log(0)
    : numPill === 2
    ? console.log(dist * 100)
    : console.log((numPill - 1) * (dist * 100) + (numPill - 2) * width);
}
pillars(3, 20, 40);
