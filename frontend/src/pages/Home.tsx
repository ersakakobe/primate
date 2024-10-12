import React from 'react'
import { Link } from 'react-router-dom'

interface FeatureCardProps {
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="border border-gray-200 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
)

const Home: React.FC = () => {
  const features = [
    { title: "Monitor", description: "Real-time threat monitoring and alerts." },
    { title: "Analyze", description: "Advanced threat analysis and risk assessment." },
    { title: "Respond", description: "Automated and manual threat response capabilities." },
  ]

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Primate</h1>
      <p className="text-xl mb-8">Advanced Threat Intelligence Platform</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
      <div className="mt-8">
        <Link 
          to="/dashboard" 
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          aria-label="Get Started with Primate"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Home