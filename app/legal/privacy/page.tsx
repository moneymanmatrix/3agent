import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Shield className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Last updated: June 1, 2023</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              This Privacy Policy explains how Web3 Sentinel collects, uses, and discloses information about you when
              you use our services. We are committed to protecting your privacy and ensuring you have a positive
              experience on our website.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-300 mb-4">We collect information in several ways:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <strong>Information you provide:</strong> We collect information you provide when you create an account,
                use our services, or communicate with us.
              </li>
              <li>
                <strong>Usage information:</strong> We collect information about how you use our services, including
                your interactions with our website and features.
              </li>
              <li>
                <strong>Device information:</strong> We collect information about the devices you use to access our
                services.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> We use cookies and similar technologies to collect
                information about your browsing activities.
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Develop new products and features</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Protect against harmful conduct and investigate violations of our policies</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-300 mb-4">
              We do not share your personal information with third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>With your consent</li>
              <li>With service providers who perform services on our behalf</li>
              <li>For legal reasons, such as to comply with applicable laws or legal processes</li>
              <li>In connection with a merger, sale, or acquisition</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as the
              right to access, correct, or delete your data. You can exercise these rights by contacting us at
              privacy@web3sentinel.io.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@web3sentinel.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
