import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="hero bg-base-300 min-h-screen gap-2">
      <div className="hero-content flex-col lg:flex-row-reverse gap-4">
        <img
          alt="Tailwind CSS hero component"
          src="https://images.unsplash.com/photo-1768987439370-bd60d3d0b28b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <span className="badge badge-secondary mb-4">NEW SEASON</span>
          <h1 className="text-5xl font-bold">Gear for the long way round</h1>
          <p className="py-6">
            Tents, packs and stoves, tested on real trails and shipped in two
            days
          </p>
          <Link href="/Shop" className="btn btn-primary mr-4">
            Shop New Arrivals
          </Link>
          <Link href="/Journal" className="btn btn-outline btn-primary">
            Read The Journal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
