export default function ContactForm() {
  return (
    <section id="contact" className="pt-16 scroll-mt-28">
      <h1 className="text-3xl font-bold mb-8">
        Let's Create Something <span className="text-purple-300">Amazing!</span>
      </h1>
      <form className="bg-[#6c5c9d] border-2 border-[#6a89a7] rounded-lg p-6 shadow max-w-lg">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 rounded border border-gray-300 text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded border border-gray-300 text-black"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full mb-4 p-2 rounded border border-gray-300 text-black"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
