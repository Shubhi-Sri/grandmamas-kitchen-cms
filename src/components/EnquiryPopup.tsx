import { useState } from "react";
import { Mail, X } from "lucide-react";
import { toast } from "sonner";

const EnquiryPopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:grandmamascare@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-gold text-primary px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 font-body font-bold text-sm"
      >
        <Mail size={18} />
        <span className="hidden sm:inline">Enquire</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full sm:max-w-md bg-cream rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 animate-[slideUp_0.3s_ease-out] max-h-[90vh] overflow-y-auto">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <h3 className="font-heading italic text-xl text-gold mb-1">Grandmama's Café</h3>
              <h2 className="font-heading text-2xl text-foreground">Get in Touch with Us</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1 block">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1 block">Email Address</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1 block">Your Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gold text-primary font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryPopup;
