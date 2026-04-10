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
  { icon: <UtensilsCrossed size={28} />, title: "Momos", desc: "Handcrafted dumplings bursting with flavour" },
  { icon: <CupSoda size={28} />, title: "Fresh Juices", desc: "Cold-pressed goodness from local fruits" },
  { icon: <Leaf size={28} />, title: "Noodles", desc: "Wok-tossed perfection with every bite" },
  { icon: <Sparkles size={28} />, title: "Specials", desc: "Chef's daily creations you can't miss" },
];

const Index = () => {
  const [reserveOpen, setReserveOpen] = useState(false);
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Grandmama's Café ambiance" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-warm-overlay" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream mb-4 leading-tight">
            Where Every Meal Feels Like Home
          </h1>
          <p className="font-body text-lg md:text-xl text-cream/80 mb-8 max-w-xl mx-auto">
            Authentic flavours crafted with love, in the heart of Juhu, Mumbai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-3 bg-gold text-primary font-body font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              View Menu
            </Link>
            <button
              onClick={() => setReserveOpen(true)}
              className="px-8 py-3 border-2 border-gold text-gold font-body font-bold rounded-lg hover:bg-gold hover:text-primary transition-colors text-sm uppercase tracking-wider"
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
      <section className="py-12 bg-primary/5">
        <FoodCarousel large />
      </section>

      {/* Menu Teaser */}
      <section className="py-16 md:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">What's on the Table</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teaserCategories.map(cat => (
              <div key={cat.title} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">{cat.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="font-body text-sm text-gold font-bold hover:underline uppercase tracking-wider">
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={cafeInterior} alt="Grandmama's Café interior" loading="lazy" className="w-full h-72 md:h-96 object-cover" width={800} height={600} />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">A Cozy Corner in Juhu</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Grandmama's Café was born from a simple idea — that food connects people. Every dish carries the warmth of a grandmother's kitchen, crafted with patience and the finest local ingredients.
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
      <section className="py-16 bg-primary text-primary-foreground text-center fade-in-section">
        <div className="container mx-auto px-4">
          <Clock size={32} className="mx-auto mb-4 text-gold" />
          <h2 className="font-heading text-3xl text-gold mb-6">We're Open</h2>
          <div className="font-body space-y-2 text-primary-foreground/80">
            <p className="text-lg">Dine-In: Monday – Sunday | 11:00 AM – 11:00 PM</p>
            <p className="text-lg">Takeaway & Delivery: 10:00 AM – 11:30 PM</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 fade-in-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">Find Us Here</h2>
          <p className="font-body text-muted-foreground mb-8">Grandmama's Café, Juhu, Mumbai – 400049</p>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              title="Grandmama's Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.826!3d19.098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA1JzUyLjgiTiA3MsKwNDknMzMuNiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
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
