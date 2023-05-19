import React, { useEffect } from 'react';

const GoogleSearch = ({ changeInput }) => {
  useEffect(() => {
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=d1aaf0f06807e43bf';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    const intervalId = setInterval(() => {
      const gscInput = document.querySelector('.gsc-input');
      if (gscInput) {
        console.log('gsc-input element found:', gscInput);

        gscInput.setAttribute('placeholder', '이외 알러지 입력 ex) 유당');
        console.log(
          'placeholder attribute set:',
          gscInput.getAttribute('placeholder'),
        );

        gscInput.addEventListener('input', (e) => {
          changeInput({ target: { name: 'allergy', value: e.target.value } });
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
