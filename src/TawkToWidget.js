import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const tawk = document.createElement("script");
    tawk.async = true;
    tawk.src = "https://embed.tawk.to/6864d898988cbd190bbeb195/1iv4us4vq";
    tawk.charset = "UTF-8";
    tawk.setAttribute("crossorigin", "*");

    document.body.appendChild(tawk);

    // Cleanup if needed
    return () => {
      document.body.removeChild(tawk);
    };
  }, []);

  return null; // This component does not render visible elements
};

export default TawkToWidget;
