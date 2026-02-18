import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, Phone, User, GraduationCap } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-primary-foreground/5 text-primary-foreground/80 py-2 border-b border-primary-foreground/10 text-xs sm:text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                <div className="flex items-center space-x-6">
                    <a href="mailto:support@mohanbabuuniversities.in" className="flex items-center hover:text-white transition-colors">
                        <Mail className="h-3 w-3 mr-2" />
                        <span>support@mohanbabuuniversities.in</span>
                    </a>
                    <a href="tel:+919281416210" className="flex items-center hover:text-white transition-colors">
                        <Phone className="h-3 w-3 mr-2" />
                        <span>+91 9281 416 210</span>
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/login" className="flex items-center hover:text-white transition-colors">
                        <User className="h-3 w-3 mr-2" />
                        <span>Student Login</span>
                    </Link>
                    <span className="opacity-30">|</span>
                    <Link to="/alumni" className="flex items-center hover:text-white transition-colors">
                        <GraduationCap className="h-3 w-3 mr-2" />
                        <span>Alumni</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
            <TopBar />
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="/logo_new.svg" alt="MBU Logo" className="h-12 w-12 md:h-14 md:w-14" />
                        <div className="flex flex-col leading-none">
                            <span className="font-heading font-bold text-lg md:text-xl text-secondary">Mohan Babu</span>
                            <span className="text-[10px] md:text-xs tracking-wider uppercase opacity-80">Educational Services</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
                        <Link to="/programs" className="hover:text-accent transition-colors">Programs</Link>
                        <Link to="/placements" className="hover:text-accent transition-colors">Placements</Link>
                        <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
                        <Button variant="secondary" size="sm" className="font-bold">Apply Now</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-primary-foreground/10">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="hover:text-accent text-sm font-medium">Home</Link>
                        <Link to="/about" className="hover:text-accent text-sm font-medium">About Us</Link>
                        <Link to="/programs" className="hover:text-accent text-sm font-medium">Programs</Link>
                        <Link to="/placements" className="hover:text-accent text-sm font-medium">Placements</Link>
                        <Link to="/contact" className="hover:text-accent text-sm font-medium">Contact</Link>
                        <Button variant="secondary" className="w-full font-bold">Apply Now</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src="/logo_new.svg" alt="MBU Logo" className="h-12 w-12" />
                            <span className="font-heading font-bold text-lg">Mohan Babu Educational Services</span>
                        </div>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                            Empowering students with knowledge, skills, and values to become global leaders in their chosen fields.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/70">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                            <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Resources</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/70">
                            <li><Link to="/student-login" className="hover:text-white transition-colors">Student Login</Link></li>
                            <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
                            <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
                            <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/70">
                            <li>support@mohanbabuuniversities.in</li>
                            <li>+91 9281 416 210</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
                    <p>&copy; 2026 Mohan Babu Educational Services. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            {/* WhatsApp Float */}
            <a href="#" className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
                <MessageCircle className="h-6 w-6" />
            </a>
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-body bg-background text-foreground">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
