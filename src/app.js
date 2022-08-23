import { useRef, useEffect } from 'react';

const App = () => {
  const ref = useRef();

  useEffect(() => {
    const keydownHandler = (e) => {
      if (e.key === 'Enter') {
        ref.current.focus();
      }
    };
    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  return (
    <div>
      <input type="text"></input>
      <button ref={ref}>submit</button>
    </div>
  );
};

export default App;
