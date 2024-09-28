"use client"

import React from "react";
import { Button } from "@/components/ui/button";

export function Header({ setCurrentPage }: { readonly setCurrentPage: (page: string) => void }) {
  return (
    <header
      className="py-4 px-6 flex justify-between items-center bg-white"
    >
      <div
        className="text-2xl font-bold text-black"
      >
        agentcoach.ai
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setCurrentPage("home")}
              className="text-black hover:text-blue-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("about")}
              className="text-black hover:text-blue-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("pricing")}
              className="text-black hover:text-blue-500"
            >
              Pricing
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("faqs")}
              className="text-black hover:text-blue-500"
            >
              FAQ&apos;s
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("blog")}
              className="text-black hover:text-blue-500"
            >
              Blog
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <Button
          variant="ghost"
          className="text-black hover:text-blue-500"
          onClick={() => setCurrentPage("login")}
        >
          Log In
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setCurrentPage("signup")}
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}
