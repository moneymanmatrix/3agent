import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <FileText className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Last updated: June 1, 2023</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Web3 Sentinel. These Terms and Conditions govern your use of our website and services. By
              accessing or using Web3 Sentinel, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access the service.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
            <p className="text-gray-300 mb-4">
              Web3 Sentinel provides a multi-agent system for monitoring, analyzing, and securing web3 applications. Our
              services are provided "as is" and "as available" without warranties of any kind, either express or
              implied.
            </p>
            <p className="text-gray-300 mb-4">
              You are responsible for maintaining the confidentiality of your account and password and for restricting
              access to your computer. You agree to accept responsibility for all activities that occur under your
              account.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The content, features, and functionality of Web3 Sentinel, including but not limited to text, graphics,
              logos, icons, images, audio clips, digital downloads, data compilations, software, and the compilation
              thereof, are the property of Web3 Sentinel or its licensors and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">4. User Content</h2>
            <p className="text-gray-300 mb-4">
              You retain all rights to any content you submit, post, or display on or through Web3 Sentinel. By
              submitting, posting, or displaying content, you grant us a worldwide, non-exclusive, royalty-free license
              to use, reproduce, adapt, publish, translate, and distribute your content in any existing or future media.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Web3 Sentinel, its officers, directors, employees, or agents, be liable for any
              indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
              profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
              inability to access or use the service.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without
              regard to its conflict of law provisions.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at legal@web3sentinel.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
