import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CheckCircle2, ChevronRight, GraduationCap, Clock, Award, ShieldAlert, Cpu, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const [activeTab, setActiveTab] = React.useState('computing');

    const tabData = {
        computing: {
            title: "School of Computing",
            tagline: "Building the architect of tomorrow's algorithms & digital networks.",
            programs: [
                {
                    name: "BTech in Computer Science (AEDP)",
                    duration: "4 Years (Apprenticeship Embedded)",
                    partner: "TalentSprint (Accenture)",
                    focus: "2 Years Campus Learning + 2 Years On-site Paid Industry Apprenticeship",
                    highlights: ["Earn while you learn", "Full mentorship by Accenture experts", "Assured placement options", "High-growth tech curriculum"]
                },
                {
                    name: "BTech in Computer Science & Engineering (AI & ML)",
                    duration: "4 Years Regular",
                    partner: "MBU Research Wing",
                    focus: "Deep training on neural networks, natural language processing, and deep learning platforms.",
                    highlights: ["GPU-enabled research labs", "Capstone projects with global startups", "Annual AI Hackathons", "Direct internships"]
                },
                {
                    name: "BTech in Information Technology",
                    duration: "4 Years Regular",
                    partner: "MBU Tech Academy",
                    focus: "Strong background in web frameworks, cloud infrastructures, and database design.",
                    highlights: ["AWS & Azure certification training", "98% placement track record", "DevOps & cybersecurity specializations"]
                }
            ]
        },
        management: {
            title: "School of Management",
            tagline: "Empowering dynamic visionary leaders and entrepreneurs.",
            programs: [
                {
                    name: "Master of Business Administration (MBA)",
                    duration: "2 Years Postgraduate",
                    partner: "MBU Corporate Council",
                    focus: "Dual specialization in Marketing, Finance, HR, or Business Analytics with real corporate internships.",
                    highlights: ["Global case study study model", "Corporate mentoring by CXOs", "100% placement record in tier-1 MNCs", "Incubation support for startups"]
                },
                {
                    name: "Bachelor of Business Administration (BBA)",
                    duration: "3 Years Undergraduate",
                    partner: "Industry Partners",
                    focus: "Core fundamentals of digital business, organizational psychology, and international trade.",
                    highlights: ["Semester-long industrial project", "Leadership bootcamps", "Personality development workshops"]
                }
            ]
        },
        engineering: {
            title: "School of Engineering",
            tagline: "Advancing mechanical, electronics, and smart infrastructure sciences.",
            programs: [
                {
                    name: "BTech in Electronics & Communication Engineering",
                    duration: "4 Years",
                    partner: "Semiconductor Alliance",
                    focus: "Advanced learning on VLSI Design, Embedded IoT Systems, and 5G Communications.",
                    highlights: ["IoT Innovation Lab", "Collaborative projects with defense labs", "Skill pathways in microchip tech"]
                },
                {
                    name: "BTech in Mechanical Engineering",
                    duration: "4 Years",
                    partner: "Automotive Industry Partners",
                    focus: "Next-gen automation, additive manufacturing (3D printing), robotics, and smart thermal systems.",
                    highlights: ["Advanced CAD/CAM labs", "Formula Student racecar design team", "Industry visits & site training"]
                }
            ]
        }
    };

    return (
        <div className="flex flex-col pt-2">

            {/* Main Featured Program Deep Dive (AEDP) */}
            <section className="py-6 md:py-10 bg-background">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="bg-primary/5 rounded-3xl p-6 sm:p-8 md:p-10 border border-primary/10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block bg-[#d20911]/15 text-[#d20911] font-bold px-3 py-1 rounded text-xs tracking-wider uppercase border border-[#d20911]/25">
                                    Flagship Program Highlight
                                </span>
                                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                                    BTech in Computer Science <span className="text-secondary">(AEDP)</span>
                                </h2>
                                <p className="text-[#d20911] font-bold text-base sm:text-lg lg:text-xl">
                                    Apprenticeship Embedded Degree Program
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                    A groundbreaking four-year multidisciplinary undergraduate course that completely flips standard engineering education. Powered by **TalentSprint (Part of Accenture)**, this program embeds you in the real industry workspace.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                        <Cpu className="h-5 w-5 text-[#d20911]" />
                                        <span className="text-sm font-semibold text-gray-700">2 Years Campus Study</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                        <Briefcase className="h-5 w-5 text-[#d20911]" />
                                        <span className="text-sm font-semibold text-gray-700">2 Years Paid Internship</span>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {[
                                        "Learn direct corporate tools from day one.",
                                        "Stipend supported continuous multi-year internship.",
                                        "Mentored by top engineering practitioners at Accenture.",
                                        "Direct pathway into high-profile software engineering careers."
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700 font-medium">
                                            <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <Link to="/login">
                                        <Button className="bg-[#d20911] text-white hover:bg-red-700 font-bold px-8 w-full sm:w-auto" size="lg">
                                            Apply for AEDP Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative w-full">
                                <img 
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Collaborative Tech Lab" 
                                    className="rounded-2xl shadow-elevated w-full object-cover h-[250px] sm:h-[300px] lg:h-[350px]"
                                />
                                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded shadow-md uppercase">
                                    Industry Embedded
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Program Tabs Selector */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-heading text-3xl font-bold text-primary mb-4">Explore Our Departments</h2>
                        <p className="text-muted-foreground">Select a school to view available undergraduate and postgraduate offerings.</p>
                    </div>

                    {/* Selector Buttons */}
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-12 bg-white p-2.5 rounded-xl shadow-sm max-w-2xl mx-auto border border-gray-100">
                        {Object.keys(tabData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all duration-300 ${
                                    activeTab === tab 
                                    ? 'bg-primary text-white shadow-md' 
                                    : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                                }`}
                            >
                                {tabData[tab].title}
                            </button>
                        ))}
                    </div>

                    {/* Department Title & Programs Grid */}
                    <div className="space-y-8">
                        <div className="text-center max-w-xl mx-auto">
                            <h3 className="font-heading text-2xl font-bold text-primary mb-2">{tabData[activeTab].title}</h3>
                            <p className="text-sm text-muted-foreground italic">"{tabData[activeTab].tagline}"</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {tabData[activeTab].programs.map((prog, index) => (
                                <Card key={index} className="border-none shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col h-full bg-white">
                                    <CardContent className="p-8 flex flex-col justify-between flex-grow">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div className="bg-[#d20911]/5 p-3 rounded-lg text-[#d20911]">
                                                    <GraduationCap className="h-6 w-6" />
                                                </div>
                                                <span className="text-xs font-bold text-secondary-foreground bg-secondary/15 px-2.5 py-1 rounded-full uppercase">
                                                    {prog.duration}
                                                </span>
                                            </div>

                                            <h4 className="font-heading text-lg font-bold text-primary leading-tight">{prog.name}</h4>
                                            
                                            {prog.partner && (
                                                <div className="text-xs font-semibold text-[#d20911] bg-red-50 py-1 px-2 w-fit rounded">
                                                    Collab: {prog.partner}
                                                </div>
                                            )}

                                            <p className="text-sm text-gray-600 leading-relaxed font-light mt-2">
                                                <strong>Core Focus:</strong> {prog.focus}
                                            </p>

                                            <div className="pt-4 border-t border-gray-100 space-y-2">
                                                <p className="text-xs font-bold text-primary tracking-wider uppercase">Key Benefits:</p>
                                                {prog.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-center text-xs text-gray-500">
                                                        <ChevronRight className="h-3.5 w-3.5 text-secondary mr-1.5 shrink-0" />
                                                        <span>{h}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <Link to="/login" className="w-full block">
                                                <Button className="w-full font-bold text-sm bg-primary text-white hover:bg-primary/95" variant="default">
                                                    Apply & Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stepper Admission Process Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#d20911]">Easy Enroll</span>
                        <h2 className="font-heading text-3xl font-bold text-primary mt-2 mb-4">Admissions Pathway</h2>
                        <p className="text-muted-foreground">Follow these four fast steps to register and lock your chosen academic program.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Only visible on md and up) */}
                        <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gray-200 -z-10"></div>

                        {[
                            { step: "01", title: "Fill Portal", desc: "Create your student account online and register your preferences.", icon: <FileText className="h-5 w-5" /> },
                            { step: "02", title: "Verify Profile", desc: "Upload transcripts, national scores, or take the MBU Entrance Exam.", icon: <Award className="h-5 w-5" /> },
                            { step: "03", title: "Personal Interview", desc: "Receive a feedback call or campus visit schedule from our counselor.", icon: <Clock className="h-5 w-5" /> },
                            { step: "04", title: "Lock Seat", desc: "Submit course deposit fee, get verified, and reserve your place.", icon: <CheckCircle2 className="h-5 w-5" /> }
                        ].map((s, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                <div className="h-12 w-12 rounded-full bg-white text-primary border-4 border-primary font-bold text-base flex items-center justify-center shadow-md relative">
                                    {s.icon}
                                    <span className="absolute -bottom-2 right-0 bg-[#d20911] text-white text-[9px] px-1 rounded-full">{s.step}</span>
                                </div>
                                <h3 className="font-heading font-bold text-lg text-primary">{s.title}</h3>
                                <p className="text-xs text-muted-foreground max-w-xs">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
