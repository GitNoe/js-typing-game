dragElement(document.getElementById("peli1"));
dragElement(document.getElementById("peli2"));
dragElement(document.getElementById("peli3"));
dragElement(document.getElementById("peli4"));
dragElement(document.getElementById("peli5"));
dragElement(document.getElementById("peli6"));
dragElement(document.getElementById("peli7"));
dragElement(document.getElementById("peli8"));

function dragElement(moviesElement) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    moviesElement.onpointerdown = pointerDrag;
  
    function pointerDrag(e) {
      e.preventDefault();
      console.log(e); //output de info
      pos3 = e.clientX;
      pos4 = e.clientY;
  
      document.onpointermove = elementDrag; //cuando el ratón se mueve, el elemento también
      document.onpointerup = stopElementDrag; //cuando el ratón se suelta, el elemento se detiene
    }
  
    function elementDrag(e) {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      console.log(pos1, pos2, pos3, pos4); //output de info
  
      moviesElement.style.top = moviesElement.offsetTop - pos2 + "px";
      moviesElement.style.left = moviesElement.offsetLeft - pos1 + "px";
      //las nuevas posiciones se modifican mediante el cálculo de pixeles
    }
  
    function stopElementDrag() {
      document.onpointerup = null;
      document.onpointermove = null;
    }
  }