
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductPage = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      rating: 4.8,
      reviews: 124,
      description: "Soft, comfortable cotton t-shirt perfect for everyday wear.",
      colors: [
        { name: "White", value: "#FFFFFF", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" },
        { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=400&fit=crop&crop=center" },
        { name: "Navy", value: "#1e3a8a", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "T-Shirts"
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 89.99,
      rating: 4.9,
      reviews: 89,
      description: "Timeless denim jacket with a modern fit.",
      colors: [
        { name: "Light Blue", value: "#87CEEB", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop&crop=center" },
        { name: "Dark Blue", value: "#191970", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center" },
        { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["S", "M", "L", "XL"],
      category: "Jackets"
    },
    {
      id: 3,
      name: "Comfortable Hoodie",
      price: 59.99,
      rating: 4.7,
      reviews: 156,
      description: "Cozy hoodie perfect for lounging or casual outings.",
      colors: [
        { name: "Gray", value: "#808080", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center" },
        { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center" },
        { name: "White", value: "#FFFFFF", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "Hoodies"
    },
    {
      id: 4,
      name: "Elegant Dress Shirt",
      price: 79.99,
      rating: 4.6,
      reviews: 98,
      description: "Professional dress shirt for business occasions.",
      colors: [
        { name: "White", value: "#FFFFFF", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center" },
        { name: "Light Blue", value: "#87CEEB", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop&crop=center" },
        { name: "Pink", value: "#FFC0CB", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["S", "M", "L", "XL"],
      category: "Shirts"
    },
    {
      id: 5,
      name: "Casual Polo Shirt",
      price: 39.99,
      rating: 4.5,
      reviews: 78,
      description: "Versatile polo shirt suitable for casual and semi-formal occasions.",
      colors: [
        { name: "Navy", value: "#1e3a8a", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop&crop=center" },
        { name: "White", value: "#FFFFFF", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" },
        { name: "Green", value: "#22c55e", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["S", "M", "L", "XL"],
      category: "Polo"
    },
    {
      id: 6,
      name: "Stylish Blazer",
      price: 129.99,
      rating: 4.8,
      reviews: 67,
      description: "Modern blazer perfect for professional and formal events.",
      colors: [
        { name: "Charcoal", value: "#36454F", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center" },
        { name: "Navy", value: "#1e3a8a", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center" },
        { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["S", "M", "L", "XL"],
      category: "Blazers"
    },
    {
      id: 7,
      name: "Vintage Sweatshirt",
      price: 49.99,
      rating: 4.4,
      reviews: 92,
      description: "Retro-style sweatshirt with a comfortable fit.",
      colors: [
        { name: "Cream", value: "#F5F5DC", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center" },
        { name: "Burgundy", value: "#800020", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center" },
        { name: "Forest Green", value: "#355E3B", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["S", "M", "L", "XL"],
      category: "Sweatshirts"
    },
    {
      id: 8,
      name: "Athletic Tank Top",
      price: 24.99,
      rating: 4.3,
      reviews: 115,
      description: "Breathable tank top ideal for workouts and active wear.",
      colors: [
        { name: "Black", value: "#000000", image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=400&fit=crop&crop=center" },
        { name: "White", value: "#FFFFFF", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" },
        { name: "Red", value: "#dc2626", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&crop=center" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Athletic"
    }
  ];

  const [selectedColors, setSelectedColors] = useState<{[key: number]: string}>({});
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});
  const [hoveredImages, setHoveredImages] = useState<{[key: number]: string}>({});

  const handleAddToCart = (product: typeof products[0]) => {
    const selectedColor = selectedColors[product.id] || product.colors[0].name;
    const selectedSize = selectedSizes[product.id] || product.sizes[0];
    const colorData = product.colors.find(c => c.name === selectedColor);
    
    addToCart({
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      image: colorData?.image || product.colors[0].image
    });
  };

  const getProductImage = (product: typeof products[0]) => {
    if (hoveredImages[product.id]) return hoveredImages[product.id];
    const selectedColor = selectedColors[product.id] || product.colors[0].name;
    const colorData = product.colors.find(c => c.name === selectedColor);
    return colorData?.image || product.colors[0].image;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="outline" className="bg-white/80">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <Badge 
                variant="secondary" 
                className="absolute top-2 left-2"
              >
                {product.category}
              </Badge>
            </div>
            
            {/* Product Details */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              
              {/* Color Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Color:</label>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColors(prev => ({...prev, [product.id]: color.name}))}
                      onMouseEnter={() => setHoveredImages(prev => ({...prev, [product.id]: color.image}))}
                      onMouseLeave={() => setHoveredImages(prev => {
                        const newState = {...prev};
                        delete newState[product.id];
                        return newState;
                      })}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        (selectedColors[product.id] || product.colors[0].name) === color.name
                          ? 'border-primary scale-110' 
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {selectedColors[product.id] || product.colors[0].name}
                </span>
              </div>
              
              {/* Size Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Size:</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSizes(prev => ({...prev, [product.id]: size}))}
                      className={`px-3 py-1 text-sm border rounded transition-colors ${
                        (selectedSizes[product.id] || product.sizes[0]) === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  size="sm"
                  className="flex-shrink-0"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductPage;
