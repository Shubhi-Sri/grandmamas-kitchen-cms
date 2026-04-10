import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Clock, Leaf, UtensilsCrossed, CupSoda, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import FoodCarousel from "@/components/FoodCarousel";
import ReviewCard, { reviews } from "@/components/ReviewCard";
import ReservationModal from "@/components/ReservationModal";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const teaserCategories = [
  { icon: <UtensilsCrossed size={28} />, title: "Share Plates", desc: "Handcrafted starters bursting with flavour" },
  { icon: <CupSoda size={28} />, title: "Shakes & Coolers", desc: "Thick shakes, mojitos & cold-pressed goodness" },
  { icon: <Leaf size={28} />, title: "Wholesome Meals", desc: "Parsi, Italian & Bombay home-style mains" },
  { icon: <Sparkles size={28} />, title: "Desserts", desc: "Legendary biscuit cake, tiramisu & more" },
];

const Index = () => {
  const [reserveOpen, setReserveOpen] = useState(false);
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Grandmama's Café ambiance" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl py-10 md:py-0">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-cream mb-4 leading-tight">
            Where Every Meal Feels Like Home
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-cream mb-6 sm:mb-8 max-w-xl mx-auto">
            Authentic flavours crafted with love, at Kemp's Corner, Mumbai
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-3 bg-gold text-primary font-body font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider w-full sm:w-auto text-center shadow-[0_4px_20px_rgba(201,168,76,0.5)]"
            >
              View Menu
            </Link>
            <button
              onClick={() => setReserveOpen(true)}
              className="px-8 py-3 border-2 border-cream text-cream font-body font-bold rounded-lg hover:bg-gold hover:text-primary hover:border-gold transition-colors text-sm uppercase tracking-wider w-full sm:w-auto shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
            >
              Reserve a Table
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 animate-scroll-arrow">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Carousel */}
      <section className="py-8 md:py-12 bg-primary/5 overflow-hidden">
        <FoodCarousel large />
      </section>

      {/* Menu Teaser */}
      <section className="py-8 md:py-16 lg:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-8 md:mb-12">What's on the Table</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teaserCategories.map(cat => (
              <div key={cat.title} className="bg-card rounded-xl p-5 sm:p-6 text-center shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">{cat.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link to="/menu" className="font-body text-sm text-gold font-bold hover:underline uppercase tracking-wider">
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-8 md:py-16 lg:py-24 fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full">
              <img src={cafeInterior} alt="Grandmama's Café interior" loading="lazy" className="w-full h-56 sm:h-72 md:h-96 object-cover" width={800} height={600} />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">A Cozy Corner at Kemp's Corner</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Grandmama's Café was born from a beautifully simple idea — to recreate the warmth, comfort, and flavours of a grandmother's kitchen. Nestled in the historic Habib Mansion at Kemp's Corner, our Tardeo outlet blends old-world charm with modern culinary creativity.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Whether you're here for a quick bite or a long evening conversation, Grandmama's is your home away from home.
              </p>
              <Link to="/about" className="font-body text-sm text-gold font-bold hover:underline uppercase tracking-wider">
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground text-center fade-in-section">
        <div className="container mx-auto px-4 md:px-8">
          <Clock size={32} className="mx-auto mb-4 text-gold" />
          <h2 className="font-heading text-2xl sm:text-3xl text-gold mb-4 sm:mb-6">We're Open</h2>
          <div className="font-body space-y-2 text-primary-foreground/80 flex flex-col items-center">
            <p className="text-base sm:text-lg">Dine-In: Monday – Sunday | 11:00 AM – 12:00 Midnight</p>
            <p className="text-base sm:text-lg">Delivery & Takeaway: 10:00 AM – 12:00 Midnight</p>
            <p className="text-base sm:text-lg">Bar: Open during dining hours</p>
            <p className="text-base sm:text-lg">Breakfast served from: 9:00 AM (select items)</p>
            <p className="text-sm text-primary-foreground/50 mt-2">Last order for food: 11:30 PM</p>
          </div>
        </div>
      </section>

      {/* Info Badges */}
      <section className="py-6 md:py-10 bg-linen fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "🍽️ Dine-In | Takeaway | Bar & Lounge",
              "💰 Avg. ₹1,200–₹1,500 for two",
              "🅿️ Parking Available",
              "📶 Free Wi-Fi",
              "💳 Cards Accepted",
              "⭐ 4.2/5 on Justdial (5,635+ ratings)",
              "⭐ 4.0/5 on Tripadvisor (62 reviews)",
            ].map(badge => (
              <span key={badge} className="inline-block bg-card border border-border/50 rounded-full px-4 py-2 font-body text-xs sm:text-sm text-foreground/80 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-16 lg:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-8 md:mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 md:py-16 lg:py-24 fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-2">Find Us Here</h2>
          <p className="font-body text-muted-foreground mb-6 md:mb-8">
            Grandmama's Café, Ground Floor, Habib Mansion,<br className="hidden sm:block" />
            August Kranti Maidan, Kemp's Corner, Tardeo, Mumbai – 400036
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              title="Grandmama's Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0!2d72.8101!3d18.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7aa4f89d8b%3A0x1!2sGrandmama's+Cafe%2C+Habib+Mansion%2C+Kemp's+Corner%2C+Mumbai!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="220"
              className="h-[220px] md:h-[320px] lg:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
};

export default Index;
