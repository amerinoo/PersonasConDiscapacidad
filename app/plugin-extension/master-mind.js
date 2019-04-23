const numeralize = x =>
  x.replace(/\buno\b/g, '1')
    .replace(/\bdos\b/g, '2')
    .replace(/\btres\b/g, '3')
    .replace(/\bcuatro\b/g, '4')
    .replace(/\bcinco\b/g, '5')
    .replace(/\bseis\b/g, '6')
    .replace(/\bsiete\b/g, '7')
    .replace(/\bocho\b/g, '8')
    .replace(/\bnueve\b/g, '9')
    .replace(/\bcero\b/g, '0')
    .replace(/\D/g, '');

const shuffle = array => array
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);
const randomNumber = () => {
  // const digits = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // return digits.pop() * 100 + digits.pop() * 10 + digits.pop();
  return 269;
};
const initializeNumber = (data) => data.mastermindNumber ? data.mastermindNumber : randomNumber();
const toString = nr => `${nr}`;
const countOk = (userAnswer, rightAnswer) => {
  return (userAnswer[0] === rightAnswer[0] ? 1 : 0)
    + (userAnswer[1] === rightAnswer[1] ? 1 : 0)
    + (userAnswer[2] === rightAnswer[2] ? 1 : 0);
};
const isEqual = (u, r) => (i, j, k) => (u[i] === r[j]) || (u[i] === r[k]);
const isWrong = (u, r) => (i, j, k) => (u[i] !== r[i] && !isEqual(u, r)(i, j, k));
const countWrongPosition = (userAnswer, rightAnswer) => {
  const digitEquals = isEqual(userAnswer, rightAnswer);
  return (digitEquals(0, 1, 2) ? 1 : 0) + (digitEquals(1, 0, 2) ? 1 : 0) + (digitEquals(2, 0, 1) ? 1 : 0);
};
const countWrong = (u, r) => {
  const isWrongDigit = isWrong(u, r);
  return (isWrongDigit(0, 1, 2) ? 1 : 0) +
    (isWrongDigit(1, 0, 2) ? 1 : 0) +
    (isWrongDigit(2, 0, 1) ? 1 : 0);
};
const getSentenceWithCountNumbers = (data, scure, userAnswer) => {
  const numOk = countOk(toString(userAnswer), toString(data.mastermindNumber));
  const numWrongPos = countWrongPosition(toString(userAnswer), toString(data.mastermindNumber));
  const numWrong = countWrong(toString(userAnswer), toString(data.mastermindNumber));
  return scure.sentences.get('master-mind-result', { verde: numOk, naranja: numWrongPos, rojo: numWrong });
};
const digitsRepeat = (answer) =>
  (answer[0] === answer[1]) || (answer[0] === answer[2]) || (answer[1] === answer[2]);
const getSentence = (data, scure, userAnswer) => {
  if (typeof userAnswer === 'undefined') return '';
  const cleanAnswer = numeralize(userAnswer);
  if (digitsRepeat(cleanAnswer)) return scure.sentences.get('master-mind-norepeat');
  return getSentenceWithCountNumbers(data, scure, cleanAnswer);
};
exports.masterMind = (data, scure, userAnswer) => {
  data.mastermindNumber = initializeNumber(data);
  return getSentence(data, scure, userAnswer);
};