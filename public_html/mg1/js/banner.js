(function () {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');
  const spinner = document.getElementById('spinner');

  if (!loader || !mainContent || !spinner) {
    console.error('Loader script: missing #loader, #main-content or #spinner element.');
    return;
  }

  const fadeDuration = 1.0; // seconds for CSS transition
  const startFadeBeforeEnd = 1.0;

  let fadeScheduled = false;

  function reset() {
    loader.classList.remove('fade-out');
    mainContent.classList.remove('visible');

    // Lock loader height to prevent jumpiness
    const lockedHeight = window.innerHeight;
    loader.style.height = `${lockedHeight}px`;
    loader.style.minHeight = `${lockedHeight}px`;

    try {
      spinner.pause();
      spinner.currentTime = 0;
    } catch (e) {}

    fadeScheduled = false;
  }

  function scheduleFade() {
    if (fadeScheduled) return;
    const duration = spinner.duration;
    if (!duration || !isFinite(duration)) return;

    const startAt = Math.max(0, duration - startFadeBeforeEnd);
    const now = spinner.currentTime || 0;
    const waitMs = Math.max(0, (startAt - now) * 1000);

    fadeScheduled = true;
    setTimeout(beginFade, waitMs);
  }

  function beginFade() {
    loader.classList.add('fade-out');
    mainContent.classList.add('visible');
  }

  function onTimeUpdate() {
    if (fadeScheduled) return;
    if (spinner.duration && spinner.currentTime >= spinner.duration - startFadeBeforeEnd - 0.05) {
      scheduleFade();
    }
  }

  function onEnded() {
    if (!fadeScheduled) beginFade();
  }

  window.addEventListener('load', () => {
    reset();

    spinner.muted = true;
    const playPromise = spinner.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(err => {
        console.warn('Autoplay blocked; waiting for user interaction.', err);
        const startOnUser = () => {
          spinner.play().catch(e => console.error('Play after interaction failed:', e));
          document.removeEventListener('click', startOnUser);
          document.removeEventListener('keydown', startOnUser);
        };
        document.addEventListener('click', startOnUser);
        document.addEventListener('keydown', startOnUser);
      });
    }

    if (!isNaN(spinner.duration) && isFinite(spinner.duration) && spinner.duration > 0) {
      scheduleFade();
    } else {
      spinner.addEventListener('loadedmetadata', scheduleFade, { once: true });
    }

    spinner.addEventListener('timeupdate', onTimeUpdate);
    spinner.addEventListener('ended', onEnded);
  });
})();
