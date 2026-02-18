import React from 'react';
import Layout from '@/components/Layout';

const Privacy = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="font-heading text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground mb-8">Effective Date: February 2026</p>

                <div className="prose prose-blue max-w-none text-foreground/80 space-y-6">
                    <p>
                        We at Mohan Babu Educational Services (MBU) understand the importance of protecting your data and any information we collect for your service.
                        All user data collected in any form will not be sent out of the institution for any unauthorized purpose.
                    </p>

                    <h3 className="font-heading text-2xl font-bold text-primary">Information We Collect</h3>
                    <p>
                        As a visitor, you can view all the content on our website including information about our BTech in Computer Science (AEDP) program, specializations, placements, events, and faculty details.
                        You are not required to provide any personal information to view this content.
                    </p>
                    <p>
                        When you apply for admission, register for an event, or contact us through our forms, we may collect personal information such as your name, email address, phone number,
                        academic qualifications, and other relevant details necessary for processing your request.
                    </p>

                    <h3 className="font-heading text-2xl font-bold text-primary">How We Use Your Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To process and evaluate your application for admission to our programs.</li>
                        <li>To communicate with you regarding your enquiries and application status.</li>
                        <li>To send you updates about academic programs, events, and placement opportunities.</li>
                        <li>To improve our website experience and educational services.</li>
                        <li>To comply with legal and regulatory requirements.</li>
                    </ul>

                    <h3 className="font-heading text-2xl font-bold text-primary">Data Security</h3>
                    <p>
                        At MBU, we respect data security and will transparently communicate with all users as and when our policies are updated.
                        We comply with the data privacy rules and regulations of India where our institution is based, and abide completely by local laws including the Information Technology Act and associated rules.
                    </p>

                    <h3 className="font-heading text-2xl font-bold text-primary">Third-Party Links</h3>
                    <p>
                        For better representation of information, external links may be placed on our website, including links to our partner organizations like TalentSprint or recruitment partners.
                        When you click on these links, you will be redirected to their respective websites.
                        We encourage you to read their privacy policies separately as we do not control their data practices.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
