"use client";

import { memo } from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-20 pb-10 border-gray-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-4xl font-serif italic font-bold tracking-wide text-black">
            Leyla
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Crafted elegance for modern lifestyle. Unique products made with
            love.
          </p>

          <div className="flex gap-4 mt-4">
            {[IoLogoInstagram, IoLogoFacebook, IoLogoTwitter].map((Icon, i) => (
              <div
                key={i}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-purple-100 hover:border-purple-300 hover:bg-purple-300 hover:text-white transition cursor-pointer"
              >
                <Icon className="text-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold font-sans text-lg text-black mb-5">
            Company
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <Link href="/about" className="hover:text-black transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-black transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-black transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold font-sans text-lg text-black mb-5">
            Support
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <Link href="/faq" className="hover:text-black transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-black transition">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="/delivery" className="hover:text-black transition">
                Shipping & Delivery
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h3 className="font-semibold font-sans text-lg text-black">
            Stay Updated
          </h3>
          <p className="text-gray-600 text-sm">
            Subscribe and get exclusive offers and updates.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:border-purple-200"
            />
            <button className="px-5 py-3 bg-purple-200 text-black rounded-xl hover:bg-purple-400 transition font-medium">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 text-center text-gray-600 text-sm border-t border-gray-300 pt-6">
        © {new Date().getFullYear()} Leyla — Designed with Elegance. All rights
        reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
