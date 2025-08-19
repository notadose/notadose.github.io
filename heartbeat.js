/*

15BPM is dangerous,
you should see a doctor

isn't it wonderful that most people will go their entire lives with a heart that never stops beating?
the body is cruel and beautiful

strange that one part of the brain would so lead so loyal an organ
while another would shed tears at its rhythm

*/

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
