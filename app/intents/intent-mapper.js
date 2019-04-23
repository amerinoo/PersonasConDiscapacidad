const { keepReadingIntent } = require('./keep-reading');
const { directFinalIntent } = require('./direct-final');

const isText = (possibleTexts, conv) =>
  possibleTexts.indexOf(conv.body.queryResult.queryText) >= 0;

const intentMapper = (scure, conv, args, originalIntent) =>
  isText([ 'seethefinal' ], conv) ? directFinalIntent
    : isText(scure.data.directSentences['sigue-leyendo'], conv) ? keepReadingIntent(args)
    : originalIntent;


exports.intentMapper = intentMapper;