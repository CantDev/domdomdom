document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);
  let container = document.createElement("div");
  document.body.appendChild(container);
  container.classList.add("container");
 

  button.addEventListener("click", function () {   
      let div = document.createElement("div");
    div.classList.add("boxes");
    container.appendChild(div);

    let boxes = document.querySelectorAll(".boxes");
    let boxesNumber = 1;
    boxes.forEach(function (box) {
      div.id = boxesNumber;
      boxesNumber++;
    });
    div.addEventListener("mouseover", function () {
      div.innerText = div.id;
    });
    div.addEventListener("mouseout", function () {
      div.innerText = "";
    });
    div.addEventListener("click", function () {
      const colorArray = [
        "pink",
        "red",
        "purple",
        "indigo",
        "green",
        "grey",
        "organge",
      ];
      const colors = Math.floor(Math.random() * colorArray.length);
      div.style.backgroundColor = colorArray[colors];
    });
    div.addEventListener("dblclick", function () {
      if (div.id % 2 === 0) {
        if (document.contains(div.nextSibling)) {
          div.nextSibling.remove();
        } else {
          alert("No Squares");
        }
      } else {
        if (document.contains(div.previousSibling)) {
          div.previousSibling.remove();
        } else {
          alert("No Squares");
        }
      }
    });
  });
});
