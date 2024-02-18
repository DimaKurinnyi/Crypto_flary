import React, { useState } from 'react';

import ETH from '../../../assets/ETH.svg';
import { Timer } from '../../Timer/Timer';
import { Progress } from '../Progress/Progress';
import style from './Form.module.scss';

export const Form = () => {
  const [riseValue, setRiseValue] = useState(0);

  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState('');

  
  const curs = 1000;
  const totalValue = 800000;

  const handleClick = () => {
    const progressInPercent = ((inputValue * curs) / totalValue) * 100;
    setRiseValue((prevRiseValue) => prevRiseValue + inputValue);
    setProgress((prevProgress) => prevProgress + progressInPercent);
    setInputValue('');
    
  };
  

  return (
    <div className={style.Form} id='fairLaunch'>
      <div className={style.header}>
        <div className={style.totalValue}>
          <Timer  />
        </div>
        <div className={style.balance}>
          <div className={style.borderRight}>
            <div className={style.icon}>
              <img src={ETH} alt="Eth" />
            </div>

            <div className={style.value}>{riseValue.toFixed(3)}</div>
            <p>Raised (Quantity of ETH)</p>
          </div>
          <div className={style.borderLeft}>
            <div className={style.value}>800,000</div>
            <p>Total value ($)</p>
          </div>
        </div>
      </div>
      <Progress progress={progress.toFixed(2)} />
      <div className={style.formStyle}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <p>Deposit</p>
          </div>
          <div className={style.infoRight}>
            <p>Balance: 0 ETH</p>
          </div>
        </div>
        <div className={style.input_container}>
          <input
            type="number"
            value={inputValue}
            placeholder="0"
            onChange={(e) => setInputValue(parseFloat(e.target.value))}
          />
          <p>ETH</p>
        </div>
        <div className={style.valueBlock}>
          <p onClick={() => setInputValue(1)}>1 ETH</p>
          <p onClick={() => setInputValue(3)}>3 ETH</p>
          <p onClick={() => setInputValue(5)}>5 ETH</p>
        </div>
        <div className={style.btn} onClick={handleClick}>
          <div className={style.button}>Donate</div>
        </div>
      </div>
    </div>
  );
};
