
import Home from './Home';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <Layout>
          <Home />
        </Layout>
      </AuthProvider>
    </CartProvider>
  );
};

export default Index;
