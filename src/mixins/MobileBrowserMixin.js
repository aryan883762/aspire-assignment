export default {
  methods: {
    isMobile() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
      ];

      return toMatch.some((toMatchItem) => {
        if (window.screen.width < 768 || (window.screen.height <=450 && window.screen.width <= 992)) {
          return navigator.userAgent.match(toMatchItem);
        }
        return false;
      });
    },
    isIpad() {
      const toMatch = [
        /iPad/i
      ];

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    },
    isPortraitOrientation() {
      if (Math.abs(window.orientation) === 90) {
          return false;
        } else {
          return true;
      }
    }
  },
};
