import Accordions from "./components/Accordions";
import Button from "./components/Button";
import Buttonoutline from "./components/Buttonoutline";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";

const App = () => {
  return (
    <main className="mt-15 text-zinc-800">
      <secion className="hero">
        <div className="flex flex-wrap px-5 w-[95%] mx-auto items-center">
          <div className="w-full md:w-3/5">
            <h1 className="font-semibold md:text-[56px] text-4xl md:text-6xl">
              Automate the search for your next rental home
            </h1>
            <p className="text-base md:w-3/5 mt-7">
              Easily find your long-term rental apartment in Madrid and
              Barcelona with WhatApartment.
            </p>
            <div className="my-10 grid gap-5">
              {[
                {
                  emoji: "🕒",
                  text: "Specify your preferences, and we will start looking for relevant matches on more than 30 websites.",
                  boldText: "Save time and never miss a listing.",
                },
                {
                  emoji: "⚡",
                  text: "Receive WhatsApp notifications as soon as a property that meets your criteria is listed on the market.",
                  boldText: "Be the first to know.",
                },
                {
                  emoji: "🤝",
                  text: "Add a buddy to the hunt and stay in sync as both of you receive instant notifications.",
                  boldText: "Share your subscription.",
                },
              ].map((items) => (
                <p key={items.text} className="text-base flex gap-2 md:w-3/5">
                  <span className="text-3xl">{items.emoji}</span>
                  <span className="w-full">
                    <span className="font-bold">{items.boldText} </span>
                    {items.text}
                  </span>
                </p>
              ))}
            </div>
            <Button text="Start Your Search Now" />
          </div>
          <div className="w-full md:w-2/5 relative mt-5 md:mt-0">
            <div className="overlay absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 h-fit w-[90%] rounded-xl bg-white/95 px-5 py-4">
              <div className="over-header flex items-center justify-between">
                <h2 className="flex items-center text-base font-bold">
                  <img
                    src="images/over-logos.svg"
                    className="size-10"
                    alt="overlogos"
                  />
                  WhatApartment
                </h2>
                <p className="text-base">ahora</p>
              </div>
              <div className="over-body mt-5">
                <p className="text-base">
                  🏡 ¡Nueva propiedad disponible! Se acaba de publicar un
                  inmueble que coincide con tus preferencias:
                </p>
                <div className="subtext text-base mt-5">
                  <p>📍 Ubicación: Carrer de Girona, l’Eixample, Barcelona</p>
                  <p>🛏️ Habitaciones: 2 </p>
                  <p>📏 Metros cuadrados: 80 </p>
                  <p>💰 Precio por mes: 1.700€</p>
                </div>
              </div>
            </div>
            <img
              src="/images/hero-img.webp"
              className="w-full"
              alt="hero-image"
            />
          </div>
        </div>
      </secion>

      <section className="works bg-[#F7F7F7] mt-20 relative pt-8 md:pt-0 pb-20 md:pb-10">
        <div className="-translate-y-5 mb-5 hidden md:block">
          <p className="text-xl text-zinc-800 w-[60%] mx-auto font-bold text-center">
            On average, every rental property in Madrid and Barcelona receives
            more than 50 contact requests. Be the first with WhatApartment as we
            scan more than 30 websites.
          </p>
          <div className="flex gap-5 justify-center items-center mt-2">
            {[
              {
                logo: "/images/idealista.webp",
                alt: "idealista",
              },
              {
                logo: "/images/fotocasa-logo.webp",
                alt: "fotocasa",
              },
            ].map((img) => (
              <img
                key={img.alt}
                src={img.logo}
                alt={img.alt}
                className="w-30 h-auto"
              />
            ))}
          </div>
        </div>
        <SectionHeading text="How does WhatApartment work?" />
        <div className="grid md:grid-cols-3 gap-5 mt-10 w-[90%] mx-auto">
          {[
            {
              heading: "Set your preferences",
              img: "/images/work-1.svg",
              text: "Customize your search filtering by location, price, and size. Now, sit back while we scan more than 30 websites.",
            },
            {
              heading: "Receive matches in real-time on WhatsApp and email",
              img: "/images/work-2.svg",
              text: "As soon as a property fitting your requirements is listed, we will send it to you (and your buddy) on WhatsApp and email.",
            },
            {
              heading: "Be the first to respond and secure your dream rental",
              img: "/images/work-3.svg",
              text: "Quickly respond in a few clicks and guarantee your viewing.",
            },
          ].map((col, key) => (
            <div
              key={col.heading}
              className="w-full md:w-[90%] mx-auto text-center"
            >
              <img
                src={col.img}
                alt={col.heading}
                className="mx-auto w-full h-96 object-contain"
              />
              <p className="text-4xl text-center text-blue-500 mb-4">
                {key + 1}
              </p>
              <h3 className="text-2xl font-medium mb-4">{col.heading}</h3>
              <p className="text-base text-zinc-600">{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="search-prefernce bg-indigo-800 py-20 h-[40rem] relative">
        <SectionHeading text="Set Your Preferences" color="text-white" />
        <p className="text-xl text-white md:w-[60%] mx-auto text-center mt-5 mb-15">
          Create your search profile in less than 5 minutes
        </p>
        <div className="w-[90%] md:w-[80%] md:absolute md:left-1/2 md:-translate-x-1/2 mx-auto rounded-xl pt-10 bg-white shadow-2xl shadow-zinc-700/25">
          <div className="flex items-center justify-center gap-5 px-5 md:px-15">
            <span className="size-8 rounded-full border-2 border-blue-500 shrink-0 flex justify-center items-center">
              <span className="size-5.5 bg-blue-500 inline-block rounded-full"></span>
            </span>
            <span className="bg-[#CFD6DC] w-[50%] md:min-w-40 h-1 md:w-[30%]"></span>

            <span className="size-8 rounded-full border-2 border-blue-500 shrink-0 flex justify-center items-center"></span>

            <span className="bg-[#CFD6DC] w-[50%] md:min-w-40 h-1 md:w-[30%]"></span>

            <span className="size-8 rounded-full border-2 border-blue-500 shrink-0 flex justify-center items-center"></span>
          </div>
          <div className="flex flex-wrap items-center mt-15 gap-y-8 px-5 md:px-15">
            <div className="w-full md:w-1/2">
              <form action="/">
                <div className="w-full">
                  <label className="w-full block mb-2 font-semibold">
                    City
                  </label>
                  <select className="border-[1px] cursor-pointer  border-zinc-400 w-full md:w-[80%] px-3 py-3 rounded-lg">
                    <option>India</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div className="w-full mt-5">
                  <label className="w-full block mb-2 font-semibold">
                    City
                  </label>
                  <select className="border-[1px] cursor-pointer  border-zinc-400 w-full md:w-[80%] px-3 py-3 rounded-lg">
                    <option>India</option>
                    <option>Canada</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/map.webp" alt="map" className="w-full" />
            </div>
          </div>
          <div className="border-t-[1px] mt-8 border-zinc-400 flex justify-end px-5 md:px-15 py-3">
            <Button text="Next" />
          </div>
        </div>
      </section>

      <section className="mt-100 md:mt-90">
        <div className="grid md:grid-cols-2 gap-10 items-center w-[90%] mx-auto">
          <div className="w-full">
            <img src="/images/mockup.webp" alt="mockup-mobile" />
          </div>
          <div className="w-full">
            {[
              {
                emoji: "⌛",
                text: "Stop spending countless hours to find a rental. We will do all the work for you monitoring more than 30 websites. Less time searching, more	time imagining where to put your couch.",
                boldText: "Save time and never miss a listing.",
              },
              {
                emoji: "🔔",
                text: "Receive WhatsApp notifications as soon as a property that meets your criteria is listed on the market.",
                boldText: "Be the first to know.",
              },
              {
                emoji: "👥",
                text: "Add a buddy to the hunt and stay in sync as both of you receive instant notifications.",
                boldText: "Share your subscription.",
              },
              {
                emoji: "💸",
                text: "Add a buddy to the hunt and stay in sync as both of you receive instant notifications.",
                boldText: "Share your subscription.",
              },
            ].map((items) => (
              <p key={items.text} className="text-base flex gap-2 mb-10">
                <span className="text-3xl">{items.emoji}</span>
                <span className="w-full">
                  <span className="font-medium w-full block text-xl mb-2">
                    {items.boldText}{" "}
                  </span>
                  {items.text}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Buttonoutline text="See pricing plans" />
        </div>
      </section>

      <section className="mt-20 reviews bg-indigo-800 py-20">
        <SectionHeading
          text="What others say about WhatApartment"
          color="text-white"
        />
        <div className="grid mt-15 md:grid-cols-4 gap-5 w-[90%] mx-auto">
          {Array(4)
            .fill(10)
            .map((items) => (
              <div key={items} className="bg-white rounded-lg px-5 py-5">
                <img
                  src="/images/review-comma.svg"
                  className="size-10"
                  alt="comma-svg"
                />
                <p className="text-base mt-2">
                  <span className="font-medium">
                    “We found an apartment within 3 weeks with WhatApartment!.
                  </span>
                  We received emails from WhatApartment at an amazing speed. And
                  we often were one of the first to respond!”
                </p>
                <div className="mt-8">
                  <img
                    src="/images/reviwer.webp"
                    alt="review-img"
                    className="size-15 rounded-full mb-1"
                  />
                  <h3 className="font-lg font-bold mb-1">Marina Brand</h3>
                  <p className="font-base text-zinc-600">
                    Written on Trustpilot
                  </p>
                  <img
                    src="/images/stars.svg"
                    alt="stars"
                    className="w-30 mt-3 h-auto"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-8">
          <Buttonoutline
            colors="text-white border-white"
            text="See all reviews"
          />
        </div>
      </section>

      <section className="my-20">
        <SectionHeading text="Frequently Asked Questions" />
        <Accordions />
        <div className="flex justify-center mt-8">
          <Buttonoutline
            text="See how it works & other FAQs"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
