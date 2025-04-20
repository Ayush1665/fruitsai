import React from 'react';
import { FaAppleAlt, FaLanguage, FaUsers, FaLightbulb, FaHeartbeat, FaChartLine, FaGlobeAmericas } from 'react-icons/fa';
import teamImage from '../assets/ai.jpeg'; // Replace with your actual image path

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 rounded-3xl border border-gray-700 animate-fade-in">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 flex items-center">
              <FaAppleAlt className="mr-4 text-blue-400" />
              About Fruit.AI
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed mb-4">
              Your intelligent fruit companion revolutionizing how you discover and enjoy nature's sweetest treasures.
            </p>
            <p className="text-gray-400 text-xl">
              We combine cutting-edge artificial intelligence with comprehensive fruit knowledge to create personalized recommendations that transform your relationship with fruits.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba" 
              alt="Colorful fruits"
              className="w-full h-auto rounded-2xl shadow-xl object-cover border-2 border-blue-400/30"
            />
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">How Fruit.AI Enhances Your Fruit Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI-Powered Recommendations */}
            <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:bg-blue-500/30 transition-all duration-300">
                  <FaLightbulb className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">Smart Matching</h3>
              </div>
              <p className="text-gray-300">
                Our proprietary AI analyzes your taste preferences, dietary needs, and health goals to suggest perfect fruits you'll love. The system learns from each interaction to refine its recommendations.
              </p>
            </div>

            {/* Nutritional Intelligence */}
            <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:bg-blue-500/30 transition-all duration-300">
                  <FaHeartbeat className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">Nutritional Intelligence</h3>
              </div>
              <p className="text-gray-300">
                Get detailed breakdowns of vitamins, minerals, and health benefits. We highlight fruits that specifically target your wellness objectives like immunity boost or digestion.
              </p>
            </div>

            {/* Global Fruit Database */}
            <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4 group-hover:bg-blue-500/30 transition-all duration-300">
                  <FaGlobeAmericas className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">Global Fruit Database</h3>
              </div>
              <p className="text-gray-300">
                Access information on over 500 fruits worldwide, from common varieties to exotic rarities. Learn about seasonal availability and origin stories.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="bg-gray-800/70 p-8 rounded-2xl border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Intelligent Approach</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <FaChartLine className="mr-3" /> Data-Driven Recommendations
              </h3>
              <p className="text-gray-300 mb-4">
                Fruit.AI's recommendation engine processes thousands of data points including:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Your personal health metrics and dietary restrictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Scientific research on nutritional benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Seasonal availability in your region</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Flavor profiles and texture preferences</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <FaUsers className="mr-3" /> Continuous Learning
              </h3>
              <p className="text-gray-300 mb-4">
                Our system evolves through multiple feedback mechanisms:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Direct user feedback on recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Nutritional science updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Global fruit availability changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Emerging culinary trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800/70 p-8 rounded-2xl border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">The Minds Behind Fruit.AI</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src={teamImage} 
                alt="Our team" 
                className="w-full h-auto rounded-2xl shadow-lg border-2 border-blue-400/30"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Our multidisciplinary team combines decades of experience in nutrition science, artificial intelligence, and horticulture to deliver the most advanced fruit discovery platform available.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaAppleAlt className="text-blue-400 text-xl" />
                  </div>
                  <h3 className="font-semibold text-blue-300 text-center">Nutritionists</h3>
                  <p className="text-xs text-gray-400 text-center">Dietary experts</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaLanguage className="text-blue-400 text-xl" />
                  </div>
                  <h3 className="font-semibold text-blue-300 text-center">AI Engineers</h3>
                  <p className="text-xs text-gray-400 text-center">Algorithm specialists</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaHeartbeat className="text-blue-400 text-xl" />
                  </div>
                  <h3 className="font-semibold text-blue-300 text-center">Horticulturists</h3>
                  <p className="text-xs text-gray-400 text-center">Fruit specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;