'use client';

import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const QRScanner: React.FC<{
  setQRScannerVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setQRScannerVisibility }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 qr-scanner">
      <Scanner
        onScan={(result) => {
          setTimeout(() => {
            setQRScannerVisibility(false);
          }, 1000);
        }}
        allowMultiple={true}
        formats={['any']}
        classNames={{
          container: 'rounded-lg',
        }}
      />
    </div>
  );
};
export default QRScanner;
