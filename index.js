baseURL="http://13.233.112.16:5000/seatinfo"
function fetchData() {
fetch(baseURL).then(data => {
   // use data here
   console.log(data)
})
}
fetchData();
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }