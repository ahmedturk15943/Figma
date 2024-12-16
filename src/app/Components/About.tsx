import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
      <section className="w-full px-4 py-16 flex flex-col md:flex-row items-center bg-black text-white">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-white">About us</h2>
          <h3 className="text-xl font-semibold text-white">
            We Create the best foody product
          </h3>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat. Lacus nisi, et ac dapibus sit eu velit in
            consequat. Quisque diam pellentesque bibendum non dui volutpat
            fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit
            
          </p>
          <button className="ml-4 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">
          Read More
        </button>
        </div>

        <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center md:items-start">
          <Image
            src="https://s3-alpha-sig.figma.com/img/9a83/42b7/720836129d2c2c37fd0b40cbbcdd80c0?Expires=1734
            //307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PLHguv59DWOxGuAuCKDt5ov~Z5eMKZZKKSNtJ3nH7Q
            // fyp8NxXk7crXGwen3Zv8~JwzEbsPjFVXwAsNsW7qZK9U-Re8BVWt9YMaMpS-OgOzsNCiTjQORF9uEwYcSx3UgqLiyYhXTv
            // mUTqIGZi6fNHU8jQ~O8EPLB-QaD9uMZcYp40DbQXQSC8d7Al1I83ruUXU1qJHn5VHBc4o9avo7cGiqfji5aagWyAegVR
            // 1zyFrBVZ-wCLXi4yYlGmhy~sFabR6D914n3uIdvR7nqvCNyPajac4orGTFk1rA-FHQS~2k5HiPLN2pD8AZp-U2v0IIWNXxMvCa
            // -TPxXnVNA8cmX26w__"
            alt="Large"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="flex w-full justify-between space-x-4">
            <Image
              src="https://s3-alpha-sig.figma.com/img/b3c4/f89f/63d784f7e0694faa1abbb2c2e8c2f4cd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgB9z37xRLuW7sMPvnOqxPOKjAigxv8Uwnj22Q5iahVAndmPxD1oUuD-RFFatiri7gITC88MYxSLiOdQGtzJng86b67NnhiyRVSxPNj9ZKo~wMnKlO0Bob7lPHwMLwHWXmL9wvyiK-KLgeNWSIbeei7BvrZKn3Igbwuxz06CRAdM7Fco4KHp526n0lh1HEp7ASHN0P1DeZwG7E9WsTRCbpgBKUOMD~ldtkTEgq9G-W0TNB2MOPTrxgCIGbNmXdK~IKMPWcEqeff~cHmJ-vH~X0NyPaSYRQtzHRro-762NHzjIPMnHxsfAgbLX6yqNWsJzV~iu9NSCnGQNMlgvEg8wg__"
              alt="Small 1"
              className="w-1/2 h-32 object-cover rounded-lg shadow-md"
            />
            <Image
              src="https://s3-alpha-sig.figma.com/img/ebbe/da0a/90e9539d34a966a134a41b5fb29a7b88?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rr56~i-uuZONJiud90jVfZmmiJBuPhkZP4hHMc0HhkpwHM9pH7xCNVVI56TJ9tVNj2saFTKBQ5T~XCflOY6MvZ5ZbbTeAQIRlrFxVFBGLr589nJBAUvWWMw75X8-I1gf83Tly5V7DY0Ma-hvy0OxKl5BJKQ4u3Vzq8pjitB4OtsolTp7lD4ivJxdQxDP8pVLPVQozpQgpFJkgy8S5zrllNoO0Cn0mKn8rySPKjUA0-cSgeeHchknTlQUNFpOV4ndIWNKc7zAs4L3upfZooUJFGwzICbi0xNOKIgck~PU3rGkxshb1sEw3KdabqDcrOU5RvOEtPVCjnXT~irAPhKR0A__"
              alt="Small 2"
              className="w-1/2 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      </div>
    
  )
}

export default About
