import { getCombineSequenceEmoji } from '../util';
import { VS16, VS15 } from './control';

const enclosing = 0x20e3;
const zero = 0x30;

export const keycodesText = getCombineSequenceEmoji(zero, 10, [
  VS15,
  enclosing,
]);

export const keycodesEmoji = getCombineSequenceEmoji(zero, 10, [
  VS16,
  enclosing,
]);
