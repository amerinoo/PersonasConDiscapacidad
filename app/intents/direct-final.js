const { ENDING_AUDIO } = require('../data/audios-es');
const directFinalIntent = () => (conv) => conv.close(ENDING_AUDIO);

exports.directFinalIntent = directFinalIntent;
