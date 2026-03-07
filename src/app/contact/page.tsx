"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Exo_2 } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import RevealWrapper from "@/app/components/RevealWrapper";

const play = Play({ weight: ["400"], subsets: ["latin"] });
const exo2 = Exo_2({ weight: ["400"], subsets: ["latin"] });

const contactDetails = [
  {
    label: "Phone",
    value: "(432) 889-8548",
    href: "tel:+14328898548",
  },
  {
    label: "Email",
    value: "info@signaturetheaters.com",
    href: "mailto:info@signaturetheaters.com",
  },
  {
    label: "Location",
    value: "Midland, Texas",
    href: null,
  },
];

const projectTypes = [
  "New Home Theater",
  "Whole-Home AV",
  "Smart Home Integration",
  "Outdoor Entertainment",
  "Lighting & Control",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target as HTMLFormElement);
    const response = await fetch("https://formspree.io/f/xdawkgdd", {
      method: "post",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = `${exo2.className} w-full bg-transparent border-b border-stone-700 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-signature-yellow transition-colors duration-300 text-sm tracking-wider`;
  const labelClass = `${exo2.className} text-stone-500 text-xs tracking-[0.2em] uppercase mb-1 block`;

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[100dvh] flex items-end justify-start pb-28 md:pb-24 px-8 md:px-24">
        <Image
          src="/Signature%20Theaters-09073.jpg"
          alt="Signature Theaters contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className={`${exo2.className} text-signature-yellow tracking-[0.3em] text-sm uppercase mb-4`}
          >
            Let&apos;s Talk
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className={`${play.className} text-5xl md:text-8xl text-white tracking-widest uppercase`}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact body */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <RevealWrapper delay={0.1}>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className={`${play.className} text-3xl md:text-4xl text-white uppercase tracking-wider mb-6`}>
                  Start Your Project
                </h2>
                <p className={`${exo2.className} text-stone-400 leading-relaxed max-w-md`}>
                  Whether you&apos;re building a new home theater, integrating smart home technology, or
                  enhancing your outdoor space, our team is ready to bring your vision to life.
                  Reach out and a specialist will be in touch within one business day.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {contactDetails.map(({ label, value, href }) => (
                  <div key={label} className="flex flex-col gap-1 border-l-2 border-signature-yellow pl-5">
                    <span className={`${exo2.className} text-stone-500 text-xs tracking-[0.2em] uppercase`}>
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className={`${exo2.className} text-white text-lg hover:text-signature-yellow transition-colors duration-200`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className={`${exo2.className} text-white text-lg`}>{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Right — form */}
          <RevealWrapper delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start justify-center h-full gap-6 py-16"
                >
                  <div className="w-12 h-[2px] bg-signature-yellow" />
                  <h3 className={`${play.className} text-3xl text-white uppercase tracking-wider`}>
                    Message Received
                  </h3>
                  <p className={`${exo2.className} text-stone-400 leading-relaxed max-w-sm`}>
                    Thank you for reaching out. A member of our team will be in touch with you
                    within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(480) 555-0100"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className={labelClass}>Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled className="bg-black">Select a type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-black">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Tell us about your project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Square footage, timeline, budget range, special requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`${exo2.className} self-start border-2 border-signature-yellow text-signature-yellow px-10 py-4 tracking-widest text-sm uppercase hover:bg-signature-yellow hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}
