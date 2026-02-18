import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight, Trophy, Users, BookOpen, GraduationCap, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center bg-hero-gradient text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-secondary text-secondary-foreground font-bold px-3 py-1 rounded-sm mb-6 text-sm tracking-wide">
                            ADMISSIONS OPEN 2026-27
                        </div>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                            BS in Computer Science
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                            AEDP – Apprenticeship Embedded Degree Program
                        </p>
                        <p className="text-lg text-white/70 mb-8 max-w-2xl">
                            Four-Year Multidisciplinary UG Course | 2 Years Institution + 2 Years Industry.
                            Powered by TalentSprint (Part of Accenture).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="secondary" size="lg" className="font-bold text-base">
                                Apply Now
                            </Button>
                            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary font-bold text-base">
                                Know More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary text-primary-foreground py-16 border-t border-primary-foreground/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="font-heading text-4xl md:text-5xl font-bold text-secondary">28</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Years of Legacy</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-heading text-4xl md:text-5xl font-bold text-secondary">15+</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Years Excellence</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-heading text-4xl md:text-5xl font-bold text-secondary">250K+</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Professionals Empowered</div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-heading text-4xl md:text-5xl font-bold text-secondary">95%</div>
                            <div className="text-sm uppercase tracking-wider opacity-80">Completion Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Programs</h2>
                        <p className="text-muted-foreground">Discover a world of opportunities with our diverse range of undergraduate and postgraduate programs designed for the future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "School of Computing", icon: <Users className="h-10 w-10 text-secondary" /> },
                            { title: "School of Management", icon: <Trophy className="h-10 w-10 text-secondary" /> },
                            { title: "School of Engineering", icon: <GraduationCap className="h-10 w-10 text-secondary" /> },
                        ].map((program, i) => (
                            <Card key={i} className="group hover:shadow-elevated transition-all duration-300 border-none">
                                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                    <div className="bg-primary/5 p-4 rounded-full group-hover:bg-primary/10 transition-colors">
                                        {program.icon}
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-primary">{program.title}</h3>
                                    <p className="text-sm text-muted-foreground">Comprehensive curriculum aligned with industry standards and future technologies.</p>
                                    <Button variant="link" className="text-secondary font-bold hover:text-secondary/80">View Details <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">Latest News</h2>
                            <p className="text-muted-foreground">Stay updated with the latest happenings on campus.</p>
                        </div>
                        <Button variant="outline" className="hidden md:flex">View All News</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "MBU Celebrates 77th Republic Day",
                                date: "Jan 26, 2026",
                                cat: "Campus Life",
                                image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                desc: "Students and faculty gathered to hoist the flag and celebrate the spirit of the nation with cultural performances."
                            },
                            {
                                title: "Excellence in Innovation Award",
                                date: "Jan 15, 2026",
                                cat: "Awards",
                                image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                desc: "MBU received the prestigious award for best tech incubator in the region, recognizing our commitment to student startups."
                            },
                            {
                                title: "Annual Sports Meet 2026",
                                date: "Jan 10, 2026",
                                cat: "Sports",
                                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                desc: "A week of high energy and competitive spirit concluded today with the distribution of trophies to the winning teams."
                            },
                        ].map((news, i) => (
                            <div key={i} className="group cursor-pointer flex flex-col h-full">
                                <div className="bg-muted h-48 rounded-lg mb-4 overflow-hidden relative">
                                    <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                                    <div className="absolute top-4 left-4 bg-white text-primary text-xs font-bold px-2 py-1 rounded">
                                        {news.cat}
                                    </div>
                                </div>
                                <div className="text-sm text-secondary font-medium mb-2">{news.date}</div>
                                <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                                    {news.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3">{news.desc}</p>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" className="w-full mt-8 md:hidden">View All News</Button>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Student Voices</h2>
                        <p className="text-primary-foreground/80">Hear from our students about their journey at Mohan Babu Educational Services.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Priya Sharma",
                                course: "BS Computer Science",
                                quote: "The apprenticeship model at MBU is a game-changer. Working with industry professionals while studying gave me a huge head start.",
                                batch: "Batch of 2025"
                            },
                            {
                                name: "Rahul Verma",
                                course: "MBA",
                                quote: "The faculty here doesn't just teach; they mentor. The exposure to real-world business case studies prepared me for my corporate journey.",
                                batch: "Batch of 2024"
                            },
                            {
                                name: "Ananya Reddy",
                                course: "BBA",
                                quote: "Campus life is vibrant and full of opportunities. From cultural fests to hackathons, there is always something happening to help us grow.",
                                batch: "Batch of 2026"
                            }
                        ].map((testimonial, i) => (
                            <Card key={i} className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <Quote className="h-10 w-10 text-secondary mb-6 opacity-50" />
                                    <p className="text-lg leading-relaxed mb-6 italic opacity-90">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                                            {testimonial.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                                            <p className="text-xs text-primary-foreground/60">{testimonial.course} | {testimonial.batch}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
