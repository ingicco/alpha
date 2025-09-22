import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

export const metadata: Metadata = {
  title: 'Legal Disclaimer',
  description: 'Important legal information and disclaimers for Alpha Group Investment services and website content.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DisclaimerPage() {
  return (
    <Section className="pt-24">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-6">
            Legal Disclaimer
          </h1>
          <p className="text-lg text-neutral-600">
            Important legal information regarding Alpha Group Investment services and communications.
          </p>
        </div>

        <Prose>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">
              Important Notice
            </h2>
            <p className="text-yellow-700">
              This website and its contents are for informational purposes only and do not constitute 
              an offer to sell or a solicitation of an offer to buy any securities or investment products.
            </p>
          </div>

          <h2>General Disclaimer</h2>
          <p>
            This website is for informational purposes only and does not constitute an offer to sell 
            or a solicitation of an offer to buy any securities, investment products, or services. 
            The information contained herein is not intended for general public distribution and is 
            provided solely for the use of qualified, professional, or accredited investors.
          </p>

          <h2>Non-Solicitation</h2>
          <p>
            The content on this website is not intended as a solicitation for investment or advisory 
            services. Any investment opportunities referenced are available only to qualified investors 
            and are subject to definitive documentation, including private placement memoranda, 
            subscription agreements, and other governing documents.
          </p>

          <h2>Investment Risks</h2>
          <p>
            All investments carry risk, including the potential loss of principal. Past performance 
            does not guarantee future results. Investment returns and principal value will fluctuate, 
            and investments may be worth more or less than their original cost when redeemed.
          </p>

          <p>
            Private investments, including venture capital, private equity, and digital assets, 
            involve additional risks including:
          </p>
          <ul>
            <li>Illiquidity and long investment horizons</li>
            <li>Limited transparency and reporting</li>
            <li>Concentration risk and lack of diversification</li>
            <li>Regulatory and compliance uncertainties</li>
            <li>Technology and operational risks</li>
          </ul>

          <h2>Digital Asset Considerations</h2>
          <p>
            Digital assets, including cryptocurrencies and blockchain-based tokens, are subject to 
            additional risks and considerations:
          </p>
          <ul>
            <li>High volatility and price fluctuations</li>
            <li>Regulatory uncertainty and potential restrictions</li>
            <li>Technology risks including smart contract vulnerabilities</li>
            <li>Custody and security considerations</li>
            <li>Market manipulation and liquidity risks</li>
          </ul>

          <h2>Regulatory Compliance</h2>
          <p>
            Alpha Group Investment operates in compliance with applicable securities laws and 
            regulations. Our digital asset services are designed to align with evolving regulatory 
            frameworks, including requirements from the Dubai Financial Services Authority (DFSA) 
            and Virtual Assets Regulatory Authority (VARA).
          </p>

          <p>
            <strong>DFSA/VARA Alignment Note:</strong> Specific compliance documentation and 
            regulatory alignment notes are provided as part of our advisory mandates and are 
            subject to ongoing regulatory developments in the digital asset space.
          </p>

          <h2>Professional Advice</h2>
          <p>
            The information provided on this website should not be construed as legal, tax, 
            accounting, or investment advice. Prospective investors should consult with their 
            own professional advisors regarding the legal, tax, and financial implications of 
            any investment or advisory engagement.
          </p>

          <h2>Forward-Looking Statements</h2>
          <p>
            This website may contain forward-looking statements regarding market trends, investment 
            opportunities, and business prospects. These statements are based on current expectations 
            and assumptions and are subject to risks and uncertainties that could cause actual 
            results to differ materially.
          </p>

          <h2>Confidentiality</h2>
          <p>
            All communications with Alpha Group Investment are confidential and proprietary. 
            Information shared during advisory engagements or investment discussions is subject 
            to confidentiality agreements and professional standards.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Alpha Group Investment, its affiliates, and their respective officers, directors, 
            employees, and agents shall not be liable for any direct, indirect, incidental, 
            special, or consequential damages arising from the use of this website or reliance 
            on its contents.
          </p>

          <h2>Jurisdiction and Governing Law</h2>
          <p>
            This disclaimer and any disputes arising from the use of this website shall be 
            governed by and construed in accordance with applicable laws. Any legal proceedings 
            shall be subject to the exclusive jurisdiction of the appropriate courts.
          </p>

          <h2>Updates and Modifications</h2>
          <p>
            Alpha Group Investment reserves the right to update or modify this disclaimer at 
            any time without prior notice. Users are responsible for reviewing this disclaimer 
            periodically for changes.
          </p>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-neutral-600 mb-4">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-sm text-neutral-600">
              For questions regarding this disclaimer or our legal policies, please contact us at{' '}
              <a href="mailto:legal@alpha-investments.com" className="text-accent-600 hover:text-accent-700">
                legal@alpha-investments.com
              </a>
            </p>
          </div>
        </Prose>
      </Container>
    </Section>
  )
}
