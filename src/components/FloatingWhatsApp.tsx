import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hi Grandmama's! I'd like to enquire about...");
  return (
    <a
      href={`https://wa.me/918591078528?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsApp;
