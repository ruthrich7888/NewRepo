{
  /* =========================
   TESTIMONIAL SECTION
========================= */
}

import { Star } from "lucide-react";
const testimonials = [
  {
    name: "James Walker",
    country: "New York, USA",
    text: "I started with the basic investment plan and the experience has been smooth so far. Deposits reflected quickly and withdrawals have been reliable.",
  },
  {
    name: "Emily Carter",
    country: "Texas, USA",
    text: "The dashboard is simple to understand and profits update consistently. Customer support also responded faster than I expected.",
  },
  {
    name: "Daniel Thompson",
    country: "London, United Kingdom",
    text: "I tested the platform with a smaller amount initially and gradually increased my investment after seeing stable weekly returns.",
  },
  {
    name: "Sophia Martinez",
    country: "Toronto, Canada",
    text: "Registration was straightforward and funding my account was easy. The overall platform feels professional and well organized.",
  },
  {
    name: "Michael Johnson",
    country: "California, USA",
    text: "I’ve used different investment platforms before, but this one feels more transparent. Everything from deposits to withdrawals has worked smoothly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">What Investors Are Saying</h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by investors worldwide who are growing their portfolios with
            confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-8 border border-gray-700 hover:scale-105 transition duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="gold" color="gold" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                "{item.text}"
              </p>

              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>

                <span className="text-gray-400 text-sm">{item.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
