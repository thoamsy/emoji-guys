export const getSequenceEmoji = (startCodePoint, length) =>
  Array.from({ length }, (_, i) => String.fromCodePoint(i + startCodePoint));

export const getCombineSequenceEmoji = (startCodePoint, length, combine) =>
  Array.from({ length }, (_, i) =>
    [startCodePoint + i].concat(combine),
  ).map(code => String.fromCharCode(...code));
