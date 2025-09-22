import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data protection information for Alpha Group Investment website and services.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPage() {
  return (
    <Section className="pt-24">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-600">
            How we collect, use, and protect your personal information.
          </p>
        </div>

        <Prose>
          <h2>Introduction</h2>
          <p>
            Alpha Group Investment ("we," "our," or "us") is committed to protecting your privacy 
            and handling your personal information with care and respect. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you 
            visit our website or engage with our services.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <p>We may collect information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Professional information (organization, title, business address)</li>
            <li>Communication preferences and interests</li>
            <li>Information provided in forms, surveys, or correspondence</li>
            <li>Investment-related information for qualified investors</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and geographic location</li>
            <li>Browser type and version</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website and search terms used</li>
          </ul>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, 
            analyze website traffic, and understand user preferences. You can control cookie 
            settings through your browser preferences.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Responding to inquiries and communications</li>
            <li>Sending relevant information about our services and insights</li>
            <li>Conducting due diligence for investment opportunities</li>
            <li>Complying with legal and regulatory requirements</li>
            <li>Analyzing website usage and improving user experience</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>

          <h3>Service Providers</h3>
          <p>
            We may share information with trusted third-party service providers who assist us 
            in operating our website, conducting business, or servicing you, provided they 
            agree to maintain confidentiality.
          </p>

          <h3>Professional Partners</h3>
          <p>
            With your consent, we may share relevant information with our professional partners 
            (legal, technical, or regulatory advisors) to provide comprehensive services.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose information when required by law, regulation, legal process, or 
            governmental request, or to protect our rights, property, or safety.
          </p>

          <h3>Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be 
            transferred as part of the transaction, subject to confidentiality protections.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or 
            destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication systems</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection practices</li>
            <li>Incident response and breach notification procedures</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, comply with legal obligations, resolve disputes, 
            and enforce our agreements. Retention periods vary based on the type of information 
            and applicable legal requirements.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing activities</li>
            <li>Data portability</li>
            <li>Objection to certain processing activities</li>
            <li>Withdrawal of consent where applicable</li>
          </ul>

          <p>
            To exercise these rights, please contact us using the information provided below. 
            We will respond to your request within the timeframe required by applicable law.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your 
            country of residence. We ensure appropriate safeguards are in place to protect 
            your information in accordance with applicable data protection laws.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not 
            knowingly collect personal information from children. If we become aware that 
            we have collected information from a child, we will take steps to delete it promptly.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for 
            the privacy practices or content of these external sites. We encourage you to 
            review the privacy policies of any third-party sites you visit.
          </p>

          <h2>Analytics and Marketing</h2>
          <p>
            We may use analytics services to understand how our website is used and to improve 
            our services. We may also use your information for marketing purposes, including 
            sending newsletters and updates about our services, subject to your preferences 
            and applicable law.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our 
            practices or applicable laws. We will notify you of material changes by posting 
            the updated policy on our website and updating the "Last Updated" date.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or 
            our data practices, please contact us:
          </p>
          <ul>
            <li>Email: privacy@alpha-investments.com</li>
            <li>Subject Line: Privacy Policy Inquiry</li>
          </ul>

          <h2>Regulatory Compliance</h2>
          <p>
            Our privacy practices are designed to comply with applicable data protection 
            regulations, including but not limited to:
          </p>
          <ul>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>UAE Data Protection Law</li>
            <li>Other applicable regional privacy laws</li>
          </ul>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-neutral-600 mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-sm text-neutral-600">
              For privacy-related inquiries, please contact us at{' '}
              <a href="mailto:privacy@alpha-investments.com" className="text-accent-600 hover:text-accent-700">
                privacy@alpha-investments.com
              </a>
            </p>
          </div>
        </Prose>
      </Container>
    </Section>
  )
}
