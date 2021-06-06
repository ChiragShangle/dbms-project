const ScrollHandler = (ElemID) => {
  let elem = document.querySelector(ElemID);
  console.log(elem);
  elem.scrollIntoView();
};

i = 0;
                  var x = document.getElementsByClassName("added");
                    function addskill(){
                          x[i].style.display = "block";
                          i++;
                        document.getElementById("remove").style.display = "inline";
                    }
                  