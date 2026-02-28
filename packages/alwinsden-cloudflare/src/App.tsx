import { useEffect } from 'react';
import Entry from './components/Entry';

function App() {
  useEffect(() => {
    const updateZoom = () => {
      const vw = window.innerWidth;
      if (vw >= 770 && vw < 1440) {
        document.documentElement.style.zoom = String(vw / 1440);
      } else {
        document.documentElement.style.zoom = '';
      }
    };
    updateZoom();
    window.addEventListener('resize', updateZoom);
    return () => window.removeEventListener('resize', updateZoom);
  }, []);

  return <Entry />;
}

export default App;
