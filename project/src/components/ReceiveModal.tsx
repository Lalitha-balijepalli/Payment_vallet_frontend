import React from 'react';
import { QrCode } from 'lucide-react';

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  upiId: string;
}

export function ReceiveModal({ isOpen, onClose, upiId }: ReceiveModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Receive Money</h2>
        <div className="mb-6">
          <QrCode className="w-48 h-48 mx-auto mb-4" />
          <p className="text-gray-600">Scan QR code to pay</p>
        </div>
        <div className="mb-6">
          <p className="text-sm text-gray-600">Your UPI ID</p>
          <p className="text-lg font-medium">{upiId}</p>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}