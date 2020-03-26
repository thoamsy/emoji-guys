const getEmoji = String.fromCodePoint;

const boy = 0x1f466;
const gril = boy + 1;
const man = gril + 1;
const woman = man + 1;
const person = 0x1f471;

export const boyEmoji = getEmoji(0x1f466);
export const grilEmoji = getEmoji(gril);
export const manEmoji = getEmoji(man);
export const womanEmoji = getEmoji(woman);
export const personEmoji = getEmoji(person);
