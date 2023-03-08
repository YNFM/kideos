const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
  const link = container.querySelector('a');
  const iframe = container.querySelector('iframe');

  link.addEventListener('click', e => {
    e.preventDefault();

    const videoUrl = link.getAttribute('href');
    iframe.setAttribute('src', videoUrl);

    container.classList.add('active');
  });

  container.addEventListener('click', e => {
    if (e.target === container) {
      container.classList.remove('active');
      iframe.setAttribute('src', '');
    }
  });
});
