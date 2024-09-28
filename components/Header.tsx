"use client"

import React from "react";
import { Button } from "@/components/ui/button";

export function Header() {
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
              className="text-black hover:text-blue-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="text-black hover:text-blue-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-black hover:text-blue-500"
            >
              Pricing
            </button>
          </li>
          <li>
            <button
              className="text-black hover:text-blue-500"
            >
              FAQ&apos;s
            </button>
          </li>
          <li>
            <button
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
        >
          Log In
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}
