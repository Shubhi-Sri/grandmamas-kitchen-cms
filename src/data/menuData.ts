import foodMomos from "@/assets/food-momos.jpg";
import foodJuice from "@/assets/food-juice.jpg";
import foodNoodles from "@/assets/food-noodles.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodShake from "@/assets/food-shake.jpg";
import foodMojito from "@/assets/food-mojito.jpg";
import foodSandwich from "@/assets/food-sandwich.jpg";

export type MenuCategory = 
  | "Veg" | "Non-Veg" | "Juices" | "Mojitos" | "Momos" 
  | "Noodles" | "Pasta" | "Sandwiches" | "Desserts" | "Shakes";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  category: MenuCategory;
  image: string;
  isSpecial?: boolean;
}

export const menuItems: MenuItem[] = [
  // Momos
  { name: "Steamed Veg Momos", description: "Delicate parcels filled with fresh seasonal vegetables", price: 120, isVeg: true, category: "Momos", image: foodMomos },
  { name: "Paneer Momos", description: "Stuffed with spiced cottage cheese and herbs", price: 140, isVeg: true, category: "Momos", image: foodMomos },
  { name: "Chicken Momos", description: "Juicy chicken filling with aromatic spices", price: 150, isVeg: false, category: "Momos", image: foodMomos },
  { name: "Tandoori Momos", description: "Clay-oven roasted with smoky tandoori marinade", price: 160, isVeg: false, category: "Momos", image: foodMomos, isSpecial: true },
  { name: "Fried Momos", description: "Crispy golden fried dumplings with dipping sauce", price: 130, isVeg: true, category: "Momos", image: foodMomos },

  // Noodles
  { name: "Veg Hakka Noodles", description: "Wok-tossed noodles with crunchy vegetables", price: 160, isVeg: true, category: "Noodles", image: foodNoodles },
  { name: "Chicken Chowmein", description: "Classic stir-fried noodles with tender chicken", price: 180, isVeg: false, category: "Noodles", image: foodNoodles },
  { name: "Schezwan Noodles", description: "Fiery Schezwan sauce with fresh vegetables", price: 170, isVeg: true, category: "Noodles", image: foodNoodles },

  // Juices
  { name: "Fresh Orange Juice", description: "Freshly squeezed oranges, pure and refreshing", price: 90, isVeg: true, category: "Juices", image: foodJuice },
  { name: "Watermelon Mint", description: "Cool watermelon blended with fresh mint leaves", price: 100, isVeg: true, category: "Juices", image: foodJuice },
  { name: "Mixed Fruit", description: "A tropical blend of seasonal fresh fruits", price: 110, isVeg: true, category: "Juices", image: foodJuice },
  { name: "Green Detox", description: "Spinach, apple, ginger & lemon power blend", price: 120, isVeg: true, category: "Juices", image: foodJuice },

  // Mojitos
  { name: "Classic Lime Mojito", description: "Muddled lime, mint & soda — a timeless refresher", price: 130, isVeg: true, category: "Mojitos", image: foodMojito },
  { name: "Blueberry Mojito", description: "Bursting blueberry with crushed mint & lime", price: 150, isVeg: true, category: "Mojitos", image: foodMojito },
  { name: "Virgin Watermelon", description: "Sweet watermelon twist on the classic mojito", price: 140, isVeg: true, category: "Mojitos", image: foodMojito },

  // Pasta
  { name: "Penne Arrabbiata", description: "Penne in a fiery tomato & chilli sauce", price: 200, isVeg: true, category: "Pasta", image: foodPasta },
  { name: "Creamy Mushroom Pasta", description: "Rich cream sauce with sautéed mushrooms", price: 220, isVeg: true, category: "Pasta", image: foodPasta },
  { name: "Chicken Alfredo", description: "Grilled chicken in a velvety Alfredo sauce", price: 240, isVeg: false, category: "Pasta", image: foodPasta },

  // Sandwiches
  { name: "Club Sandwich", description: "Triple-layered with grilled veggies & sauces", price: 160, isVeg: true, category: "Sandwiches", image: foodSandwich },
  { name: "Grilled Paneer Sandwich", description: "Smoky paneer with capsicum & cheese", price: 150, isVeg: true, category: "Sandwiches", image: foodSandwich },
  { name: "Chicken Tikka Sandwich", description: "Tandoori chicken tikka with mint chutney", price: 180, isVeg: false, category: "Sandwiches", image: foodSandwich },

  // Desserts
  { name: "Chocolate Lava Cake", description: "Warm cake with a molten chocolate centre", price: 180, isVeg: true, category: "Desserts", image: foodDessert },
  { name: "Brownie Sundae", description: "Fudgy brownie topped with vanilla ice cream", price: 200, isVeg: true, category: "Desserts", image: foodDessert },
  { name: "Gulab Jamun with Ice Cream", description: "Warm gulab jamun paired with cold ice cream", price: 130, isVeg: true, category: "Desserts", image: foodDessert },

  // Shakes
  { name: "Oreo Shake", description: "Creamy Oreo cookie blended milkshake", price: 160, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Chocolate Shake", description: "Rich Belgian chocolate milkshake", price: 140, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Strawberry Delight", description: "Fresh strawberry blended with cream", price: 150, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Mango Tango", description: "Alphonso mango shake — a summer favourite", price: 130, isVeg: true, category: "Shakes", image: foodShake },
];

export const categories: MenuCategory[] = [
  "Veg", "Non-Veg", "Juices", "Mojitos", "Momos", 
  "Noodles", "Pasta", "Sandwiches", "Desserts", "Shakes"
];

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  if (category === "Veg") return menuItems.filter(i => i.isVeg);
  if (category === "Non-Veg") return menuItems.filter(i => !i.isVeg);
  return menuItems.filter(i => i.category === category);
}
