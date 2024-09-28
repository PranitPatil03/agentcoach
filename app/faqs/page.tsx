import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is AgentCoach.ai?",
    answer:
      "AgentCoach.ai is an AI-powered coaching platform designed specifically for real estate agents. It provides personalized advice, strategies, and insights to help agents improve their skills and grow their business.",
  },
  {
    question: "How does AgentCoach.ai work?",
    answer:
      "AgentCoach.ai uses advanced AI algorithms to analyze your performance data, market trends, and industry best practices. It then provides tailored recommendations and coaching sessions to help you improve in specific areas of your real estate business.",
  },
  {
    question: "Is AgentCoach.ai suitable for new agents?",
    answer:
      "Absolutely! AgentCoach.ai is designed to help agents at all experience levels. For new agents, it provides foundational knowledge and strategies to kickstart your career. As you grow, the AI adapts its coaching to match your evolving needs.",
  },
  {
    question: "Can I access AgentCoach.ai on my mobile device?",
    answer:
      "Yes, AgentCoach.ai is fully responsive and can be accessed on any device with an internet connection, including smartphones and tablets. We also offer a mobile app for both iOS and Android for a seamless on-the-go experience.",
  },
  {
    question: "How often is the AI updated with new information?",
    answer:
      "We continuously update our AI model with the latest real estate trends, market data, and industry insights. The system is refreshed daily to ensure you always have access to the most current and relevant information.",
  },
  {
    question: "Is my data secure with AgentCoach.ai?",
    answer:
      "We take data security very seriously. All your information is encrypted and stored securely. We adhere to strict privacy policies and never share your personal data with third parties without your explicit consent.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts, and you can easily manage your subscription settings from your account dashboard.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for new users. This allows you to explore all the features of AgentCoach.ai and see how it can benefit your real estate career before committing to a paid plan.",
  },
];

export default function FAQ() {
  return (
    <div
      className="bg-[#001D5B] text-white py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger
                className="text-left"
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-blue-200"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
