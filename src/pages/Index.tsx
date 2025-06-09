
import { useState } from 'react';
import ProductPage from '@/components/ProductPage';
import Header from '@/components/Header';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';

const Index = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <ProductPage />
          </main>
        </div>
      </AuthProvider>
    </CartProvider>
  );
};

export default Index;
