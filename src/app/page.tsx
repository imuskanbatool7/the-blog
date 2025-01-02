
import React from "react";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import {posts} from "./Data/page"; 
import Image from "next/image";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen items-center justify-center"
        style={{
          backgroundImage: "url('/herojeep.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center px-5 sm:px-8 md:px-16 lg:px-32 text-white font-mono">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Adventure Awaits: Embrace the Jeep Girl Spirit
          </h1>
          <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-medium mb-8">
            Driven by passion, guided by the road, and fueled by freedom.
          </p>
        </div>
      </div>

      <div className="text-center mb-12 p-4 pt-12 m-4">
        <h2 className="text-3xl font-bold md:text-4xl font-mono text-green-950">
          A Journey Through Nature&apos;s Wonders
        </h2>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="mb-8 p-4 bg-white shadow-cyan-600 shadow-md rounded-lg transition duration-300"
          >
            <Link className="block group" href={`/Blog/${post.id}`}>
              <div className="relative w-full mb-4 rounded-md">
                {/* Display Image */}
                <Image
                  className="w-full object-cover transform group-hover:scale-90 transition duration-300"
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                />
              </div>

              <h2 className="text-xl font-semibold md:text-2xl hover:text-cyan-700">
                {post.title}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-500">
                {post.description}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

