export const commands = (number) => {
  let binary = number.toString(2).padStart(5,0).split('').reverse().map(Number);
  const secret = ['wink','double blink','close your eyes','jump'].filter((_,i) => binary[i]);
  return binary.at(-1) ? secret.reverse() : secret;
};
