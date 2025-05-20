import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const QuizzLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="">
      <div className="mb-5 flex w-full justify-between">
        <Dialog>
          <DialogTrigger>
            <button className="bg-purple-800 rounded-2xl p-4 hover:bg-purple-700 text-white font-bold">
              <FaMapMarkedAlt className="text-xl" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Qr Code Map</DialogTitle>
              <DialogDescription>
                <Image
                  src={'/images/park-map.png'}
                  alt="QR Scanner"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
export default QuizzLayout;
