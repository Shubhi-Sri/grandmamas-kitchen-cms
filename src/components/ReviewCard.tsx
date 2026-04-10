import { Star, StarHalf } from "lucide-react";

export interface Review {
  text: string;
  author: string;
  source: "Zomato" | "Google" | "Swiggy";
  rating: number;
}

export const reviews: Review[] = [
  { text: "The momos here are absolutely divine! Best I've had in Mumbai.", author: "Priya S.", source: "Zomato", rating: 5 },
  { text: "Loved the ambiance and the food quality is consistently great!", author: "Rahul M.", source: "Google", rating: 5 },
  { text: "Perfect place for a relaxed evening. The mojitos are a must-try!", author: "Sneha K.", source: "Swiggy", rating: 4.5 },
  { text: "Grandmama's never disappoints. The pasta and momos are our family favourites.", author: "Arjun T.", source: "Zomato", rating: 5 },
];

const sourceColors: Record<string, string> = {
  Zomato: "bg-[#E23744] text-cream",
  Google: "bg-[#4285F4] text-cream",
  Swiggy: "bg-[#FC8019] text-cream",
};

const Stars = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: full }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      {half && <StarHalf size={14} fill="currentColor" />}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-card rounded-xl p-5 sm:p-6 shadow-md border border-border/50 flex flex-col gap-3 min-w-0 max-w-none sm:max-w-sm">
    <span className="text-gold font-heading text-3xl sm:text-4xl leading-none">"</span>
    <p className="font-body text-sm text-foreground/80 leading-relaxed -mt-4">{review.text}</p>
    <Stars rating={review.rating} />
    <div className="flex items-center justify-between mt-auto pt-2">
      <span className="font-body text-sm font-bold text-foreground">— {review.author}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full font-body font-bold ${sourceColors[review.source]}`}>
        {review.source}
      </span>
    </div>
  </div>
);

export default ReviewCard;
