export function colorFromString(str, s, l) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return 'hsl('+h+', '+s+'%, '+l+'%)';
}


export function centerTrim(str) {
  return str.length < 10 ? str : `${str.slice(0, str.length - 6)}...${str.slice(-3, str.length)}`;
}
