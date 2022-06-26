const output = document.querySelector(".output");
console.log(output);

const url = "list.json";
let myList = [];
let localData = localStorage.getItem("myList");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  output.textContent = "Loading...";
  if (localData) {
    myList = localStorage.getItem("myList");
    maker();
  } else {
    fetch(url)
      .then((rep) => rep.json())
      .then((data) => {
        myList = data;
        maker();
        localStorage.setItem("myList", JSON.stringify(myList));
      });
  }
});

function maker() {
  output.innerHTML = "";
  console.log(typeof myList);
  myList.forEach((el, index) => {
    // console.log(el);
    makeList(el, index);
  });
}

function makeList(item, index) {
  const div = document.createElement("div");
  div.innerHTML = `${item.name}   -   #(${item.guests})`;
  output.append(div);
  if (item.status === true) {
    div.classList.add("confirmed");
  } else {
    div.classList.add("notConfirmed");
  }
  div.addEventListener("click", (e) => {
    div.classList.toggle("confirmed");
    div.classList.toggle("notConfirmed");
    if (div.classList.contains("confirmed")) {
      myList[index].status = false;
    } else {
      myList[index].status = true;
    }
  });
}
