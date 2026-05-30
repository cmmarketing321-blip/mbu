import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Award, BookOpen, Target, Sparkles, ShieldCheck, Landmark, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex flex-col">
            {/* About Hero Section */}
            <section className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-center bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
                <div className="container mx-auto px-4 relative z-10 py-10 sm:py-16">
                    <div className="max-w-3xl space-y-4">
                        <span className="text-secondary font-bold text-xs tracking-widest uppercase bg-secondary/15 px-3 py-1.5 rounded-full border border-secondary/35 inline-block">
                            About Mohan Babu University
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                            Nurturing Scholars, <br className="hidden sm:inline" />
                            Empowering Leaders.
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-xl font-light leading-relaxed">
                            A legacy of academic brilliance, cutting-edge research, and real-world impact spanning nearly three decades.
                        </p>
                        <div className="pt-2">
                            <Link to="/login">
                                <Button variant="secondary" size="lg" className="font-bold w-full sm:w-auto">
                                    Apply for Admission
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy & Vision Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                            <img 
                                src="/campus.png" 
                                alt="MBU Campus Life" 
                                className="rounded-2xl shadow-elevated w-full object-cover h-[500px]"
                            />
                            <div className="absolute bottom-6 right-6 bg-white text-primary p-6 rounded-xl shadow-lg border border-red-100 max-w-xs hidden sm:block">
                                <div className="font-heading text-4xl font-bold text-[#d20911]">30+</div>
                                <div className="text-sm font-semibold text-gray-700 mt-1">Years of Educational Distinction</div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="inline-block bg-[#d20911]/10 text-[#d20911] font-bold px-3 py-1 rounded text-xs tracking-wider uppercase">
                                Our Foundations
                            </div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                                Empowering Minds, <br />Transforming Lives
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Founded with the vision of offering high-quality education in a dynamic and highly inclusive environment, Mohan Babu University (MBU) has grown into a major multi-disciplinary campus in Tirupati, Andhra Pradesh. We cater to thousands of ambitious learners pursuing breakthroughs in computing, engineering, commerce, management, and scientific research.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Under the mentorship and leadership of veteran visionary Sri M. Mohan Babu, MBU focuses strongly on merging traditional academic rigor with apprenticeship-embedded programs (AEDP), preparing students for concrete placement successes right out of college.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-[#d20911]/10 p-2.5 rounded-lg text-[#d20911]">
                                        <Target className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Our Mission</h4>
                                        <p className="text-sm text-muted-foreground">To cultivate critical thinking, research excellence, and practical ethics in learners.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-secondary/15 p-2.5 rounded-lg text-secondary">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Our Vision</h4>
                                        <p className="text-sm text-muted-foreground">To lead globally as an integrated center of future-proof skills and innovative ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Key Pillars / Values */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-block bg-secondary/15 text-secondary-foreground font-bold px-3 py-1 rounded text-xs tracking-wider uppercase mb-3">
                            MBU Principles
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Why Mohan Babu University?
                        </h2>
                        <p className="text-muted-foreground">
                            We base our university model on five key pillars of high excellence designed to deliver life-long learning and competitive global careers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Award className="h-6 w-6 text-[#d20911]" />,
                                title: "Accredited Excellence",
                                desc: "Recognized as a Premier Category University with high tier rankings by NAAC, NIRF, and various academic governing bodies."
                            },
                            {
                                icon: <BookOpen className="h-6 w-6 text-[#d20911]" />,
                                title: "Apprenticeship Focus",
                                desc: "Unique degrees combining academic study and multi-year industry assignments, accelerating career growth before graduation."
                            },
                            {
                                icon: <Users className="h-6 w-6 text-[#d20911]" />,
                                title: "Eminent Faculty",
                                desc: "Over 400+ highly qualified researchers, PhD scholars, and experienced industry experts acting as career mentors."
                            },
                            {
                                icon: <Landmark className="h-6 w-6 text-[#d20911]" />,
                                title: "State-of-the-art Infrastructure",
                                desc: "Spread over 100+ pristine acres featuring futuristic technology labs, a vast library, world-class athletic arenas, and modern hostels."
                            },
                            {
                                icon: <ShieldCheck className="h-6 w-6 text-[#d20911]" />,
                                title: "Comprehensive Support",
                                desc: "Dedicated placement wing, personal mental wellness counseling, professional startup incubator, and lifelong alumni benefits."
                            },
                            {
                                icon: <Sparkles className="h-6 w-6 text-[#d20911]" />,
                                title: "Global Opportunities",
                                desc: "MoUs and student exchange partnerships with top-tier international universities across the US, UK, and Europe."
                            }
                        ].map((pillar, i) => (
                            <Card key={i} className="border-none shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                                <CardContent className="p-8 space-y-4">
                                    <div className="bg-[#d20911]/5 p-3.5 rounded-xl w-fit">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-primary">{pillar.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-background text-center relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                        Shape the Future of Technology & Leadership
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Admissions for the 2026-27 academic session are filling quickly. Take the first step towards an empowered professional future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/login">
                            <Button size="lg" className="font-bold w-full sm:w-auto bg-[#d20911] text-white hover:bg-red-700">
                                Apply Now
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="lg" className="font-bold w-full sm:w-auto">
                                Speak with Admissions
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
