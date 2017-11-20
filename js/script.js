let testIndex = 0;
let score = 0;

function createTest(testIndex) {
  changeTextByClass('condition', data[testIndex].condition);
  changeTextByClass('explanation', data[testIndex].explanation);

  let optionsWrapper = getElementByClass('options-list');
  deleteChildren(optionsWrapper);

  for (let i = 0; i < data[testIndex].options.length; i++)
    createOption(optionsWrapper, data[testIndex].options[i].text);
}

function optionsChangeAfterRightAnswer(options, rightAnswers) {
  score++;
  for (let i = 0; i < options.length; i++)
    options[i].className = (rightAnswers[i] ? "option option-right" : "option option-default");
}

function optionsChangeAfterWrongAnswer(options, rightAnswers, answerIndex) {
  for (let i = 0; i < options.length; i++) {
    options[i].className = (rightAnswers[i] ? "option option-was-right" : "option option-was-wrong");
    if (answerIndex === i) options[i].className = "option option-wrong";
  }
}

function optionsChangeAfterAnswer(rightAnswers, answerIndex) {

  reloadCollectionByClass('option');
  let options = getCollectionByClass('option');

  setProgress(((testIndex + 1) / data.length) * 100);

  if (rightAnswers[answerIndex])
    getElementByClass('btn').className = "btn btn-right";
  else
    getElementByClass('btn').className = "btn btn-wrong";

  if (rightAnswers[answerIndex])
    optionsChangeAfterRightAnswer(options, rightAnswers)
  else
    optionsChangeAfterWrongAnswer(options, rightAnswers, answerIndex);
}

function answerTest(testIndex) {
  getElementByClass('btn').className = "btn btn-disabled";

  let rightAnswers = [];
  for (let i = 0; i < data[testIndex].options.length; i++) {
    rightAnswers.push(data[testIndex].options[i].right);
  }

  let options = getCollectionByClass('option');
  for (let i = 0; i < options.length; i++) {
    options[i].onclick = function() {
      optionsChangeAfterAnswer(rightAnswers, i);
    };
  }
}

createTest(testIndex);
answerTest(testIndex);

getElementByClass('btn').onclick = function() {
  if (testIndex > (data.length - 2)) {
    deleteChildren(getElementByClass("content-box"));
    let result = document.createElement("div");
    result.className = "result";
    result.textContent = score + "/" + data.length;
    getElementByClass('content-box').appendChild(result);
  } else {
    testIndex++;
    createTest(testIndex);
    answerTest(testIndex);
  }
}
