import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <div>
      <div>
      <section className="w-full px-4 py-16 bg-black mb-9">
        <div className="container mx-auto space-y-8">
          {/* Heading Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900"> Food Category
Choose Food Iteam
Save 30%
Fast Food Dish</h2>
            <h3 className="text-xl font-semibold text-gray-700">Subheading</h3>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <Image
                src="path-to-image1.jpg"
                alt="Image 1"
                className="w-full h-[489px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="path-to-image2.jpg"
                alt="Image 2"
                className="w-full h-[489px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="path-to-image3.jpg"
                alt="Image 3"
                className="w-full h-[489px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="path-to-image4.jpg"
                alt="Image 4"
                className="w-full h-[489px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Category
