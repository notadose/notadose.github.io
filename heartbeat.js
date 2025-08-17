const cycleTime = 4000;
const heartbeatAnimation = (timestamp) => {
  document.documentElement.style.setProperty("--hb-time", (timestamp%cycleTime)/cycleTime);
  // document.documentElement.style.setProperty("--hb-count", Math.floor(timestamp/cycleTime));
  document.documentElement.style.setProperty("--hb-first", (timestamp>cycleTime) ? 0 : 1);
  requestAnimationFrame(heartbeatAnimation);
}

requestAnimationFrame(heartbeatAnimation);
