'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var DARK_GAP = 10;
var GAP = 50;
var BAR_HEIGHT = 40;
var barWidth = CLOUD_HEIGHT - CLOUD_Y - CLOUD_Y - GAP - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + DARK_GAP, CLOUD_Y + DARK_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseLine = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var step = -barWidth / getMaxElement(times);

  for (var j = 0; j < players.length; j++) {
    if (players[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba' + '(' + '0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_HEIGHT) * j, CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT, BAR_HEIGHT, times[j] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(parseInt(times[j], 10), CLOUD_X + GAP + ((GAP + BAR_HEIGHT) * j), CLOUD_Y + GAP + CLOUD_Y + CLOUD_Y);
    ctx.fillText(players[j], CLOUD_X + GAP + (GAP + BAR_HEIGHT) * j, CLOUD_Y + CLOUD_HEIGHT - CLOUD_Y - CLOUD_Y);
  }
};
