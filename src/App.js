import './styles/App.css';
import Dice from './images/icon-dice.svg';
import PatternDivider from './images/pattern-divider-desktop.svg';

import { useEffect, useState } from 'react';
import { getAdvice } from './api/Api';

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    getAdvice()
      .then((data) => {
          setAdvice(data.slip);
      });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return ( 
    <>
      <div className="card-container">
        <div className="advice-nr">ADVICE #{advice && advice.id}</div>
        <div className="advice-txt">{advice && advice.advice}</div>
        
        <div><img src={PatternDivider} className="img-pattern" alt="Pattern Divider"/></div>

        <div className='advice-dice' onClick={refreshPage}><img src={Dice} alt="Dice"/></div>

      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://vikazaichuk.com">Vika Zaichuk</a>.
      </div>
    </>
  );
}

export default App;
