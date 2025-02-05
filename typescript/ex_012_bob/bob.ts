const answers: string[] = [
  'Fine. Be that way!',
  'Whatever.',
  'Whoa, chill out!',
  'Sure.',
  'Calm down, I know what I\'m doing!'
];

export function hey(message: string): string {
  message = message.trim();
  const isSomething: boolean = message.length > 0;
  const isUpper: boolean = /[A-Z]{1}/.test(message) && !(/[a-z]{1}/.test(message));
  const isQuestion: boolean = message.endsWith('?');
  return answers[Number(isSomething) + Number(isUpper) + Number(isQuestion) * 2];
}