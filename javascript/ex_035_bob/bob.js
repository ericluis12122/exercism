const answers = ['Fine. Be that way!', 'Whatever.', 'Whoa, chill out!', 'Sure.','Calm down, I know what I\'m doing!'];
export const hey = (message) => {
  message = message.replace(/\s/g,'');
  let isSomething = Boolean(message);
  let isUpper = /[A-Z]{1}/.test(message) && !(/[a-z]{1}/.test(message));
  let isQuestion = 2 * (message.at(-1) === '?');
  return answers[isSomething + isUpper + isQuestion];
};
