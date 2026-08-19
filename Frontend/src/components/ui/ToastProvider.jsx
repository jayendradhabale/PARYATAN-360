import { createContext, useContext, useState } from 'react';

const ToastContext = createContext(null);

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  function showToast(message, type = 'success') {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 3500);
  }
  return <ToastContext.Provider value={showToast}>{children}{toast && <div role="status" className={`fixed bottom-5 right-5 z-50 max-w-sm rounded-xl px-5 py-4 text-sm font-bold text-white shadow-soft ${toast.type === 'error' ? 'bg-coral' : 'bg-ink'}`}>{toast.type === 'success' ? '✓ ' : '! '}{toast.message}</div>}</ToastContext.Provider>;
}

function useToast() {
  const showToast = useContext(ToastContext);
  if (!showToast) throw new Error('useToast must be used inside ToastProvider');
  return showToast;
}

export { ToastProvider, useToast };
