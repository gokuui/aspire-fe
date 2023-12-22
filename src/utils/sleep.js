// time in s
// returns a promise that resolves after given time
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

export default sleep;
