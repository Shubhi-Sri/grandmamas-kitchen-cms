import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Leaf, Drumstick, CupSoda, Wine, UtensilsCrossed, Soup, Sandwich, Cake, Milk, Sparkles } from "lucide-react";
import { categories, getItemsByCategory, type MenuCategory, type MenuItem } from "@/data/menuData";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const categoryIcons: Record<MenuCategory, React.ReactNode> = {
  "Veg": <Leaf size={16} />,
  "Non-Veg": <Drumstick size={16} />,
  "Juices": <CupSoda size={16} />,
  "Mojitos": <Wine size={16} />,
  "Momos": <UtensilsCrossed size={16} />,
  "Noodles": <Soup size={16} />,
  "Pasta": <UtensilsCrossed size={16} />,
  "Sandwiches": <Sandwich size={16} />,
  "Desserts": <Cake size={16} />,
  "Shakes": <Milk size={16} />,
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 group">
    <div className="relative h-44 overflow-hidden">
      <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {item.isSpecial && (
        <span className="absolute top-3 left-3 bg-gold text-primary text-xs font-body font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Sparkles size={12} /> Today's Special
        </span>
      )}
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-heading text-base text-foreground">{item.name}</h3>
        <span className={`w-3 h-3 rounded-full shrink-0 mt-1 ${item.isVeg ? "bg-green-600" : "bg-red-600"}`} title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"} />
      </div>
      <p className="font-body text-xs text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
      <span className="font-heading text-lg text-gold">₹{item.price}</span>
    </div>
  </div>
);

const MenuPage = () => {
  const [active, setActive] = useState<MenuCategory>("Momos");
  const items = getItemsByCategory(active);
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef} className="pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm font-body text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1"><Home size={14} /> Home</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Menu</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 text-center">
        <h1 className="font-heading text-4xl md:text-5xl text-gold mb-2">Our Menu</h1>
        <p className="font-body text-primary-foreground/70">Crafted with love, served with warmth</p>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[60px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm whitespace-nowrap transition-colors duration-200 ${
                  active === cat
                    ? "bg-gold text-primary font-bold"
                    : "bg-muted text-muted-foreground hover:bg-gold/10"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu grid */}
      <section className="py-10 md:py-16 bg-linen min-h-[50vh]">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl text-foreground mb-8">{active}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => <MenuItemCard key={item.name} item={item} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
