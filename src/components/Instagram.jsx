import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    if (window.beholdWidgets) {
    window.beholdWidgets.initialize();
    }
  }, []);

  return <figure data-behold-id="6woKiegGNe2C7WJWMyUa"></figure>;
}
