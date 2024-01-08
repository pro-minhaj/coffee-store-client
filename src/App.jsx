import Popular_Products from './Compnents/Popular_Products/Popular_Products';
import React from 'react';
import logo1 from './assets/Logo/1.png';
import logo2 from './assets/Logo/2.png';
import logo3 from './assets/Logo/3.png';
import logo4 from './assets/Logo/4.png';

function App() {

  return (
    <div>
      {/* Hero Section */}
      <div className={`w-full bg-cover bg-center bg bg-[url('./assets/coffee-bg/coffee-bg.jpeg')]`}>
        <div className="container mx-auto py-20 px-3 md:px-0 md:py-52">
          <div className="text-center">
            <h1 className="text-white text-[55px] font-normal font-['Rancho']">Would you like a Cup of Delicious Coffee?</h1>
            <p className="text-white text-base font-normal font-['Raleway'] leading-[30px]">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="text-neutral-800 btn hover:text-white mt-5 bg-orange-300 text-2xl font-normal font-['Rancho']">Learn More</button>
          </div>
        </div>
      </div>
      <div className="bg-stone-200">
        <div className="container mx-auto px-6 lg:px-0 grid md:grid-cols-2 lg:grid-cols-4 py-6 gap-10 text-center lg:text-start">
          <div>
            <div className='flex justify-center lg:justify-start'>
              <img src={logo1} alt="" />
            </div>
            <h2 className="text-stone-800 text-[35px] font-normal font-['Rancho']">Awesome Aroma</h2>
            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">You will definitely be a fan of the design & aroma of your coffee</p>
          </div>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <img src={logo2} alt="" />
            </div>
            <h2 className="text-stone-800 text-[35px] font-normal font-['Rancho']">High Quality</h2>
            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">We served the coffee to you maintaining the best quality</p>
          </div>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <img src={logo3} alt="" />
            </div>
            <h2 className="text-stone-800 text-[35px] font-normal font-['Rancho']">Pure Grades</h2>
            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">The coffee is made of the green coffee beans which you will love</p>
          </div>
          <div className=''>
            <div className='flex justify-center lg:justify-start'>
              <img src={logo4} alt="" />
            </div>
            <h2 className="text-stone-800 text-[35px] font-normal font-['Rancho']">Proper Roasting</h2>
            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
        </div>
      </div>
      {/* Our Popular Products */}
      <div>
        <Popular_Products></Popular_Products>
      </div>
    </div>
  )
}

export default App
