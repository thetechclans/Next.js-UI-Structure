"use client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui-components/pagination";

const Catalog = () => {
  const foodProducts = [
    {
      id: 1,
      name: "Broasted Chicken",
      description: "Crispy golden fried chicken with special herbs and spices",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil on crispy crust",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice with tender chicken and exotic spices",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Beef Burger",
      description: "Juicy beef patty with fresh lettuce, tomato, and cheese",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Fish Curry",
      description: "Traditional spicy fish curry with coconut milk and herbs",
      price: "₹229",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Vegetable Fried Rice",
      description: "Wok-tossed rice with fresh vegetables and soy sauce",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan, croutons, and dressing",
      price: "₹129",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Chocolate Cake",
      description: "Rich, moist chocolate cake with creamy chocolate frosting",
      price: "₹89",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with lemon",
      price: "₹349",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Pasta Carbonara",
      description: "Creamy pasta with bacon, eggs, and parmesan cheese",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Food Catalog</h1>
          <p className="text-muted-foreground text-lg">Discover our delicious collection of meals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foodProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      <Pagination
        className="mt-8"
        totalPages={foodProducts.length}
        siblingCount={4}
        currentPage={1}
        onPageChange={(page) => console.log(`Page changed to: ${page}`)}        />
    </div>

  );
};

export default Catalog;
