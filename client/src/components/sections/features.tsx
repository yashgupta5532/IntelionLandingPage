import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ChartBar, Shield, Users } from "lucide-react";

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze market trends and provide personalized insights.",
    icon: Brain,
  },
  {
    title: "Real-time Monitoring",
    description: "Track your investments and market changes in real-time with instant notifications.",
    icon: ChartBar,
  },
  {
    title: "Enhanced Security",
    description: "Bank-grade encryption and security measures to protect your investments.",
    icon: Shield,
  },
  {
    title: "Expert Support",
    description: "Access to financial experts and dedicated customer support 24/7.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features for Smart Investing
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to make informed investment decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
