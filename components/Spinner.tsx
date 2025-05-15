import { CgSpinnerTwoAlt } from 'react-icons/cg';
import React from 'react';
const Spinner: React.FC = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <CgSpinnerTwoAlt className="animate-spin text-4xl" />
    </div>
  );
};
export default Spinner;
