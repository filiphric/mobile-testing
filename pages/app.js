const $ = document.querySelector.bind(document)

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  }

  function isMobile() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  if (isMobile()) {
    $('#mobile').style.display = 'block'
  } else {
    $('#desktop').style.display = 'block'
  }
  
  if (isTouchDevice()) {
    $('#touch').style.display = 'block'
  }