const Footer = () => {
  return (
    <footer
      className={`bg-indigo-800 pt-10`}
    >
      <div className="w-[90%] mx-auto flex gap-5 flex-wrap justify-between">
        <div className="w-full md:w-fit">
          <img
            src="/images/logo.svg"
            className="w-80 h-auto"
            alt="logo"
          />

          <p className="paragraph text-white mt-3 md:w-[30rem]">
            WhatsApparement Professionals offers expert solutions in taxation, compliance,
            legal services and business advisory. We simplify complex processes,
            ensuring businesses stay compliant and thrive with confidence. Trust
            Us for reliable, efficient and hassle-free professional services
            tailored to your needs.
          </p>
        </div>
        {[
          {
            heading: "Quick Links",
            links: [
              "about us",
              "services",
              "industries",
              "careers",
              "contact us",
            ],
          },
          {
            heading: "Contact Us",
            links: [
              "support@whatapartment.com",
              "+61 7 3384 1822",
            ],
          },
        ].map((item, key) => (
          <div
            key={item.heading}
            className={`w-full  ${
              key == 1 ? "md:w-[20%]" : "md:w-fit"
            } text-white`}
          >
            <h3 className="mb-3 font-semibold w-fit">{item.heading}</h3>
            <div className="grid gap-2">
              {item.links.map((link) => {
                if (typeof link === "string") {
                  return (
                    <a
                      className="capitalize text-white hover:text-blue-400 transition duration-300"
                      href={`/${link.split(" ").join("")}`}
                      key={link}
                    >
                      {link}
                    </a>
                  );
                }

                return (
                  <a
                    className={`break-words text-white hover:text-blue-400 transition duration-300`}
                    href={link.href}
                    key={link.href}
                  >
                    {link.text}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
        <div className="w-full flex-wrap md:w-fit content-start flex gap-5 md:justify-end">
          {[
            {
              icon: "/images/facebook.svg",
              alt: "facebook-icon",
            },
            {
              icon: "/images/insta.svg",
              alt: "instagram-icon",
            },
            {
              icon: "/images/twitter.svg",
              alt: "twitter-icon",
            },
            {
              icon: "/images/youtube.svg",
              alt: "youtube-icon",
            },
          ].map((link, key) => (
            <a key={link + key} className="size-fit" href="/">
              <img
                src={link.icon}
                width={0}
                height={0}
                alt={link.alt}
                className="size-8 duration-200 hover:scale-120"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-white mt-10 text-center py-3">
        <p className="paragraph">All Rights Reserved By VTAX 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
