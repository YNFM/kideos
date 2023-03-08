function playVideo(videoUrl) {
  var overlay = document.createElement('div');
  overlay.id = 'overlay';
  
  var iframe = document.createElement('iframe');
  iframe.src = videoUrl;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('frameborder', '0');
  
  overlay.appendChild(iframe);
  document.body.appendChild(overlay);
  
  overlay.onclick = function() {
    document.body.removeChild(overlay);
  };
}
