function openNav() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 400) {
    document.getElementById("drawer").style.width = windowWidth / 2 + "px";
  } else {
    document.getElementById("drawer").style.width = "100%";
  }
}

function closeNav() {
  document.getElementById("drawer").style.width = "0";
}
let profileForm=document.getElementById('profileForm');
profileForm.addEventListener('submit',function(evt){
    openModal();
    evt.preventDefault();
})
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
function closeModal(){
    modal.style.display = "none";
}

function openModal(){
    modal.style.display = "block";
}