"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    description: "Perfect for individual agents starting their journey",
    features: [
      "AI-powered chatbot assistance",
      "Basic real estate market insights",
      "Limited access to training resources",
      "Email support",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "$79",
    yearlyPrice: "$790",
    description: "Ideal for growing real estate professionals",
    features: [
      "All Basic features",
      "Advanced AI coaching sessions",
      "Comprehensive market analysis tools",
      "Unlimited access to training resources",
      "Priority email and chat support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "Tailored solutions for large agencies and brokerages",
    features: [
      "All Pro features",
      "Custom AI models for your specific needs",
      "Dedicated account manager",
      "API access for integration",
      "24/7 premium support",
    ],
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div
      className=" text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
        >
          Choose Your AI Coaching Plan
        </h1>
        <p
          className="text-xl text-center text-gray-400 mb-12"
        >
          Unlock the power of AI to accelerate your real estate career
        </p>

        <Tabs
          defaultValue="monthly"
          className="mb-8 flex flex-col items-center "
          onValueChange={(value) => setBillingCycle(value)}
        >
          <TabsList
            className="flex justify-center space-x-4 bg-blue-900/30 rounded-full p-5 w-1/5 h-12"
          >
            <TabsTrigger
              value="monthly"
              className="p-2 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="p-2 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <p
              className="text-center text-gray-400 mt-4"
            >
              Pay monthly, cancel anytime
            </p>
          </TabsContent>
          <TabsContent value="yearly">
            <p
              className="text-center text-gray-400 mt-4"
            >
              Save up to 20% with annual billing
            </p>
          </TabsContent>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" // Updated for responsiveness
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#001D5B] rounded-lg p-8 flex flex-col"
              >
                <h2
                  className="text-2xl font-bold mb-4"
                >
                  {plan.name}
                </h2>
                <p
                  className="text-4xl font-bold mb-4"
                >
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                  {plan.monthlyPrice !== "Custom" && (
                    <span
                      className="text-xl font-normal"
                    >
                      {billingCycle === "monthly" ? "/mo" : "/yr"}
                    </span>
                  )}
                </p>
                <p className="text-gray-400 mb-6">
                  {plan.description}
                </p>
                <ul className="mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center mb-2"
                    >
                      <Check
                        className="text-green-500 mr-2"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    index === 1
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-white text-blue-900 hover:bg-gray-100"
                  } text-sm md:text-base`} // Added text size adjustment for responsiveness
                >
                  {index === 2 ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is here to help you choose the perfect plan for your needs.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
