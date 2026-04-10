import foodMomos from "@/assets/food-momos.jpg";
import foodJuice from "@/assets/food-juice.jpg";
import foodNoodles from "@/assets/food-noodles.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodShake from "@/assets/food-shake.jpg";
import foodMojito from "@/assets/food-mojito.jpg";
import foodSandwich from "@/assets/food-sandwich.jpg";

export type MenuCategory =
  | "Share Plates"
  | "Soups & Salads"
  | "Shawarmas & Burgers"
  | "Pizzas"
  | "Pastas & Risotto"
  | "Wholesome Meals"
  | "Eggs & Breakfast"
  | "Shakes"
  | "Mojitos & Coolers"
  | "Coffee & Tea"
  | "Desserts"
  | "Jain Menu";

export type BadgeType = "bestseller" | "must-try" | "signature" | "seasonal";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  category: MenuCategory;
  image: string;
  isSpecial?: boolean;
  badge?: BadgeType;
}

export const menuItems: MenuItem[] = [
  // Share Plates (Starters)
  { name: "Masala Fries", description: "Crispy potato fingers with Grandmama's secret spice mix", price: 210, isVeg: true, category: "Share Plates", image: foodMomos },
  { name: "Beiruti Hummus", description: "Lebanese hummus with sumac & zaatar, served with homemade pita", price: 290, isVeg: true, category: "Share Plates", image: foodMomos },
  { name: "Home Style Chilli Cheese Toast", description: "Crunchy toast topped with spicy cheesy mixture", price: 320, isVeg: true, category: "Share Plates", image: foodSandwich },
  { name: "Bibiji Ji Ki Achari Kichidi", description: "Homemade Punjabi khichdi with garlic tempering, desi ghee & pickle", price: 210, isVeg: true, category: "Share Plates", image: foodNoodles },
  { name: "Mint Lemonades", description: "Fresh lemon juice with tons of fresh mint & sugar", price: 190, isVeg: true, category: "Share Plates", image: foodJuice },
  { name: "Chicken Croquettes", description: "Golden fried chicken croquettes, Grandmama's style", price: 360, isVeg: false, category: "Share Plates", image: foodMomos },
  { name: "Grandmama's Meatballs", description: "Classic Italian-style meatballs in rich tomato sauce", price: 380, isVeg: false, category: "Share Plates", image: foodMomos },
  { name: "Panko Crusted Fish Fingers", description: "Crispy panko-coated fish fingers with dipping sauce", price: 390, isVeg: false, category: "Share Plates", image: foodMomos },
  { name: "Paneer Chilli", description: "Indo-Chinese style tossed paneer with peppers & sauces", price: 420, isVeg: true, category: "Share Plates", image: foodMomos },
  { name: "Chicken Sriracha Dim Sum", description: "Steamed chicken dumplings with sriracha glaze", price: 460, isVeg: false, category: "Share Plates", image: foodMomos },
  { name: "Edamame & Truffle Dim Sum", description: "Delicate steamed dumplings with truffle oil", price: 550, isVeg: true, category: "Share Plates", image: foodMomos },
  { name: "Prawn & Chives Dim Sum", description: "Steamed prawn dumplings with fresh chives", price: 490, isVeg: false, category: "Share Plates", image: foodMomos },

  // Soups & Salads
  { name: "Four Mushroom Soup", description: "Rich, velvety blend of four exotic mushrooms", price: 290, isVeg: true, category: "Soups & Salads", image: foodNoodles },
  { name: "Santa Fe Salad Bowl", description: "Colourful bowl with nachos, bell peppers, olives, corn in BBQ dressing", price: 320, isVeg: true, category: "Soups & Salads", image: foodNoodles },
  { name: "Chicken Caesar Salad", description: "Classic Caesar with grilled chicken, bacon & parmesan", price: 360, isVeg: false, category: "Soups & Salads", image: foodNoodles },

  // Shawarmas, Burgers & Sandwiches
  { name: "Falafel Shawarma", description: "Pita roll with chickpea patty, hummus, hot yogurt sauce, garlic toum & pickled veg", price: 240, isVeg: true, category: "Shawarmas & Burgers", image: foodSandwich },
  { name: "Chicken Shawarma", description: "Tender marinated chicken wrapped in pita with garlic sauce", price: 330, isVeg: false, category: "Shawarmas & Burgers", image: foodSandwich },
  { name: "Bombay Grill Sandwich", description: "Mumbai-style grilled sandwich, Grandmama's touch", price: 340, isVeg: true, category: "Shawarmas & Burgers", image: foodSandwich },
  { name: "Lamb Kebab Wrap", description: "Juicy lamb kebabs in soft wrap with mint chutney", price: 390, isVeg: false, category: "Shawarmas & Burgers", image: foodSandwich },
  { name: "Mediterranean Vegetable Sandwich", description: "Grilled veggies with cheddar & honey mustard", price: 420, isVeg: true, category: "Shawarmas & Burgers", image: foodSandwich, badge: "must-try" },
  { name: "Chicken Club Sandwich", description: "Triple-decker with grilled chicken, bacon, lettuce & tomato", price: 460, isVeg: false, category: "Shawarmas & Burgers", image: foodSandwich },
  { name: "All American Burger", description: "Juicy beef/chicken patty with classic American toppings", price: 460, isVeg: false, category: "Shawarmas & Burgers", image: foodSandwich },
  { name: "Veggie One Burger", description: "Gourmet vegetarian burger with fresh produce", price: 350, isVeg: true, category: "Shawarmas & Burgers", image: foodSandwich },

  // Thin Crust Pizzas
  { name: "BBQ Cottage Cheese Pizza", description: "Hickory BBQ paneer, caramelized onions, jalapeño & mozzarella", price: 470, isVeg: true, category: "Pizzas", image: foodPasta },
  { name: "Grandmama's Special Pizza", description: "Chef's signature pizza, crowd favourite", price: 490, isVeg: false, category: "Pizzas", image: foodPasta },
  { name: "BBQ Chicken Pizza", description: "Smoky BBQ chicken with mozzarella & caramelized onions", price: 490, isVeg: false, category: "Pizzas", image: foodPasta },
  { name: "Harissa Chicken Pizza", description: "Spiced harissa-marinated chicken, bold & fiery", price: 490, isVeg: false, category: "Pizzas", image: foodPasta },
  { name: "Quattro Formaggi", description: "Four cheese pizza, rich & indulgent", price: 470, isVeg: true, category: "Pizzas", image: foodPasta },
  { name: "Pesto Veg Pizza", description: "Fresh pesto base with seasonal vegetables", price: 450, isVeg: true, category: "Pizzas", image: foodPasta },

  // Pastas & Risotto
  { name: "Pesto Basilico", description: "Penne tossed in fresh basil pesto cream sauce with sautéed vegetables", price: 390, isVeg: true, category: "Pastas & Risotto", image: foodPasta, badge: "bestseller" },
  { name: "Mac & Cheese", description: "Grandmama's legendary creamy mac & cheese, must try", price: 360, isVeg: true, category: "Pastas & Risotto", image: foodPasta },
  { name: "Green Thai Curry", description: "Homestyle green Thai curry with steamed rice", price: 350, isVeg: true, category: "Pastas & Risotto", image: foodNoodles },
  { name: "Chicken Pesto Pasta", description: "Grilled chicken in fresh basil pesto cream", price: 420, isVeg: false, category: "Pastas & Risotto", image: foodPasta },
  { name: "Penne Arrabbiata", description: "Penne in spicy tomato arrabbiata sauce", price: 340, isVeg: true, category: "Pastas & Risotto", image: foodPasta },

  // Wholesome Meals
  { name: "Grandmama's Roast Chicken", description: "Paprika & herb rubbed roast chicken, mashed potatoes, buttered vegetables & demi-glaze", price: 560, isVeg: false, category: "Wholesome Meals", image: foodMomos, badge: "signature" },
  { name: "Rajma Chawal", description: "Homestyle rajma in rich tomato gravy with steamed rice & spinach fritters", price: 310, isVeg: true, category: "Wholesome Meals", image: foodNoodles },
  { name: "Farida Moriwala Dhanshak", description: "Traditional Parsi dhanshak, slow-cooked & aromatic, with brown rice", price: 460, isVeg: false, category: "Wholesome Meals", image: foodNoodles },
  { name: "Keema Pav", description: "Perfectly spiced minced meat served with soft buttery pav", price: 360, isVeg: false, category: "Wholesome Meals", image: foodMomos },
  { name: "Bibimbap Style Thai Bowl", description: "Bangkok curry bowl with vegetables & jasmine rice", price: 380, isVeg: true, category: "Wholesome Meals", image: foodNoodles },
  { name: "Chicken Laksa Style Khao Suey", description: "Rich coconut-lemongrass noodle soup", price: 580, isVeg: false, category: "Wholesome Meals", image: foodNoodles, badge: "must-try" },

  // Eggs & Breakfast
  { name: "Paneer Scramble", description: "Scrambled paneer with herbs, served on toast", price: 280, isVeg: true, category: "Eggs & Breakfast", image: foodSandwich },
  { name: "Tomato Omelette", description: "Classic spiced tomato omelette with toast", price: 240, isVeg: true, category: "Eggs & Breakfast", image: foodSandwich },
  { name: "Waffles", description: "Fluffy waffles with toppings of your choice", price: 290, isVeg: true, category: "Eggs & Breakfast", image: foodDessert },
  { name: "Nutella Waffles", description: "Chocolate Nutella drizzled waffles", price: 320, isVeg: true, category: "Eggs & Breakfast", image: foodDessert },
  { name: "Avocado Toast", description: "Fresh avocado spread on sourdough with salsa", price: 320, isVeg: true, category: "Eggs & Breakfast", image: foodSandwich },

  // Shakes
  { name: "Oreo KitKat Shake", description: "Indulgent blend of Oreo & KitKat", price: 310, isVeg: true, category: "Shakes", image: foodShake, badge: "bestseller" },
  { name: "Ferrero Rocher Thick Shake", description: "Rich, nutty & chocolatey", price: 310, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Chocolate Thick Shake", description: "Classic Belgian chocolate shake", price: 270, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Cookie Dough Shake", description: "Creamy shake with cookie dough chunks", price: 290, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Mango Milkshake", description: "Rich Alphonso mango with whipped cream", price: 270, isVeg: true, category: "Shakes", image: foodShake },
  { name: "Strawberry Delight", description: "Fresh strawberry milkshake", price: 260, isVeg: true, category: "Shakes", image: foodShake },

  // Mojitos & Coolers
  { name: "Mango Mojito", description: "Fresh mango, mint & lime fizz", price: 230, isVeg: true, category: "Mojitos & Coolers", image: foodMojito, badge: "seasonal" },
  { name: "Watermelon Basil Mojito", description: "Refreshing watermelon with fresh basil", price: 220, isVeg: true, category: "Mojitos & Coolers", image: foodMojito },
  { name: "Green Apple Lemongrass", description: "Unique tropical cooler", price: 220, isVeg: true, category: "Mojitos & Coolers", image: foodMojito },
  { name: "Homemade Ginger Ale", description: "House-made ginger ale, light & zingy", price: 190, isVeg: true, category: "Mojitos & Coolers", image: foodMojito },
  { name: "Guava Chilli Cooler", description: "Sweet guava with a chilli kick", price: 250, isVeg: true, category: "Mojitos & Coolers", image: foodMojito },
  { name: "Terrific Tang", description: "Tangy citrus cooler", price: 210, isVeg: true, category: "Mojitos & Coolers", image: foodMojito },

  // Coffee & Tea
  { name: "Hot Chocolate", description: "Famous Grandmama's hot chocolate", price: 220, isVeg: true, category: "Coffee & Tea", image: foodShake, badge: "bestseller" },
  { name: "Masala Chai Iced Tea", description: "Spiced chai served over ice", price: 250, isVeg: true, category: "Coffee & Tea", image: foodJuice },
  { name: "Vietnamese Iced Coffee", description: "Strong Vietnamese-style cold coffee", price: 230, isVeg: true, category: "Coffee & Tea", image: foodShake },
  { name: "Choco Chill Mocha", description: "Chilled mocha for coffee lovers", price: 250, isVeg: true, category: "Coffee & Tea", image: foodShake },
  { name: "Iced Latte", description: "Classic cold latte", price: 220, isVeg: true, category: "Coffee & Tea", image: foodShake },

  // Desserts
  { name: "Gooey Chocolate Decadent Cake", description: "Warm, rich chocolate lava cake", price: 280, isVeg: true, category: "Desserts", image: foodDessert, badge: "must-try" },
  { name: "Grandmama's Biscuit Cake", description: "The original, legendary biscuit cake", price: 250, isVeg: true, category: "Desserts", image: foodDessert, badge: "signature" },
  { name: "Tiramisu", description: "Classic Italian tiramisu, light & creamy", price: 290, isVeg: true, category: "Desserts", image: foodDessert },
  { name: "Mudcake", description: "Dense, moist chocolate mudcake", price: 270, isVeg: true, category: "Desserts", image: foodDessert },
  { name: "Hazelnut Truffle Tian", description: "Elegant hazelnut chocolate tian", price: 310, isVeg: true, category: "Desserts", image: foodDessert },
  { name: "Red Velvet Cake", description: "Moist red velvet with cream cheese frosting", price: 260, isVeg: true, category: "Desserts", image: foodDessert },
  { name: "Mango Cheesecake", description: "Seasonal Alphonso mango cheesecake", price: 290, isVeg: true, category: "Desserts", image: foodDessert, badge: "seasonal" },
];

export const categories: MenuCategory[] = [
  "Share Plates",
  "Soups & Salads",
  "Shawarmas & Burgers",
  "Pizzas",
  "Pastas & Risotto",
  "Wholesome Meals",
  "Eggs & Breakfast",
  "Shakes",
  "Mojitos & Coolers",
  "Coffee & Tea",
  "Desserts",
  "Jain Menu",
];

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter(i => i.category === category);
}
