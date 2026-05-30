import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { TrendingUp, Users, Building2, Briefcase, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Placements = () => {
    return (
        <div className="flex flex-col">
            {/* Placements Hero Section */}
            <section className="relative min-h-[calc(100vh-112px)] flex items-center py-12 lg:py-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/65 to-primary/45"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#d20911]/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl z-10"></div>
                <div className="container mx-auto px-4 relative z-20 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-5">
                            <span className="text-secondary font-bold text-xs tracking-widest uppercase bg-secondary/15 px-3 py-1.5 rounded-full border border-secondary/35 inline-block">
                                Placement Chronicles 2025-26
                            </span>
                            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                Launching Careers. <br />Creating Leaders.
                            </h1>
                            <p className="text-sm sm:text-base text-primary-foreground/80 max-w-xl font-light leading-relaxed">
                                Mohan Babu University sets record placements year after year. Our apprenticeship embedded degree models ensure that graduates step onto the corporate stage fully seasoned.
                            </p>
                            <div className="pt-2 flex flex-col sm:flex-row gap-4">
                                <Link to="/login" className="w-full sm:w-auto">
                                    <Button variant="secondary" size="lg" className="font-bold w-full sm:w-auto">
                                        Register for Placement Support
                                    </Button>
                                </Link>
                                <a href="mailto:yashwanth@mohanbabuuniversities.in" className="w-full sm:w-auto">
                                    <Button variant="ghost" size="lg" className="border border-white text-white hover:bg-white hover:text-primary font-bold w-full sm:w-auto">
                                        Recruiter Portal
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Top placement high key indicators */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { val: "44 LPA", label: "Highest Package", icon: <TrendingUp className="h-6 w-6 text-secondary" /> },
                                { val: "250+", label: "Eminent Recruiters", icon: <Building2 className="h-6 w-6 text-secondary" /> },
                                { val: "97%", label: "Placement Percentage", icon: <CheckCircle className="h-6 w-6 text-secondary" /> },
                                { val: "6.8 LPA", label: "Average Package", icon: <Briefcase className="h-6 w-6 text-secondary" /> }
                            ].map((stat, i) => (
                                <div key={i} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-5 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm">
                                    <div className="bg-secondary/15 p-2 rounded-lg w-fit text-secondary">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="font-heading text-2xl sm:text-3xl font-bold text-white">{stat.val}</div>
                                        <div className="text-[10px] sm:text-xs text-primary-foreground/60 tracking-wider uppercase mt-1">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruiter Alliances Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-block bg-[#d20911]/10 text-[#d20911] font-bold px-3 py-1 rounded text-xs tracking-wider uppercase mb-3">
                            Corporate Connect
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Our Renowned Recruiting Partners
                        </h2>
                        <p className="text-muted-foreground">
                            Over 250+ top global organizations, tech conglomerates, and rising startups source their primary engineering and business leaders from Mohan Babu University.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: "Accenture", industry: "Tech & Consulting" },
                            { name: "Google", industry: "Cloud & Search" },
                            { name: "Amazon", industry: "E-Commerce" },
                            { name: "Cognizant", industry: "Enterprise IT" },
                            { name: "TCS", industry: "Global Software" },
                            { name: "Wipro", industry: "System Integration" },
                            { name: "Infosys", industry: "Software Services" },
                            { name: "Capgemini", industry: "Consulting & Tech" },
                            { name: "Deloitte", industry: "Advisory Services" },
                            { name: "HCL Tech", industry: "Infrastructure Services" },
                            { name: "Tech Mahindra", industry: "Telecomm IT" },
                            { name: "L&T", industry: "Engineering Major" }
                        ].map((company, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-secondary/40 transition-all duration-300">
                                <div className="text-lg font-heading font-extrabold text-primary tracking-wide text-center">
                                    {company.name}
                                </div>
                                <div className="text-[10px] uppercase text-muted-foreground mt-2 font-medium tracking-wider">
                                    {company.industry}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Success Spotlight */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#d20911]">Spotlight</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                            Alumni Success Chronicles
                        </h2>
                        <p className="text-muted-foreground">
                            Read how our dedicated placement cellular coaching and early apprenticeship options transformed our student scholars into high-earning leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Siddharth K.",
                                package: "44 LPA",
                                role: "Software Architect",
                                company: "Amazon",
                                photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                quote: "MBU's heavy focus on data structure design and full hackathon cycles prepared me completely for the multi-tiered interviews at Amazon."
                            },
                            {
                                name: "Rithika Reddy",
                                package: "32 LPA",
                                role: "Senior AI Engineer",
                                company: "Google Cloud",
                                photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                quote: "The early research projects and GPU lab access let me gain real working knowledge on LLMs that set me far ahead of other applicants."
                            },
                            {
                                name: "Kiran Kumar",
                                package: "24 LPA",
                                role: "Lead Systems Engineer",
                                company: "Accenture",
                                photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                                quote: "Participating in the BTech Apprenticeship Embedded Degree Program (AEDP) allowed me to secure my permanent offer in the second year of study!"
                            }
                        ].map((student, i) => (
                            <Card key={i} className="border-none shadow-card hover:shadow-elevated transition-all duration-300 bg-white overflow-hidden flex flex-col justify-between">
                                <CardContent className="p-0">
                                    <div className="relative h-64 w-full">
                                        <img 
                                            src={student.photo} 
                                            alt={student.name} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                                            <div>
                                                <h4 className="font-heading font-bold text-lg">{student.name}</h4>
                                                <p className="text-xs text-white/70">{student.role} - {student.company}</p>
                                            </div>
                                            <div className="bg-secondary text-secondary-foreground text-xs font-extrabold px-3 py-1.5 rounded">
                                                {student.package}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm italic text-muted-foreground leading-relaxed">
                                            "{student.quote}"
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* School-wise placement breakdown */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                        <div className="text-center mb-12">
                            <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary">Department Wise Placement Success</h3>
                            <p className="text-primary-foreground/75 text-sm max-w-lg mx-auto mt-2">
                                Verified figures showcasing high excellence records of MBU schools across our batches.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="space-y-2 border-b md:border-b-0 md:border-r border-primary-foreground/10 pb-6 md:pb-0 md:pr-4">
                                <div className="font-heading text-4xl font-extrabold text-white">99%</div>
                                <div className="font-bold text-sm text-secondary">School of Computing</div>
                                <p className="text-xs text-primary-foreground/60 leading-relaxed">High density profiles in big data, cloud architecture, & mobile application design.</p>
                            </div>
                            <div className="space-y-2 border-b md:border-b-0 md:border-r border-primary-foreground/10 pb-6 md:pb-0 md:pr-4">
                                <div className="font-heading text-4xl font-extrabold text-white">95%</div>
                                <div className="font-bold text-sm text-secondary">School of Management</div>
                                <p className="text-xs text-primary-foreground/60 leading-relaxed">Top corporate placement in core marketing consultancies and investment portfolios.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="font-heading text-4xl font-extrabold text-white">93%</div>
                                <div className="font-bold text-sm text-secondary">School of Engineering</div>
                                <p className="text-xs text-primary-foreground/60 leading-relaxed">Strong recruiting alliances in automotives, automation design, and chip integration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Placements;
