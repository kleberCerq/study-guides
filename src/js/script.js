var formContainer = document.getElementById("form-container");

function displayForm() {
  formContainer.style.display = "flex";
}

function hideForm() {
  formContainer.style.display = "none";
}

function createGuide() {
  var guideTitle = document.getElementById("input-title").value;
  if (guideTitle) {
    var guideLink = document.createElement("a");
    guideLink.className = "guide-link";
    guideLink.href = "guides.html"
    guideLink.textContent = guideTitle;

    document.getElementById("guide-container").appendChild(guideLink);
    hideForm();
  }
}
