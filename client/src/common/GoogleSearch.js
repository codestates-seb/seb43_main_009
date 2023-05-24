import React, { useEffect } from 'react';

const GoogleSearch = ({ changeInput, setAnimate, nextStep, onInput }) => {
  useEffect(() => {
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.src = 'https://cse.google.com/cse.js?cx=' + process.env.CX_VALUE;

    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    const intervalId = setInterval(() => {
      const gscInput = document.querySelector('input.gsc-input');
      if (gscInput) {
        console.log('gsc-input element found:', gscInput);
        gscInput.setAttribute('placeholder', '이외 알러지 입력 ex) 유당');

        //일반 입력
        gscInput.addEventListener('input', (e) => {
          changeInput({ target: { name: 'allergy', value: e.target.value } });
          onInput(e.target.value);
        });
        clearInterval(intervalId);
        gscInput.addEventListener('keydown', (e) => {
          //엔터누르면 스크롤 생기도록
          if (e.key === 'Enter') {
            changeInput({ target: { name: 'allergy', value: gscInput.value } });
            setTimeout(() => {
              document.body.classList.remove('gsc-overflow-hidden');
              setAnimate('down');
              nextStep();
            }, 1000);
            //탭누르면 값 변경
          } else if (e.key === 'Tab') {
            changeInput({ target: { name: 'allergy', value: gscInput.value } });
          }
        });
        gscInput.addEventListener('click', () => {
          changeInput({ target: { name: 'allergy', value: gscInput.value } });
          setTimeout(() => {
            document.body.classList.remove('gsc-overflow-hidden');
          }, 1000);
        });
      }
      const tbodys = document.querySelectorAll('tbody');
      if (tbodys.length > 0) {
        tbodys.forEach((result) => {
          result.addEventListener('click', () => {
            changeInput({ target: { name: 'allergy', value: gscInput.value } });
            setTimeout(() => {
              document.body.classList.remove('gsc-overflow-hidden');
            }, 1000);
          });
        });
        clearInterval(intervalId);
      }
    }, 100);
  }, []);
  return (
    <div>
      <div className="gcse-searchbox"></div>
      <div className="gcse-searchresults"></div>
    </div>
  );
};

export default GoogleSearch;
