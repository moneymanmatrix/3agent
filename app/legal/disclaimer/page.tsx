import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <AlertTriangle className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Last updated: June 1, 2023</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">1. No Financial Advice</h2>
            <p className="text-gray-300 mb-4">
              The information provided by Web3 Sentinel is for general informational purposes only. We are not a
              financial or investment advisor, and no information contained on our website constitutes financial advice
              or an invitation to buy or sell any security or other investment.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">2. No Security Guarantees</h2>
            <p className="text-gray-300 mb-4">
              While we strive to provide accurate and up-to-date information about web3 security, we cannot guarantee
              that our platform will identify all vulnerabilities or security issues. The web3 ecosystem is constantly
              evolving, and new security threats emerge regularly.
            </p>
            <p className="text-gray-300 mb-4">
              Our tools and analyses should be used as part of a comprehensive security strategy and not as the sole
              means of securing your web3 applications or investments.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">3. Third-Party Content</h2>
            <p className="text-gray-300 mb-4">
              Our platform may include content from third-party sources. We do not endorse, guarantee, or assume
              responsibility for the accuracy or reliability of any third-party content linked to or referenced on our
              website.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">4. Risk Disclosure</h2>
            <p className="text-gray-300 mb-4">
              Participation in web3, cryptocurrency, and blockchain activities involves significant risk. These
              technologies are experimental and subject to regulatory changes, technical vulnerabilities, and market
              volatility. You should never invest money that you cannot afford to lose.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">5. No Liability</h2>
            <p className="text-gray-300 mb-4">
              To the maximum extent permitted by law, Web3 Sentinel and its affiliates, officers, employees, agents,
              partners, and licensors disclaim all warranties, express or implied, in connection with the website and
              your use thereof.
            </p>
            <p className="text-gray-300 mb-4">
              Web3 Sentinel shall not be liable for any direct, indirect, incidental, special, consequential, or
              punitive damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other
              intangible losses, resulting from the use of or inability to use our services.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">6. Changes to This Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
              posting on our website. Your continued use of our services after any changes indicates your acceptance of
              the modified disclaimer.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this disclaimer, please contact us at legal@web3sentinel.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
