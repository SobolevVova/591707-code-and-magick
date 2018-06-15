'use strict';

var WIZARD_NAMES = ['Иван', 'Юлия', 'Мария', 'Кристофор'];
var WIZARD_SURNAMES = ['да Марья', 'Топольницкая', 'Мирабела', 'Вальц'];
var WIZARD_COAT_COLORS = ['rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)'];
var WIZARD_EYES_COLORS = ['green', 'yellow', 'blue', 'red'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrItem = function (arr) {
  var randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};

var wizards = [];

var renderWizard = function () {
  var wizardElement = {
    name: getRandomArrItem(WIZARD_NAMES) + ' ' + getRandomArrItem(WIZARD_SURNAMES),
    coatColor: getRandomArrItem(WIZARD_COAT_COLORS),
    eyesColor: getRandomArrItem(WIZARD_EYES_COLORS)
  };
  return wizardElement;
};

for (var i = 0; i < 4; i++) {
  wizards[i] = renderWizard();
}

for (var j = 0; j < WIZARD_NAMES.length; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;

  similarListElement.appendChild(wizardElement);
}
