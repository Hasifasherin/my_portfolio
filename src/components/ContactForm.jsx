import { useState } from 'react';
import { FaPaperPlane, FaCircleCheck } from 'react-icons/fa6';

export default function ContactForm() {
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

  return (
    <section id="contact" className="pt-20 pb-20 scroll-mt-28">
      <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
        <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
          Let's Work Together
        </span>
      </h2>

      <div className="bg-[#21163e]/55 border border-purple-500/10 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm max-w-lg">
        {isSubmitted ? (
          <div className="text-center py-10 flex flex-col items-center animate-fade-in">
            <FaCircleCheck className="text-emerald-400 w-16 h-16 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white/70 text-sm max-w-xs leading-relaxed">
              Thank you for reaching out, Hasifa will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-xs text-purple-300 hover:text-white underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#150a30]/80 border border-purple-500/20 text-white placeholder-white/30 focus:border-purple-400/80 focus:ring-1 focus:ring-purple-400/40 focus:outline-none rounded-xl p-3.5 text-sm transition duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#150a30]/80 border border-purple-500/20 text-white placeholder-white/30 focus:border-purple-400/80 focus:ring-1 focus:ring-purple-400/40 focus:outline-none rounded-xl p-3.5 text-sm transition duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                rows="4"
                required
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#150a30]/80 border border-purple-500/20 text-white placeholder-white/30 focus:border-purple-400/80 focus:ring-1 focus:ring-purple-400/40 focus:outline-none rounded-xl p-3.5 text-sm transition duration-200 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:from-purple-500/50 disabled:to-indigo-600/50 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              {!isLoading && <FaPaperPlane className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}