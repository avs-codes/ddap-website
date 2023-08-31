import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    try {
      const widgetJS = document.createElement('script'); 
      widgetJS.src = 'https://w.behold.so/widget.js';
      widgetJS.async = true;
      widgetJS.onload = () => {
        window.beholdWidgets.initialize();
      };
      document.head.appendChild(widgetJS)
    } catch (error) {
      console.error('Error loading or initializing the widget:', error)
    }
  }, []);

  return ( 
  <figure data-behold-id="6woKiegGNe2C7WJWMyUa"></figure>
  );
}
