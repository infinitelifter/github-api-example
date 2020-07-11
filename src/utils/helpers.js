export function isOdd(n) {
  return Math.abs(n % 2) === 1;
}

export function arraysAreEqual(ary1, ary2) {
  return (
    ary1.sort((a, b) => a.id - b.id).join("") ===
    ary2.sort((a, b) => a.id - b.id).join("")
  );
}
