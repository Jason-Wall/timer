
const timerArr = process.argv.slice(2);
const timeIncrement = 500;

let maxDelay = 0;
for (let elem of timerArr) {
  const element = Number(elem);
    
  // Manage edge cases
  if (isNaN(element) || element < 0) continue;

  // Happy path - set delays for alarms
  let delay = element * timeIncrement;
  if (delay > maxDelay) maxDelay = delay;
  setTimeout(() => {
    process.stdout.write('x');
  }, delay);
}

setTimeout(() => {
  process.stdout.write('\n'); //carriage return
}, (maxDelay));





