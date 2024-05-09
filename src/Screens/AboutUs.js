import React from 'react';
import Head from '../Components/Head';
import Layout from './../Layout/Layout';

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Netflixo
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>            Stories move us. 
                  They make use feel more emotional, see new perspectives,
                         and bring us close to each other.

                </p>
                <p>
                                                      At Netflixo, we want to entertain the world. 
                  Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games. 
                                   Our members control what they want to watch, when they want it, with no ads, in one simple subscription.
                   We are streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere.
                      We are the biggest fans of entertainment globally, and we are always looking to help you find your next favorite story.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Completely free, without registration! Lorem Ipsum is simply
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/about2.jpg"
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
