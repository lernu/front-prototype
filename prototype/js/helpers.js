
function getElementByClass(className) {
  return document.getElementsByClassName(className)[0];
}

function getCollectionByClass(className) {
  return document.getElementsByClassName(className);
}

function deleteChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function changeTextByClass(className, text) {
  let el = getElementByClass(className)
  el.textContent = text;
}

function setProgress(testIndex) {
  let percents = ((testIndex + 1) / data.length) * 100;
  console.log(percents);
  let progress = getElementByClass('progress');
  progress.className = "progress p" + percents;
}

function createOption(optionWrapper, content) {
  let newOption = document.createElement("button");
  newOption.className = "option option-clickable";
  newOption.textContent = content;
  optionWrapper.appendChild(newOption);
}

function reloadCollectionByClass(className) {
  for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
    let old_element = document.getElementsByClassName(className)[i];
    let new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
  }
}
