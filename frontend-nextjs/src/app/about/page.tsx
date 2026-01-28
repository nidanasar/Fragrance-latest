// "use client";

// import { motion } from "framer-motion";

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center bg-primary">
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center text-white px-4"
//         >
//           <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our Story</h1>
//           <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
//             Crafting timeless fragrances since 1985
//           </p>
//         </motion.div>
//       </section>

//       {/* Content */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
//               The Art of Perfumery
//             </h2>

//             <p className="text-lg text-muted-foreground leading-relaxed">
//               At De-Hac, we believe that fragrance is more than just a scent—it&apos;s an expression
//               of identity, a memory captured in a bottle, and an art form perfected over generations.
//             </p>

//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Founded in the heart of Grasse, France, our house has dedicated nearly four decades
//               to the pursuit of olfactory excellence. Each fragrance in our collection is a testament
//               to the mastery of our perfumers, who blend rare ingredients sourced from the world&apos;s
//               most pristine locations.
//             </p>

//             <div className="grid md:grid-cols-3 gap-8 py-12">
//               <div className="text-center">
//                 <div className="text-4xl font-display font-bold text-gold mb-2">40+</div>
//                 <p className="text-muted-foreground">Years of Excellence</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-display font-bold text-gold mb-2">200+</div>
//                 <p className="text-muted-foreground">Unique Fragrances</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-display font-bold text-gold mb-2">50+</div>
//                 <p className="text-muted-foreground">Countries Worldwide</p>
//               </div>
//             </div>

//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Our commitment to sustainability and ethical sourcing ensures that every bottle
//               not only smells extraordinary but also contributes to a better world. We work
//               directly with farmers and artisans, supporting communities while obtaining the
//               finest raw materials.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="De-Hac Luxury Perfume"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            About De-Hac
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Embrace the Essence of Refined Luxury
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Our Story
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2021, De-Hac is a Pakistan-based fragrance brand created
              with a single purpose — to offer high-quality, long-lasting scents
              inspired by the world’s most iconic luxury perfumes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our creations draw inspiration from legendary fragrance houses
              such as Creed, Tom Ford, Roja Haute, and Ensar Oud. Rather than
              imitation, we focus on recreating the *essence and experience* of
              these masterpieces through our own refined interpretations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Each De-Hac fragrance is carefully blended using premium ingredients,
              balanced compositions, and modern perfumery techniques to ensure
              exceptional projection, depth, and longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose De-Hac */}
      <section className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Choose De-Hac
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                Luxury-Inspired Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                Our fragrances are inspired by globally admired scent profiles,
                offering a premium experience at an accessible price.
              </p>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                Long-Lasting Performance
              </h3>
              <p className="text-muted-foreground">
                Designed for impressive longevity and strong presence, suitable
                for both daily wear and special occasions.
              </p>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                Crafted in Pakistan
              </h3>
              <p className="text-muted-foreground">
                Proudly developed locally with a global standard of quality,
                elegance, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder’s Note */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Founder’s Note
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed italic">
              “De-Hac was born from a deep appreciation for fine fragrances and
              the belief that luxury should be experienced, not restricted. Every
              bottle represents passion, precision, and the pursuit of excellence.
              Our goal is simple — to let your scent speak before you do.”
            </p>

            <p className="text-center text-primary font-semibold">
              — Founder, De-Hac
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
