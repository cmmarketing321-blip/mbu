import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, Phone, MapPin, Clock, Send, ShieldQuestion, HelpCircle, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-b border-gray-200 pb-4">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left font-semibold text-primary hover:text-[#d20911] transition-colors py-2"
            >
                <span className="font-heading text-base md:text-lg">{question}</span>
                <ChevronDown className={`h-5 w-5 text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed pl-1">
                    {answer}
                </p>
            )}
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        program: 'BTech CS AEDP',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
            toast.error("Please fill in all the fields before submitting.");
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            toast.success("Thank you! Your inquiry has been submitted successfully. Our counselor will contact you shortly.");
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                program: 'BTech CS AEDP',
                message: ''
            });
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <div className="flex flex-col">
            {/* Contact Page Hero Header */}
            <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="text-secondary font-bold text-xs tracking-wider uppercase bg-secondary/15 px-3 py-1.5 rounded-full border border-secondary/35 mb-4 inline-block">
                        Admissions Helpdesk
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Connect with Us</h1>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg font-light">
                        Have inquiries about BTech CS (AEDP), course curriculum, eligibility criteria or placement supports? Our counselor team is here to assist.
                    </p>
                </div>
            </section>

            {/* Contact Form & Contact Details */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Side: Contact Information cards */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#d20911]">Admissions Office</span>
                                <h2 className="font-heading text-3xl font-bold text-primary">Get In Touch</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    We welcome visits from parents, career advisors, and potential corporate recruiters to our expansive campus in Tirupati.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 pt-4">
                                <Card className="border-none shadow-card hover:shadow-md transition-all">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="bg-[#d20911]/10 p-3 rounded-lg text-[#d20911] mt-1">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-sm">Admissions Hotline</h4>
                                            <p className="text-sm text-gray-700 font-medium mt-1">+91 9281 416 210</p>
                                            <p className="text-xs text-muted-foreground">Mon-Sat, 9:00 AM - 6:00 PM</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-card hover:shadow-md transition-all">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="bg-[#d20911]/10 p-3 rounded-lg text-[#d20911] mt-1">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-sm">Email Admissions Helpdesk</h4>
                                            <p className="text-sm text-gray-700 font-medium mt-1">yashwanth@mohanbabuuniversities.in</p>
                                            <p className="text-xs text-muted-foreground">Response within 24 business hours</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-card hover:shadow-md transition-all">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="bg-[#d20911]/10 p-3 rounded-lg text-[#d20911] mt-1">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-sm">Main Campus Address</h4>
                                            <p className="text-sm text-gray-700 font-medium mt-1">Mohan Babu University Campus,</p>
                                            <p className="text-xs text-muted-foreground">Tirupati - Madanapalle Highway, Tirupati, AP, India</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Right Side: Interactive Inquiry Form */}
                        <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-card border border-gray-100">
                            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Send an Inquiry</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700" htmlFor="fullName">Full Name</label>
                                        <input 
                                            id="fullName" 
                                            placeholder="Your Name" 
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required 
                                            className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d20911]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700" htmlFor="email">Email ID</label>
                                        <input 
                                            id="email" 
                                            type="email"
                                            placeholder="you@example.com" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                            className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d20911]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700" htmlFor="phone">Mobile Number</label>
                                        <input 
                                            id="phone" 
                                            type="tel"
                                            placeholder="Enter phone number" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required 
                                            className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d20911]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700" htmlFor="program">Course Preference</label>
                                        <select 
                                            id="program"
                                            value={formData.program}
                                            onChange={handleChange}
                                            className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d20911]"
                                        >
                                            <option value="BTech CS AEDP">BTech in Computer Science (AEDP)</option>
                                            <option value="BTech CSE AI-ML">BTech CSE (AI & ML)</option>
                                            <option value="BTech IT">BTech in Information Technology</option>
                                            <option value="MBA">Master of Business Administration (MBA)</option>
                                            <option value="BBA">Bachelor of Business Administration (BBA)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700" htmlFor="message">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        rows="4"
                                        placeholder="Type your questions or message here..." 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                        className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d20911]"
                                    />
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full font-bold bg-[#d20911] text-white hover:bg-red-700 flex items-center justify-center gap-2" 
                                    size="lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : (
                                        <>
                                            Submit Admission Inquiry <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission FAQs Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-secondary/15 text-secondary-foreground font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-3">
                            Got Questions?
                        </div>
                        <h2 className="font-heading text-3xl font-bold text-primary">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mt-2">Find instant answers regarding academic life, hostels, and structural pathways at MBU.</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-6">
                        <FAQItem 
                            question="What is the Apprenticeship Embedded Degree Program (AEDP)?" 
                            answer="The BTech CS AEDP is an innovative 4-year undergraduate course where you spend 2 years studying the foundational tech curriculum in the university classroom, and the subsequent 2 years placed inside corporate environments (like Accenture) on paid, stipend-supported apprenticeships earning valuable hands-on experience before graduating."
                        />
                        <FAQItem 
                            question="Are hostel facilities available on the campus?" 
                            answer="Yes, MBU offers world-class separate secure residential hostel complexes for both boys and girls within campus boundaries, equipped with absolute backup utilities, central air-conditioning options, hygienic multi-cuisine dining options, library study pods, and standard high-speed Wi-Fi access."
                        />
                        <FAQItem 
                            question="Does Mohan Babu University support study-abroad or student exchanges?" 
                            answer="Absolutely! MBU holds high academic MoUs and collaborative pathways with tier-1 international educational universities across the United States, United Kingdom, Europe, and Asia, facilitating fully transferable credit semesters and exchange programs."
                        />
                        <FAQItem 
                            question="How do I get technical placement cell training at MBU?" 
                            answer="Our Dedicated Career Placement Center provides specialized corporate training beginning as early as your first year, consisting of advanced resume writing sessions, interactive soft-skill bootcamps, automated coding simulator practices, and mockup placement cycles."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
