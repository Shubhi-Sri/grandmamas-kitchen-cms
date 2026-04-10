import { useState } from "react";
import { X, Calendar, Clock, Users, Phone, User } from "lucide-react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ReservationModal = ({ open, onClose }: Props) => {
  const [form, setForm] = useState({ name: "", date: "", time: "", guests: "2", phone: "" });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Table Reservation — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nPhone: ${form.phone}`
    );
    window.location.href = `mailto:grandmamascare@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Reservation request sent! We'll confirm shortly.");
    setForm({ name: "", date: "", time: "", guests: "2", phone: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-cream rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X size={20} />
        </button>

        <h2 className="font-heading text-2xl text-foreground mb-1">Reserve a Table</h2>
        <p className="text-sm text-muted-foreground mb-6">Book your spot at Grandmama's Café</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
            <input type="text" required maxLength={100} placeholder="Your Name" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
              <input type="date" required value={form.date}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div className="relative">
              <Clock size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
              <input type="time" required value={form.time}
                onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
          </div>
          <div className="relative">
            <Users size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
            <select value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none">
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
            </select>
          </div>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
            <input type="tel" required maxLength={15} placeholder="Phone Number" value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
          </div>
          <button type="submit" className="w-full py-3 bg-gold text-primary font-body font-bold rounded-lg hover:opacity-90 transition-opacity">
            Request Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
