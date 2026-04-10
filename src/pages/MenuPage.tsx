import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Leaf, Drumstick, CupSoda, Wine, UtensilsCrossed, Soup, Sandwich, Cake, Milk, Sparkles, Pizza, Coffee, Egg, Info } from "lucide-react";
import { categories, getItemsByCategory, type MenuCategory, type MenuItem, type BadgeType } from "@/data/menuData";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const categoryIcons: Record<MenuCategory, React.ReactNode> = {
  "Share Plates": <UtensilsCrossed size={16} />,
  "Soups & Salads": <Soup size={16} />,
  "Shawarmas & Burgers": <Sandwich size={16} />,
  "Pizzas": <Pizza size={16} />,
  "Pastas & Risotto": <UtensilsCrossed size={16} />,
  "Wholesome Meals": <Drumstick size={16} />,
  "Eggs & Breakfast": <Egg size={16} />,
  "Shakes": <Milk size={16} />,
  "Mojitos & Coolers": <Wine size={16} />,
  "Coffee & Tea": <Coffee size={16} />,
  "Desserts": <Cake size={16} />,
  "Jain Menu": <Leaf size={16} />,
};

const badgeStyles: Record<BadgeType, string> = {
  "bestseller": "bg-gold text-primary",
  "must-try": "bg-green-600 text-cream",
  "signature": "bg-[#722F37] text-cream",
  "seasonal": "bg-[#5BA4CF] text-cream",
};

const badgeLabels: Record<BadgeType, string> = {
  "bestseller": "Bestseller",
  "must-try": "Must Try",
  "signature": "Signature",
  "seasonal": "Seasonal",
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 group flex flex-row md:flex-col">
    {/* Image — horizontal on mobile, vertical on md+ */}
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-44 shrink-0 overflow-hidden">
      <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {item.badge && (
        <span className={`absolute top-2 left-2 md:top-3 md:left-3 text-xs font-body font-bold px-2 py-0.5 md:py-1 rounded-full flex items-center gap-1 ${badgeStyles[item.badge]}`}>
          <Sparkles size={12} /> {badgeLabels[item.badge]}
        </span>
      )}
    </div>
    <div className="p-3 sm:p-4 flex flex-col justify-center flex-1 min-w-0">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-heading text-sm sm:text-base text-foreground truncate">{item.name}</h3>
        <span className={`w-3 h-3 rounded-full shrink-0 mt-0.5 sm:mt-1 ${item.isVeg ? "bg-green-600" : "bg-red-600"}`} title={item.isVeg ? "Vegetarian" : "Non-Vegetarian"} />
      </div>
      <p className="font-body text-xs text-muted-foreground mb-2 md:mb-3 leading-relaxed line-clamp-2">{item.description}</p>
      <span className="font-heading text-base md:text-lg text-gold">₹{item.price}</span>
    </div>
  </div>
);

const MenuPage = () => {
  const [active, setActive] = useState<MenuCategory>("Share Plates");
  const items = getItemsByCategory(active);
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef} className="pt-20 overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm font-body text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1"><Home size={14} /> Home</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Menu</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-8 md:py-12 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-2">Our Menu</h1>
        <p className="font-body text-primary-foreground/70 text-sm sm:text-base">Crafted with love, served with warmth</p>
        <p className="font-body text-primary-foreground/50 text-xs mt-2">Italian · Continental · American · Parsi · Asian</p>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[56px] md:top-[60px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3 touch-scroll scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full font-body text-xs sm:text-sm whitespace-nowrap transition-colors duration-200 ${
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
      <section className="py-8 md:py-12 lg:py-16 bg-linen min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-heading text-xl sm:text-2xl text-foreground mb-6 md:mb-8">{active}</h2>

          {active === "Jain Menu" ? (
            <div className="bg-card rounded-xl p-8 sm:p-12 text-center shadow-sm border border-border/50 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                <Leaf size={28} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">Jain Menu Available</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                We have a dedicated Jain menu with 16+ items prepared without onion, garlic, and root vegetables. Please ask our staff for the complete Jain menu.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Info size={14} />
                <span>Available on request at the restaurant</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {items.map(item => <MenuItemCard key={item.name} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
