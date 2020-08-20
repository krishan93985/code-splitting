import React from 'react';

function Page3({handleRouteChange}) {
  return (
    <div className="App">
        <p>
          This is Page3
        </p>
        <button onClick={() => handleRouteChange('Page1')}>Page1</button>
        <button onClick={() => handleRouteChange('Page2')}>Page2</button>
    </div>
  );
}

export default Page3;
