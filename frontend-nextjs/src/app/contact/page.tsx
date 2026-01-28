// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-primary">
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white px-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
//           <p className="text-xl font-light">We&apos;d love to hear from you</p>
//         </motion.div>
//       </section>

//       {/* Content */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl font-display font-bold mb-8">Send a Message</h2>
//               <form className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">First Name</label>
//                     <Input placeholder="John" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Last Name</label>
//                     <Input placeholder="Doe" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email</label>
//                   <Input type="email" placeholder="john@example.com" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Subject</label>
//                   <Input placeholder="How can we help?" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Message</label>
//                   <Textarea placeholder="Your message..." rows={5} />
//                 </div>
//                 <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
//                   Send Message
//                 </Button>
//               </form>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="space-y-8"
//             >
//               <h2 className="text-3xl font-display font-bold mb-8">Get in Touch</h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-5 h-5 text-gold" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Visit Our Boutique</h3>
//                     <p className="text-muted-foreground">
//                       123 Fragrance Avenue<br />
//                       Paris, France 75008
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-5 h-5 text-gold" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Call Us</h3>
//                     <p className="text-muted-foreground">+33 1 23 45 67 89</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-5 h-5 text-gold" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-1">Email Us</h3>
//                     <p className="text-muted-foreground">hello@scenthaven.com</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-8 border-t border-border">
//                 <h3 className="font-semibold mb-4">Business Hours</h3>
//                 <div className="space-y-2 text-muted-foreground">
//                   <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
//                   <p>Saturday: 10:00 AM - 6:00 PM</p>
//                   <p>Sunday: Closed</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact De-Hac
          </h1>
          <p className="text-xl font-light">
            We’re here to assist you with every scent journey
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input placeholder="Order, inquiry, or support" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea placeholder="Write your message here..." rows={5} />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Location</h3>
                    <p className="text-muted-foreground">
                      Online Store<br />
                      Serving Customers Across Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Representatives</h3>
                    <p className="text-muted-foreground">
                      <strong>Karachi:</strong><br />
                      <a href="tel:03329996160">0332-9996160</a><br />
                      <a href="tel:03262015198">0326-2015198</a>
                      <br /><br />
                      <strong>Lahore:</strong><br />
                      <a href="tel:03097286028">0309-7286028</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Support</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:shopomind@gmail.com">
                        shopomind@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Support Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday – Saturday: 10:00 AM – 8:00 PM</p>
                  <p>Sunday: Online inquiries only</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
