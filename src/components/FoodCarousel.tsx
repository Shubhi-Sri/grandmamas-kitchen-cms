import foodMomos from "@/assets/food-momos.jpg";
import foodJuice from "@/assets/food-juice.jpg";
import foodNoodles from "@/assets/food-noodles.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodShake from "@/assets/food-shake.jpg";

const items = [
  { img: foodMomos, label: "Momos" },
  { img: foodJuice, label: "Fresh Juices" },
  { img: foodNoodles, label: "Noodles" },
  { img: foodPasta, label: "Pasta" },
  { img: foodDessert, label: "Desserts" },
  { img: foodShake, label: "Shakes" },
];

const FoodCarousel = ({ large = false }: { large?: boolean }) => {
  const doubled = [...items, ...items];
  const size = large
    ? "w-[80vw] h-[200px] sm:w-64 sm:h-48 md:w-72 md:h-56 lg:w-80 lg:h-60"
    : "w-[60vw] h-[140px] sm:w-40 sm:h-32 md:w-52 md:h-40";

  return (
    <div className="overflow-hidden carousel-fade-both touch-scroll">
      <div className="flex gap-3 sm:gap-4 animate-scroll-left" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div key={i} className={`${size} relative rounded-xl overflow-hidden shrink-0 group`}>
            <img
              src={item.img}
              alt={item.label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            {large && (
              <span className="absolute bottom-3 left-4 font-heading text-base sm:text-lg text-cream">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
