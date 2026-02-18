import React from 'react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            toast.error('Please fill in all fields');
            return;
        }

        // Store user data in localStorage (Simple mock implementation)
        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password // In a real app, never store plain passwords!
        };

        // Get existing users or initialize empty array
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if user already exists
        if (existingUsers.some(user => user.email === formData.email)) {
            toast.error('User with this email already exists');
            return;
        }

        existingUsers.push(userData);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Also set current session for immediate access if needed, or just redirect
        localStorage.setItem('currentUser', JSON.stringify(userData));

        toast.success('Successfully account created');

        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Branding (Same as Login) */}
            <div className="hidden md:flex flex-col justify-center p-12 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-lg">
                    <div className="flex items-center space-x-4 mb-8">
                        <img src="/src/assets/logo_new.svg" alt="MBU Logo" className="h-20 w-20" />
                        <div className="flex flex-col leading-none">
                            <span className="font-heading font-bold text-2xl text-secondary">Mohan Babu</span>
                            <span className="text-xs tracking-wider uppercase opacity-80">Educational Services</span>
                        </div>
                    </div>
                    <h1 className="font-heading text-4xl font-bold mb-4">BS in Computer Science (AEDP)</h1>
                    <p className="text-lg text-primary-foreground/80 leading-relaxed">
                        Access your student portal, track your application status, and stay connected with the MBU community.
                    </p>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="flex flex-col justify-center items-center p-4 md:p-12 bg-background">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left">
                        <h2 className="font-heading text-3xl font-bold text-primary">Create Account</h2>
                        <p className="text-muted-foreground mt-2">Register to get started with your application</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="firstName">First Name</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none" htmlFor="lastName">Last Name</label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    id="email" placeholder="you@example.com" type="email" value={formData.email} onChange={handleChange} required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 pr-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={formData.password} onChange={handleChange} required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <input type="checkbox" id="terms" className="mt-1" required />
                            <label htmlFor="terms" className="text-xs text-muted-foreground leading-snug">
                                I agree to the <Link to="/terms-and-conditions" className="text-secondary hover:underline">Terms & Conditions</Link> and <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>, and authorize Mohan Babu Educational Services and its partners to contact me via Email, SMS, WhatsApp, RCS, or Voice Call, even if my number is on DNC/NDNC. I consent to be contacted regarding services offered by MBU.
                            </label>
                        </div>

                        <Button type="submit" className="w-full font-bold bg-primary text-white hover:bg-primary/90" size="lg">Create Account</Button>
                    </form>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="underline underline-offset-4 hover:text-primary font-bold text-secondary">
                            Sign In
                        </Link>
                    </p>

                    <div className="flex justify-center">
                        <Link to="/" className="text-xs text-muted-foreground hover:text-primary flex items-center">
                            <ArrowLeft className="mr-1 h-3 w-3" /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
