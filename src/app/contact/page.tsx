"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send, MessageSquare, User, AtSign } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    const subject = encodeURIComponent("Portfolio Message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:davidtran.forwork@gmail.com?subject=${subject}&body=${body}`;

    setStatus("Opening your email client...");

    // To enable Formspree, replace onSubmit with:
    // fetch("https://formspree.io/f/FORM_ID",{method:"POST",body:new FormData(form)})
    // .then(()=>setStatus("Sent")).catch(()=>setStatus("Error"));
  }

  return (
    <div className="space-y-16 relative">
      {/* Static background */}
      <div className="fixed inset-0 -z-10 mesh-gradient" />

      {/* Header Section */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 relative"
      >
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/profile.jpg"
              alt="Portrait of Son Tran"
              width={120}
              height={120}
              className="rounded-3xl shadow-2xl float"
              priority
            />
          </motion.div>
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold section-title"
            >
              Contact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[rgb(var(--muted-foreground))] max-w-2xl leading-relaxed"
            >
              Let's connect! I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Contact Form */}
      <motion.section
        ref={formRef}
        initial={{ opacity: 0, y: 30 }}
        animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-3d p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-[--accent]" />
                <h2 className="text-2xl font-bold text-[rgb(var(--foreground))]">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--foreground))]" htmlFor="name">
                    <User className="h-4 w-4 text-[--accent]" />
                    Name
                  </label>
                  <input 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full rounded-xl border border-[rgb(var(--card-border))] bg-[rgb(var(--card))] px-4 py-3 text-[rgb(var(--foreground))] placeholder-[rgb(var(--muted-foreground))] focus:border-[--accent] focus:outline-none focus:ring-2 focus:ring-[--accent]/20 transition-all duration-200" 
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--foreground))]" htmlFor="email">
                    <AtSign className="h-4 w-4 text-[--accent]" />
                    Email
                  </label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full rounded-xl border border-[rgb(var(--card-border))] bg-[rgb(var(--card))] px-4 py-3 text-[rgb(var(--foreground))] placeholder-[rgb(var(--muted-foreground))] focus:border-[--accent] focus:outline-none focus:ring-2 focus:ring-[--accent]/20 transition-all duration-200" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--foreground))]" htmlFor="message">
                    <MessageSquare className="h-4 w-4 text-[--accent]" />
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={6} 
                    className="w-full rounded-xl border border-[rgb(var(--card-border))] bg-[rgb(var(--card))] px-4 py-3 text-[rgb(var(--foreground))] placeholder-[rgb(var(--muted-foreground))] focus:border-[--accent] focus:outline-none focus:ring-2 focus:ring-[--accent]/20 transition-all duration-200 resize-none" 
                    placeholder="Tell me about your project, idea, or just say hello!"
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-black w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </motion.button>
                
                {status && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-[--accent] pt-2 text-center"
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card-3d p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-[--accent]" />
                  <h3 className="text-xl font-bold text-[rgb(var(--foreground))]">Direct Contact</h3>
                </div>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:davidtran.forwork@gmail.com"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200 group"
                  >
                    <Mail className="h-5 w-5 text-[--accent] group-hover:text-white" />
                    <div>
                      <p className="font-medium text-[rgb(var(--foreground))] group-hover:text-white">Email</p>
                      <p className="text-sm text-[rgb(var(--muted-foreground))] group-hover:text-white/80">davidtran.forwork@gmail.com</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/msontran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200 group"
                  >
                    <div className="h-5 w-5 text-[--accent] group-hover:text-white">in</div>
                    <div>
                      <p className="font-medium text-[rgb(var(--foreground))] group-hover:text-white">LinkedIn</p>
                      <p className="text-sm text-[rgb(var(--muted-foreground))] group-hover:text-white/80">Connect with me professionally</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/smtran8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[rgb(var(--card-border))] bg-[rgb(var(--muted))] hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-all duration-200 group"
                  >
                    <div className="h-5 w-5 text-[--accent] group-hover:text-white">⚡</div>
                    <div>
                      <p className="font-medium text-[rgb(var(--foreground))] group-hover:text-white">GitHub</p>
                      <p className="text-sm text-[rgb(var(--muted-foreground))] group-hover:text-white/80">Check out my code</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card-3d p-6"
            >
              <div className="text-center space-y-3">
                <h4 className="text-lg font-semibold text-[rgb(var(--foreground))]">Response Time</h4>
                <p className="text-sm text-[rgb(var(--muted-foreground))]">
                  I typically respond within 24 hours. For urgent matters, feel free to reach out via phone.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}


