import React from 'react';
import { Audio, CirclesWithBar, Dna } from 'react-loader-spinner';

const DnaSpinner = () => {
    return (
      <div className="flex h-screen items-center justify-center">
        <CirclesWithBar
          height="150"
          width="150"
          color="#DE2D45"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor="green"
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
};

export default DnaSpinner;