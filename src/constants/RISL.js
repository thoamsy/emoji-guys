// all regional indicator symbol letter

const codePointA = 0x1f1e6;

const risls = Array.from({ length: 26 }, (_, i) =>
  String.fromCodePoint(i + codePointA),
);

export default risls;
