let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  const state = event.data;

  const {activeTask, secondsRemaining} = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  const now = Date.now();
  
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    // CORREÇÃO: Verifica se o timer chegou a zero
    if (countDownSeconds <= 0) {
      self.postMessage(0);
      isRunning = false;
      // Envia mensagem especial indicando que terminou
      self.postMessage({ type: 'COMPLETE' });
      return;
    }

    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};