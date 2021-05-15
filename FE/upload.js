document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("fk");
  var form = document.getElementById("form");
  var formData = new FormData(form);
  fetch("http://localhost:3000/api/tests", {
    method: "POST",
    body: formData,
  });
});
