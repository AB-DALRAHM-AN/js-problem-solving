// my solution
function century(year) {
  year % 100 === 0 ?  console.log(year / 100) :  console.log(Math.ceil(year / 100));
}

century(1900); // output 19
century(1705); // output 18
century(1601); // output 17
century(2000); // output 20

// best practice
function century(year) {
  console.log(Math.ceil(year / 100)) ;
}

century(1900); // output 19
century(1705); // output 18
century(1601); // output 17
century(2000); // output 20
