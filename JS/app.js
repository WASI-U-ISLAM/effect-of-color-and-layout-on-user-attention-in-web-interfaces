let startTime = Date.now();
let currentTemplate = "A";

function setTemplate(templateName) {
  currentTemplate = templateName;
  document.body.className = templateName;
  startTime = Date.now();
}

function enrollClick() {
  let seconds = ((Date.now() - startTime) / 1000).toFixed(2);
  alert("Reaction Time: " + seconds + " seconds\nTested on: Template " + currentTemplate);
}
