const buttonTest = document.querySelector("button");
//   console.log(buttonTest);
buttonTest.addEventListener("click", () => {
  console.log("je suis cliqué");
  // buttonTest.textContent = "cliqué";
  // document.querySelector("p").classList.add("new-class");
  // document.querySelector("p").classList.remove("p-class");
  document.querySelector("button").classList.toggle("button");
});
//  soumission du formulaire
// document.querySelector("#my-form") attention ici selecteur css
const form = document.getElementById("my-form"); // ici id direct
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  console.log({
    firstname: firstname,
    lastname: lastname,
    email: email,
    subject: subject,
    message: message,
  });
  // console.log("clicked");
  const response = await axios.post("http://localhost:3000/form", {
    firstname: firstname,
    lastname: lastname,
    email: email,
    subject: subject,
    message: message,
  });
  console.log(response.data);
});
