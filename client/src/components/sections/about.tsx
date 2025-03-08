import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Our Team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              About Intelion
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At Intelion, we're revolutionizing the way people invest by combining cutting-edge AI technology with human expertise.
              </p>
              <p>
                Our team of financial experts and data scientists work together to provide you with the most accurate and reliable investment insights.
              </p>
              <p>
                With over a decade of experience in fintech and artificial intelligence, we're committed to helping our clients achieve their financial goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
