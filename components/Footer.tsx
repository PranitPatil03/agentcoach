import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-[#001D5B] text-white py-16 px-6"
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            AGENTCOACH.AI
          </h3>
          <p className="text-sm text-gray-300">
            Empowering real estate professionals with AI-driven coaching and
            insights.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                FAQ&apos;s  {/* Changed to use &apos; for apostrophe */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Contact Us
          </h4>
          <p className="text-sm">
            Email: support@agentcoach.ai
          </p>
          <p className="text-sm">
            Phone: (555) 123-4567
          </p>
          <p className="text-sm">
            Address: 123 AI Street, Tech City, TC 12345
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">
            Newsletter
          </h4>
          <p className="text-sm">
            Stay updated with our latest news and offers.
          </p>
          <form
            className="flex flex-col space-y-2"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            />

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div
        className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-gray-400"
      >
        <p>
          © 2024 Agentcoach.ai. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
