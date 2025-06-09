
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

interface ProductSize {
  name: string;
  available: boolean;
}

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [hoveredColor, setHoveredColor] = useState<string>('');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = {
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    description: "A comfortable and stylish cotton t-shirt perfect for everyday wear. Made from 100% organic cotton with a soft, breathable feel.",
    colors: [
      { name: 'Navy', hex: '#1e3a8a', image: '/placeholder.svg?height=500&width=500&text=Navy+T-Shirt' },
      { name: 'White', hex: '#ffffff', image: '/placeholder.svg?height=500&width=500&text=White+T-Shirt' },
      { name: 'Black', hex: '#000000', image: '/placeholder.svg?height=500&width=500&text=Black+T-Shirt' },
      { name: 'Gray', hex: '#6b7280', image: '/placeholder.svg?height=500&width=500&text=Gray+T-Shirt' },
    ] as ProductColor[],
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true },
      { name: 'XXL', available: false },
    ] as ProductSize[]
  };

  const getCurrentImage = () => {
    if (hoveredColor) {
      const hoveredColorData = product.colors.find(color => color.name === hoveredColor);
      return hoveredColorData?.image || product.colors[0].image;
    }
    if (selectedColor) {
      const selectedColorData = product.colors.find(color => color.name === selectedColor);
      return selectedColorData?.image || product.colors[0].image;
    }
    return product.colors[0].image;
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Selection Required",
        description: "Please select color and size to add product into cart.",
        variant: "destructive",
      });
      return;
    }

    const selectedColorData = product.colors.find(color => color.name === selectedColor);
    
    addToCart({
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      image: selectedColorData?.image || product.colors[0].image,
    });
  };

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Selection Required",
        description: "Please select color and size to add product into cart.",
        variant: "destructive",
      });
      return;
    }

    handleAddToCart();
    toast({
      title: "Proceeding to Checkout",
      description: "Product added to cart. Redirecting to checkout...",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square rounded-lg overflow-hidden bg-muted">
          <img
            src={getCurrentImage()}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">
            ${product.price}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        {/* Color Selection */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium">
            Color: {selectedColor && <span className="text-primary">{selectedColor}</span>}
          </h3>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color.name
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(color.name)}
                onMouseEnter={() => setHoveredColor(color.name)}
                onMouseLeave={() => setHoveredColor('')}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium">
            Size: {selectedSize && <span className="text-primary">{selectedSize}</span>}
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <Button
                key={size.name}
                variant={selectedSize === size.name ? "default" : "outline"}
                size="sm"
                disabled={!size.available}
                onClick={() => setSelectedSize(size.name)}
                className="min-w-[3rem]"
              >
                {size.name}
                {!size.available && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    Out
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button 
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
          >
            Add to Cart
          </Button>
          <Button 
            onClick={handleBuyNow}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Buy Now
          </Button>
        </div>

        {/* Product Features */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h4 className="font-medium mb-2">Product Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 100% Organic Cotton</li>
              <li>• Pre-shrunk for perfect fit</li>
              <li>• Machine washable</li>
              <li>• Eco-friendly production</li>
              <li>• Available in multiple colors</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;
