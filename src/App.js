import './styles/App.css';
import Dice from './images/icon-dice.svg';
import PatternDivider from './images/pattern-divider-desktop.svg';

import { useEffect, useState } from 'react';
import { getAdvice } from './api/Api';

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    async function getRandomAdvice() {
      try {
        const adivceData = await getAdvice();
        setAdvice(adivceData.slip);
        console.log(adivceData.slip.id);
    } catch (error) {
        console.error(error);
    }
  }

  getRandomAdvice();
  }, []);


  function refreshPage() {
    window.location.reload(false);
  }

  return ( 
    <div>
      <div className="card-container">
        {/* CARD DYNAMIC STUFF */}
        <div className="advice-nr">ADVICE #{advice.id}</div>
        <div className="advice-txt">{advice.advice}</div>
        
        <div><img src={PatternDivider} alt="Pattern Divider"/></div>

        {/* DICE */}
        <div className='advice-dice' onClick={refreshPage}><img src={Dice} alt="Dice"/></div>

      </div>

      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://vikazaichuk.com">Vika Zaichuk</a>.
      </div>
    </div>
  );
}

export default App;
