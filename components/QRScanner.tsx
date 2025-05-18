'use client';

import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { BiArrowBack } from 'react-icons/bi';
import { quizzRedirection } from '@/lib/actions';

const QRScanner: React.FC<{
  setQRScannerVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setQRScannerVisibility }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center qr-scanner">
        <div className="flex w-full mb-10 justify-start">
          <button
            onClick={() => {
              setQRScannerVisibility(false);
            }}
            className="text-white bg-gray-800 p-3 rounded-full text-xl font-bold"
          >
            <BiArrowBack className="text-4xl" />
          </button>
        </div>
        <Scanner
          onScan={(result) => {
            quizzRedirection(result[0].rawValue);
          }}
          allowMultiple={true}
          formats={['any']}
          classNames={{
            container: 'rounded-lg',
          }}
        />
      </div>
    </>
  );
};
export default QRScanner;
