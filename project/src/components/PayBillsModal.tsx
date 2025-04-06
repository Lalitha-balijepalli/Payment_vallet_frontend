import React, { useState } from 'react';

interface PayBillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPayBill: (billType: string, billNumber: string, amount: number) => void;
}

export function PayBillsModal({ isOpen, onClose, onPayBill }: PayBillsModalProps) {
  const [billType, setBillType] = useState('electricity');
  const [billNumber, setBillNumber] = useState('');
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPayBill(billType, billNumber, Number(amount));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Pay Bills</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Bill Type</label>
            <select
              value={billType}
              onChange={(e) => setBillType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="electricity">Electricity</option>
              <option value="water">Water</option>
              <option value="gas">Gas</option>
              <option value="internet">Internet</option>
              <option value="mobile">Mobile Recharge</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bill Number</label>
            <input
              type="text"
              value={billNumber}
              onChange={(e) => setBillNumber(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="1"
              step="1"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}