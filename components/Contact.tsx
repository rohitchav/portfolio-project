import React, { useState } from 'react';
import { CONTACT_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpqjdzvz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus('sent');
        form.reset();

        setTimeout(() => {
          setSubmissionStatus('idle');
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setSubmissionStatus('idle');
      }
    } catch (error) {
      alert("Network error. Please try again.");
      setSubmissionStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

      {/* Left Section */}
      <div className="lg:w-2/5 bg-blue-600 p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Let's Connect
        </h2>

        <p className="text-blue-100 mb-8 text-base md:text-lg leading-relaxed">
          I'm always open to discussing new opportunities,
          professional collaborations, or technical challenges.
        </p>

        <div className="space-y-6 md:space-y-8">
          {CONTACT_LINKS.map((link) => (
            <div key={link.name} className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`${link.icon} text-lg md:text-xl`}></i>
              </div>

              <div className="min-w-0">
                <p className="text-xs md:text-sm text-blue-200 uppercase font-bold tracking-widest">
                  {link.name}
                </p>

                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base hover:underline underline-offset-4 break-all"
                >
                  {link.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-3/5 p-8 md:p-12">
        <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">
            Send a Message
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div>
              <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
              Subject
            </label>
            <input
              required
              type="text"
              name="subject"
              placeholder="Inquiry Subject"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
              Message
            </label>
            <textarea
              required
              rows={4}
              name="message"
              placeholder="How can I help you?"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submissionStatus !== 'idle'}
            className={`w-full py-3 md:py-4 flex items-center justify-center gap-3 font-bold rounded-xl transition-all transform shadow-lg ${
              submissionStatus === 'sending'
                ? 'bg-blue-400 cursor-not-allowed'
                : submissionStatus === 'sent'
                ? 'bg-green-600 scale-95 shadow-green-500/20'
                : 'bg-slate-900 hover:bg-black hover:-translate-y-1'
            } text-white`}
          >
            {submissionStatus === 'idle' && <>Send Message</>}
            {submissionStatus === 'sending' && (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                Sending...
              </>
            )}
            {submissionStatus === 'sent' && (
              <>
                <i className="fa-solid fa-circle-check"></i>
                Message Sent!
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
