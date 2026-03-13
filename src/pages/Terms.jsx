import React from 'react';
import Layout from '@/components/Layout';

const Terms = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="font-heading text-4xl font-bold text-primary mb-2">Terms & Conditions</h1>
                <p className="text-sm text-muted-foreground mb-8">Effective Date: February 2026</p>

                <div className="prose prose-blue max-w-none text-foreground/80 space-y-6">
                    <p>
                        Welcome to the official website of Mohan Babu Universities (MBU).
                        By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
                        Please read them carefully before using our services.
                    </p>

                    <h3 className="font-heading text-2xl font-bold text-primary">1. Acceptance of Terms</h3>
                    <p>
                        By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        If you do not agree with any part of these terms, you should discontinue use of this website immediately.
                    </p>

                    <h3 className="font-heading text-2xl font-bold text-primary">2. Use of Website</h3>
                    <p>
                        This website is intended to provide information about the BTech in Computer Science (Apprenticeship Embedded Degree Program)
                        offered by MBU in partnership with TalentSprint (Part of Accenture), as well as other academic programs, placements, events, and institutional details.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You agree to use this website only for lawful purposes.</li>
                        <li>You shall not use the website in any way that could damage, disable, or impair the site.</li>
                        <li>You shall not attempt to gain unauthorized access to any part of the website.</li>
                        <li>You shall not use any automated systems to extract data from this website.</li>
                    </ul>

                    <h3 className="font-heading text-2xl font-bold text-primary">3. Intellectual Property</h3>
                    <p>
                        All content on this website—including text, graphics, logos, images, audio clips, digital downloads, and data compilations—is the property of
                        Mohan Babu Universities and is protected by Indian and international copyright laws.
                        Unauthorized reproduction, modification, or distribution of any content is strictly prohibited.
                    </p>

                    <h3 className="font-heading text-2xl font-bold text-primary">4. Admission & Academic Policies</h3>
                    <p>
                        Information regarding admissions, fees, scholarships, and academic programs is provided for general guidance.
                        While we strive to keep all information accurate and up-to-date, MBU reserves the right to modify program details, fee structures,
                        eligibility criteria, and other academic policies without prior notice.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Terms;
