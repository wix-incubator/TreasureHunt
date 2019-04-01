export function hardWork(val) {
  let counter;
  for (let i = 0; i < 200000000; i++) {
    counter++;
  }
  return val + 1;
}
