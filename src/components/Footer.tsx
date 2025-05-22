
const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container px-4 mx-auto py-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#F97316] to-[#ea384c] p-8 shadow-lg text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <a href="#" className="flex items-center gap-2">
                  <span className="text-2xl font-hugh font-bold">Nalam</span>
                </a>
              </div>
              <p className="text-white text-sm">
                Making sustainable choices easier for everyone.
              </p>
              <p className="text-white/90 text-sm flex items-center gap-1">
                Built with 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                for a healthier planet.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/90 hover:text-white text-sm">Features</a></li>
                <li><a href="#how-it-works" className="text-white/90 hover:text-white text-sm">How It Works</a></li>
                <li><a href="#benefits" className="text-white/90 hover:text-white text-sm">Benefits</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Pricing</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Release Notes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/90 hover:text-white text-sm">About Us</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Careers</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Press Kit</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Contact</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-white/90 hover:text-white text-sm">FAQ</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Blog</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Community</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Support</a></li>
                <li><a href="#" className="text-white/90 hover:text-white text-sm">Developer API</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <div className="text-sm text-black/70">
            © {new Date().getFullYear()} Nalam. All rights reserved.
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
