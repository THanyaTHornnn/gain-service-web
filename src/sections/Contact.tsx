export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p className="mb-2">📞 โทร: 02-9469475</p>
      <p className="mb-6">💬 Line: @gainservice</p>
    <p className="mb-6">📧 gainservice@gmail.com</p>

      <div className="flex justify-center gap-4">
        <a
          href="tel:02-9469475"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          โทรเลย
        </a>

        <a
          href="https://line.me/"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          แอด LINE
        </a>
      </div>
    </section>
  );
}