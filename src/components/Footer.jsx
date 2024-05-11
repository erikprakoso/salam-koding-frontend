import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black py-16 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              SalamKoding
            </h2>
            <p className="mt-4 text-md leading-8 text-gray-300">
              Dusun Nglawu RT 01 RW 05, Desa Tirem, Kec. Brati, Kab. Grobogan,
              58153
            </p>
            {/* Add social media icons */}
            <div className="mt-6 flex space-x-6">
              <a
                href="https://www.facebook.com/erik.prks/"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <IoLogoFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@erik.prks"
                className="text-gray-300 hover:text-white"
                aria-label="TikTok"
              >
                <span className="sr-only">TikTok</span>
                <IoLogoTiktok className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/erik.prks/"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/erikprakoso"
                className="text-gray-300 hover:text-white"
                aria-label="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <IoLogoGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/erik-prakoso/"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <IoLogoLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright text */}
        <div className="text-center text-gray-400 text-sm mt-8">
          &copy; {new Date().getFullYear()} SalamKoding. All rights reserved.
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 z-0">
        <div
          className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-[#E2DFD0] to-[#524C42] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </footer>
  );
}
