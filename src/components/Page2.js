import React from 'react';

function Page2({handleRouteChange}) {
  return (
    <div className="App">
        <p>
          This is Page2
        </p>
        <button onClick={() => handleRouteChange('Page1')}>Page1</button>
        <button onClick={() => handleRouteChange('Page3')}>Page3</button>
    </div>
  );
}

export default Page2;
