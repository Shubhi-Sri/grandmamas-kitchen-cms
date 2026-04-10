import { Link } from "react-router-dom";
import { ChevronRight, Home, Leaf, Heart, HomeIcon, Instagram, Facebook } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import ReviewCard, { reviews } from "@/components/ReviewCard";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const values = [
  { icon: <Leaf size={28} />, title: "Fresh Ingredients", desc: "Sourced daily from local markets" },
  { icon: <Heart size={28} />, title: "Made with Love", desc: "Every dish crafted with care" },
  { icon: <HomeIcon size={28} />, title: "Homely Atmosphere", desc: "A warm corner in busy Mumbai" },
];

const AboutPage = () => {
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef} className="pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm font-body text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1"><Home size={14} /> Home</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">About</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl text-gold">Our Story</h1>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={cafeInterior} alt="Grandmama's Café interior" loading="lazy" className="w-full h-72 md:h-[28rem] object-cover" width={800} height={600} />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-6">A Taste of Home</h2>
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Grandmama's Café was born out of a simple yet powerful idea — that food has the power to connect people, evoke memories, and make every moment feel a little more special.
                </p>
                <p>
                  Nestled in the vibrant neighbourhood of Juhu, Mumbai, we are a cozy corner where traditional recipes meet modern flavours. Every dish that leaves our kitchen carries the warmth of a grandmother's kitchen — crafted with patience, love, and the finest local ingredients.
                </p>
                <p>
                  Whether you're stopping by for a quick bite or settling in for a long conversation over coffee, Grandmama's is your home away from home.
                </p>
                <p>
                  We believe in honest food — no shortcuts, no compromises. Just real ingredients, real recipes, and real smiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">Why We're Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center bg-card rounded-xl p-8 shadow-sm border border-border/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-linen fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">Guest Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 text-center fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-foreground mb-4">Meet Our Kitchen Team</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Behind every dish is a team of passionate cooks who treat our kitchen like their own home. From our head chef to our youngest sous chef, everyone shares the same love for honest, homely food.
          </p>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-gold mb-6">Follow Our Journey</h2>
          <p className="font-body text-primary-foreground/70 mb-8">Stay connected on Instagram & Facebook</p>
          <div className="flex gap-4 justify-center">
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
