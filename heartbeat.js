let cyclePeriod = 4000;
let cycleTime = 0;
let lastTime = null;

const heartbeatAnimation = (timestamp) => {
  if(!lastTime) lastTime = timestamp;

  cycleTime = (cycleTime+(timestamp-lastTime)/cyclePeriod)%1;

  document.documentElement.style.setProperty("--hb-time", cycleTime);
  lastTime = timestamp;
  requestAnimationFrame(heartbeatAnimation);
}

requestAnimationFrame(heartbeatAnimation);
