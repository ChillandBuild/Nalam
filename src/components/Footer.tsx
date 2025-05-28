const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container px-4 mx-auto py-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#F97316] to-[#ea384c] p-8 shadow-lg text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <a href="#" className="flex items-center gap-2">
                  <span className="nalam-brand text-4xl font-cursive bg-gradient-to-br from-[#F97316] via-[#ea384c] to-[#d946ef] bg-clip-text text-transparent">Nalam</span>
                </a>
              </div>
              <p className="text-white text-lg font-semibold font-sans">Making sustainable choices easier for everyone.</p>
              <p className="text-white text-lg font-sans font-normal">
                Built with <span className="text-2xl align-middle">♥</span> for a healthier planet.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2 font-sans text-white">Contact Us</h3>
                <a href="mailto:contact@nalam.com" className="text-white/90 hover:text-white text-base font-sans underline">contact@nalam.com</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/90 hover:text-white text-sm">Features</a></li>
                <li><a href="#how-it-works" className="text-white/90 hover:text-white text-sm">How It Works</a></li>
                <li><a href="#benefits" className="text-white/90 hover:text-white text-sm">Benefits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 font-sans text-white">About Us</h3>
              <div className="mb-2">
              </div>
              <p className="text-white/90 text-base mb-3 font-sans font-normal">
                We're a dedicated cohort of MSc Data Science students from Amrita Vishwa Vidyapeetham, driven by a fervor for health and technological innovation. Our app, Nalam—meaning "well-being" in Tamil—empowers you to make discerning food choices, fostering a vibrant lifestyle and a sustainable tomorrow. Together, let's enrich your world!
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <div className="text-sm text-black/70">
            © {new Date().getFullYear()} <span className="nalam-brand text-base">Nalam</span>. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-black/70 hover:text-black">Privacy Policy</a>
            <a href="#" className="text-sm text-black/70 hover:text-black">Terms of Service</a>
            <a href="#" className="text-sm text-black/70 hover:text-black">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
