var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 195;
var TEXT_WIDTH = 25;
var BAR_HEIGHT = 40;
var SIZE_GAP = 120;
var barWidth = CLOUD_HEIGHT - SIZE_GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_Y + CLOUD_X, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура выпобедитель!', SIZE_GAP, BAR_HEIGHT);
  ctx.fillText('Список результатов:', SIZE_GAP, CLOUD_Y + GAP);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

for (var i = 0; i < players.length; i++) {
  ctx.fillText(players[i], CLOUD_X + GAP + ((GAP + BAR_HEIGHT) * i), CLOUD_Y + GAP + FONT_GAP );
  ctx.fillRect(CLOUD_X + GAP + ((GAP + BAR_HEIGHT) * i), GAP + TEXT_WIDTH, BAR_HEIGHT, (barWidth * times[i]) / maxTime);
 }
};
