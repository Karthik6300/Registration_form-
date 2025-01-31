let sub = document.forms; // Gets all forms on the page
console.log(sub);

if (sub.length > 0) {
  // Ensure at least one form exists
  sub[0].addEventListener("submit", (event) => {
    // Use sub[0] for the first form
    event.preventDefault();
    let form = event.target;
    console.log(form[1].value, form[0].value, form[2].value, form[3].value);
    let obj = {
      name: form[0].value,
      email: form[1].value,
      password: form[2].value,
      image: form[3].value,
    };
    localStorage.setItem("data", JSON.stringify(obj));
    let data1 = JSON.parse(localStorage.getItem("data"));
    console.log(data1);
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h3");
    // let h3 = document.createElement("h4");
    let img = document.createElement("img");
    div.style.width = "fit-content";
    div.style.padding = "10px";
    div.style.border = "2px solid black";
    div.style.backgroundColor = "linear-gradient(to right, #da70ea, #77a5f4);";
    (h1.innerHTML = data1.name),
      (h2.innerHTML = data1.email),
      img.setAttribute("src", data1.image);
    img.style.width = "fit-content";
    div.append(h1, h2, img);
    document.body.append(div);
    document.getElementById("myform").reset();
  });
} else {
  console.error("No forms found in the document.");
}
