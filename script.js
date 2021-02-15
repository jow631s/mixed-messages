//an object containing three arrays, each of which hold three messages
const fishingMessageParts = {
  typeOfFish: ['crappie', 'catfish', 'shad', 'bass', 'white bass'],
  weather: ['a beautiful day with bluebird skies', 'overcast skies and lots of wind',
    'it to be so cold your line guides will have ice in them'],
  method: ['drift the flats', 'anchor up and be patient', 'vertical fish brush piles']
};

//create a random number generator
const ranNum = (num) => {
  return Math.floor(Math.random() * num)
};

const fishingMessage = [];

for (let prop in fishingMessageParts) {
  if (prop === 'typeOfFish') {
    fishingMessage.push(`Might as well try to catch some ${fishingMessageParts[prop][ranNum(fishingMessageParts[prop].length)]} today.`);
  }
  if (prop === 'weather') {
    fishingMessage.push(`The forecast is calling for ${fishingMessageParts[prop][ranNum(fishingMessageParts[prop].length)]}.`);
  }
  if (prop === 'method') {
    fishingMessage.push(`So the best strategy is to ${fishingMessageParts[prop][ranNum(fishingMessageParts[prop].length)]}.`);
  }
};

let formattedMessage = fishingMessage.join('\n');

//console.log(fishingMessage);
console.log(formattedMessage);

