import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div>
      {/* Navbar with Search Box */}
      <nav className="bg-black p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-lg font-bold">Your Logo</div>

          {/* Navbar Links */}
          <div className="flex space-x-6 text-white">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#menu" className="hover:text-orange-500">Menu</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>

          {/* Search Box in Navbar */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 text-white bg-black border-2 border-orange-500 rounded hidden sm:block w-48 md:w-64"
            />
            <FaSearch className="text-white w-5 h-5" />
          </div>

          {/* Cart Icon */}
          <div className="flex items-center text-white">
            <FaShoppingBag className="w-5 h-5" />
            <span className="ml-2">0</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-white body-font bg-black relative pt-24">
        {/* Lines and Icons */}
        <div className="absolute left-4 top-1/4 flex flex-col items-center">
          {/* Upper Line */}
          <div className="w-1 h-12 bg-orange-400"></div>
          {/* Icons */}
          <div className="flex flex-col items-center space-y-2">
            <FaFacebook className="text-orange-400" />
            <FaTwitter className="text-orange-400" />
            <FaPinterest className="text-orange-400" />
          </div>
          {/* Lower Line */}
          <div className="w-1 h-12 bg-orange-400"></div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              <span style={{ color: 'rgba(255, 159, 13, 1)' }}>Its Quick & Amusing!</span>
            </h1>
            {/* Add some gap */}
            <div className="mb-6"></div>
            {/* Second Heading */}
            <h2 className="sm:text-2xl text-xl font-medium text-white">
              The Art of Speed Food Quality
            </h2>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
              See Menu
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">
                See Menu
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://s3-alpha-sig.figma.com/img/c057/0cdb/15aa0f4f312fd5f483e60b93f68c90ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KekfcZ1FIgdsuduvG3FEaZPDcd~cuC4U5xL0MrMaLnZLM8ysmXhkakM3Wi16kBm6z0lF7hJCk9jSn1MOH0QFdEhcLvzL8SA1jAPlckxHiUJ17gn9zzjRKJzeV-mP51r80~TphLYJubdk3EhEue7Ldy0ychNDXLN5YY8E-fyne3JrQx3juJzYCGUfyYS77GVZfDLbYFhQuzRVlHUqT~eOKheB~nu6Co0-HYJOisDUPT9TWnrCVGWOVJbNu7E4PnYFbGJoBoQw5Alswn1pPKy8ea4ylBQ37PJ9wAZ160Av0DHiGgcdmKPV0C2pbPkG37csFCOGi1TLjtvXspbqQYCyrg__"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
