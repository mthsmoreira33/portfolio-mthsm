import { useTranslation } from "react-i18next";

interface GithubLogoProps {
  isDarkMode: boolean;
}

const GithubLogo = ({ isDarkMode }: GithubLogoProps) => (
  <svg viewBox="0 0 128 128" className="w-20 h-20">
    <g fill={isDarkMode ? "#FFFFFF" : "#181616"}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
      ></path>
      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
    </g>
  </svg>
);

const LinkedinLogo = () => (
  <svg viewBox="0 0 128 128" className="w-20 h-20">
    <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path>
    <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
  </svg>
);

const InstagramLogo = () => (
  <svg
    className="w-20 h-20"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="28"
      height="28"
      rx="6"
      fill="url(#paint0_radial_87_7153)"
    />
    <rect
      x="2"
      y="2"
      width="28"
      height="28"
      rx="6"
      fill="url(#paint1_radial_87_7153)"
    />
    <rect
      x="2"
      y="2"
      width="28"
      height="28"
      rx="6"
      fill="url(#paint2_radial_87_7153)"
    />
    <path
      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
      fill="white"
    />
    <defs>
      <radialGradient
        id="paint0_radial_87_7153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
      >
        <stop stop-color="#B13589" />
        <stop offset="0.79309" stop-color="#C62F94" />
        <stop offset="1" stop-color="#8A3AC8" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_87_7153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
      >
        <stop stop-color="#E0E8B7" />
        <stop offset="0.444662" stop-color="#FB8A2E" />
        <stop offset="0.71474" stop-color="#E2425C" />
        <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_87_7153"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
      >
        <stop offset="0.156701" stop-color="#406ADC" />
        <stop offset="0.467799" stop-color="#6A45BE" />
        <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-150 fade-in-down">
      <h1 className="text-5xl font-bold pb-10 fade-in-down">{t("contactsPage.title")}</h1>
      <ul className="flex gap-10 fade-in-up">
        <li>
          <a
            href="https://github.com/mthsmoreira33"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <GithubLogo isDarkMode={isDarkMode} />
            <span>{t("contactsPage.github")}</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mthsmoreira33_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <InstagramLogo />
            <span>{t("contactsPage.instagram")}</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/matheus-m-lima/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <LinkedinLogo />
            <span>{t("contactsPage.linkedin")}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
