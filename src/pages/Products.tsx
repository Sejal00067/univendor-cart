
import ProductPage from '@/components/ProductPage';

const Products = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our carefully curated collection of premium clothing and accessories
        </p>
      </div>
      <ProductPage />
    </div>
  );
};

export default Products;
