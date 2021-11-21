import {forwardRef, useEffect, useRef, useState} from "react";

const setPositionFixed = (e, Y) => {
  e.target.classList.add('is-fixed-tab');
}

const Main = () => {
  const [state, setState] = useState('');
  const tabRef = useRef(null);

  useEffect(() => {
    console.log(tabRef);
  }, [tabRef]);

  useEffect(() => {
    if (window.scrollY > 500) {
      window.addEventListener('scroll', (e) => setPositionFixed(tabRef, window.scrollY));
    }

    return () => window.removeEventListener('scroll', (e) => setPositionFixed(tabRef, window.scrollY));
  }, []);

  const Tab = forwardRef(() => {
    return  (
      <div>파란색 !</div>
    );
  })

  return (
    <center>
      <Tab ref={tabRef} />
      <div style={{height: 3000, width: 400, backgroundColor: '#FFFFDD'}} />
    </center>
  );
}

export default Main;
