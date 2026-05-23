import { useState } from 'react';
import { FaPaperPlane, FaCircleCheck } from 'react-icons/fa6';
import { themes } from '../theme';

export default function ContactForm({ theme = themes.purple }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsLoading(true);
    
    // Simulate API call to send message
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const getFocusRingColor = (id) => {
    switch (id) {
      case "cyan": return "focus:border-cyan-400 focus:ring-cyan-500/20";
      case "emerald": return "focus:border-emerald-400 focus:ring-emerald-500/20";
      case "amber": return "focus:border-amber-400 focus:ring-amber-500/20";
      default: return "focus:border-purple-400 focus:ring-purple-500/20";
    }
  };

  return (
    <section id="contact" className="pt-20 pb-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>
          Let's Work Together
        </span>
      </h2>

      <div className={`bg-[#0c0a1f]/55 border ${theme.border} rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm max-w-lg hover:${theme.shadow} transition-all duration-500 animate-scale-in fill-mode-forwards opacity-0 animation-delay-200 group`}>
        {isSubmitted ? (
          <div className="text-center py-10 flex flex-col items-center animate-scale-in">
            <FaCircleCheck className="text-emerald-400 w-16 h-16 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white/70 text-sm max-w-xs leading-relaxed font-light">
              Thank you for reaching out, Hasifa will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={`mt-6 text-xs ${theme.text} hover:underline cursor-pointer transitionduration-300`}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={`block text-xs font-semibold ${theme.text} uppercase tracking-wider mb-2`}>
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-[#080517]/85 border ${theme.border} text-white placeholder-white/30 focus:ring-2 focus:outline-none rounded-xl p-3.5 text-sm transition-all duration-300 ${getFocusRingColor(theme.id)}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold ${theme.text} uppercase tracking-wider mb-2`}>
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-[#080517]/85 border ${theme.border} text-white placeholder-white/30 focus:ring-2 focus:outline-none rounded-xl p-3.5 text-sm transition-all duration-300 ${getFocusRingColor(theme.id)}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-semibold ${theme.text} uppercase tracking-wider mb-2`}>
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full bg-[#080517]/85 border ${theme.border} text-white placeholder-white/30 focus:ring-2 focus:outline-none rounded-xl p-3.5 text-sm transition-all duration-300 resize-none ${getFocusRingColor(theme.id)}`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r ${theme.buttonBg} disabled:opacity-50 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:${theme.shadow} transition-all duration-300 transform active:scale-95 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group/send`}
            >
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              {!isLoading && <FaPaperPlane className="w-4 h-4 transition-transform duration-300 group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5" />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}