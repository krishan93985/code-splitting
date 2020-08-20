import React from 'react';

function Page1({handleRouteChange}) {
  return (
    <div className="App">
        <p>
          This is Page1
        </p>
        <button onClick={() => handleRouteChange('Page2')}>Page2</button>
        <button onClick={() => handleRouteChange('Page3')}>Page3</button>
    </div>
  );
}

export default Page1;
