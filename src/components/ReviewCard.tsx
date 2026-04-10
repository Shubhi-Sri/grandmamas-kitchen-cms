import { Star, StarHalf } from "lucide-react";

export interface Review {
  text: string;
  author: string;
  source: "Tripadvisor" | "Justdial" | "Zomato" | "Google" | "Swiggy";
  rating: number;
}

export const reviews: Review[] = [
  {
    text: "Beautifully decorated. Lovely ambiance. Food was delicious. Mushroom soup, Risotto, and Roast Chicken are worth every rupee.",
    author: "A Verified Diner, Mumbai",
    source: "Tripadvisor",
    rating: 5,
  },
  {
    text: "Grandmama's Café has got some classy ambience with an elegant atmosphere. Walls decorated with antiques and quotes. Service was really nice — staff is quick and knows the menu well. The food is a treat to your taste buds. 100% worth a visit.",
    author: "A Food Blogger, Mumbai",
    source: "Tripadvisor",
    rating: 5,
  },
  {
    text: "They are the best branch of Grandmama's in Mumbai and definitely worth a visit. Staff is very good and ambience is very cosy. Great food preparations, humble and polite staff, and very hygienic. Always a pleasure.",
    author: "Regular Customer",
    source: "Justdial",
    rating: 4.2,
  },
  {
    text: "Mac and Cheese here is the best I've ever had — a must try. Cheesy fries are fully loaded and amazing. Oreo KitKat shake was just outstanding. Prompt service, friendly staff. Must visit.",
    author: "Verified Diner",
    source: "Tripadvisor",
    rating: 5,
  },
  {
    text: "Tried the Homemade Ginger Ale, Chicken Shawarma, and Pesto Basilico Pasta — all fantastic. A cute place with warm ambience and vintage decor. My all-time favourite place to hang out.",
    author: "Food Enthusiast, Mumbai",
    source: "Tripadvisor",
    rating: 4,
  },
  {
    text: "Grandmama's Cafe is like a cute little home with a personal touch. Chose Paneer Scramble — healthy and yum. Nutella waffles for breakfast — absolutely divine. Watermelon juice was very fresh. Ended with red velvet cake. A great start to the day.",
    author: "Breakfast Lover",
    source: "Tripadvisor",
    rating: 5,
  },
];

const sourceColors: Record<string, string> = {
  Tripadvisor: "bg-[#00AA6C] text-cream",
  Justdial: "bg-[#F28C28] text-cream",
  Zomato: "bg-[#E23744] text-cream",
  Google: "bg-[#4285F4] text-cream",
  Swiggy: "bg-[#FC8019] text-cream",
};

const Stars = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.2;
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: full }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      {half && <StarHalf size={14} fill="currentColor" />}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-card rounded-xl p-5 sm:p-6 shadow-md border border-border/50 flex flex-col gap-3 min-w-0 max-w-none sm:max-w-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <span className="text-gold font-heading text-3xl sm:text-4xl leading-none">"</span>
    <p className="font-body text-sm text-foreground/80 leading-relaxed -mt-4">{review.text}</p>
    <Stars rating={review.rating} />
    <div className="flex items-center justify-between mt-auto pt-2">
      <span className="font-body text-xs font-bold text-foreground uppercase tracking-wide">— {review.author}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full font-body font-bold ${sourceColors[review.source]}`}>
        {review.source}
      </span>
    </div>
  </div>
);

export default ReviewCard;
