import { Link } from "react-router-dom";
import { ChevronRight, Home, Leaf, Star as StarIcon, HomeIcon, Instagram, Facebook } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import ReviewCard, { reviews } from "@/components/ReviewCard";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const values = [
  { icon: <Leaf size={28} />, title: "Parsi, Italian & Bombay Recipes", desc: "Three grandmothers, one magical menu" },
  { icon: <HomeIcon size={28} />, title: "Cottage Ambience", desc: "Antique décor, chintz upholstery & vintage charm" },
  { icon: <StarIcon size={28} />, title: "4.2 Stars & 5,600+ Reviews", desc: "Loved by thousands of Mumbaikars" },
];

const AboutPage = () => {
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef} className="pt-20 overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm font-body text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1"><Home size={14} /> Home</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">About</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-10 md:py-16 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold">Our Story</h1>
      </section>

      {/* Story */}
      <section className="py-8 md:py-16 lg:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full">
              <img src={cafeInterior} alt="Grandmama's Café interior — white & green décor, antique plates on walls" loading="lazy" className="w-full h-56 sm:h-72 md:h-[28rem] object-cover" width={800} height={600} />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-4 md:mb-6">A Taste of Home</h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Grandmama's Café was born from a beautifully simple idea — to recreate the warmth, comfort, and flavours of a grandmother's kitchen. Founded with love and passion, we have grown from a single cozy café to a beloved chain across Mumbai. Nestled in the historic Habib Mansion at Kemp's Corner, our Tardeo outlet is one of our most cherished — a place where old-world charm meets modern culinary creativity.
                </p>
                <p>
                  Our menu draws inspiration from three iconic grandmothers: a Parsi granny's soulful dhanshak, an Italian nonna's handcrafted pasta, and a Bombay grandmother's cosmopolitan kitchen. Every dish is crafted with patience, the finest local ingredients, and an unwavering belief in honest, home-style cooking.
                </p>
                <p>
                  With a European-cottage aesthetic — think chintz upholstery, floral wallpapers, framed embroidery, antique plates on the walls, and a warm sea-green door — Grandmama's is not just a restaurant. It is a feeling. Come as you are. Stay as long as you like. Grandmama's always has a seat for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 md:py-16 lg:py-24 fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-8 md:mb-12">Why We're Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-heading text-lg sm:text-xl text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-8 md:py-16 lg:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-8 md:mb-12">Guest Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-8 md:py-16 text-center fade-in-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-4">Meet Our Kitchen Team</h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Behind every dish is a team of passionate cooks who treat our kitchen like their own home. From our head chef to our youngest sous chef, everyone shares the same love for honest, homely food.
          </p>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-8 md:py-16 bg-primary text-primary-foreground text-center fade-in-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-gold mb-4 md:mb-6">Follow Our Journey</h2>
          <p className="font-body text-primary-foreground/70 mb-6 md:mb-8 text-sm sm:text-base">Stay connected on Instagram & Facebook</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
