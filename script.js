function popup(){
  var modal = document.getElementById("myModal");
  document.getElementById('email').value='';
  modal.style.display = "block";
  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }
}
