const { getIntentForCommand } = require('scure-dialogflow').lib;
const { Commands } = require('scure').dsl;
const keepReadingIntent = (args) => {
  args['arg'] = 'libro';
  return getIntentForCommand(Commands.USE);
};

exports.keepReadingIntent = keepReadingIntent;