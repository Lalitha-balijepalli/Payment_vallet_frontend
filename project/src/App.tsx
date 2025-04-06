import React, { useState } from 'react';
import { Wallet, Send, QrCode, Receipt } from 'lucide-react';
import { LoginModal } from './components/LoginModal';
import { SendMoneyModal } from './components/SendMoneyModal';
import { ReceiveModal } from './components/ReceiveModal';
import { PayBillsModal } from './components/PayBillsModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const [isPayBillsModalOpen, setIsPayBillsModalOpen] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log('Login attempt:', { email, password });
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleSendMoney = (amount: number, recipient: string) => {
    // TODO: Implement actual send money logic
    console.log('Send money:', { amount, recipient });
    setIsSendModalOpen(false);
  };

  const handlePayBill = (billType: string, billNumber: string, amount: number) => {
    // TODO: Implement actual bill payment logic
    console.log('Pay bill:', { billType, billNumber, amount });
    setIsPayBillsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">PayClone</span>
          </div>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isLoggedIn ? 'Profile' : 'Login'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              {isLoggedIn ? 'Your Dashboard' : 'Welcome to PayClone'}
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setIsSendModalOpen(true)}
                    className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Send className="h-6 w-6 text-blue-600 mb-1" />
                    <span className="text-blue-600 text-sm">Send Money</span>
                  </button>
                  <button
                    onClick={() => setIsReceiveModalOpen(true)}
                    className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <QrCode className="h-6 w-6 text-blue-600 mb-1" />
                    <span className="text-blue-600 text-sm">Receive</span>
                  </button>
                  <button
                    onClick={() => setIsPayBillsModalOpen(true)}
                    className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Receipt className="h-6 w-6 text-blue-600 mb-1" />
                    <span className="text-blue-600 text-sm">Pay Bills</span>
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Balance</h3>
                <p className="text-3xl font-bold">₹0.00</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
                <div className="text-center text-gray-500">
                  No recent transactions
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
      <SendMoneyModal
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
        onSend={handleSendMoney}
      />
      <ReceiveModal
        isOpen={isReceiveModalOpen}
        onClose={() => setIsReceiveModalOpen(false)}
        upiId="user@payclone"
      />
      <PayBillsModal
        isOpen={isPayBillsModalOpen}
        onClose={() => setIsPayBillsModalOpen(false)}
        onPayBill={handlePayBill}
      />
    </div>
  );
}

export default App;