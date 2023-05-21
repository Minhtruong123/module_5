import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

function ComponentToPrint() {
  return (
    <div>
        {/* nội dung in (sử dụng useState rồi map ra) */}
    </div>
  )
}

const MyComponent = () => {
  const componentRef = useRef();

  return (
    <div>
      <h1>Xuất file PDF</h1>
      <ReactToPrint
        trigger={() => <button>In</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default MyComponent