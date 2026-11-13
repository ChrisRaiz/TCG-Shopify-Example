/* Runs in <head> before first paint: enables reveal animations only when supported and not reduced-motion. */
(function(){try{if("IntersectionObserver" in window && !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)){document.documentElement.classList.add("motion");}}catch(e){}})();
