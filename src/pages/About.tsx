
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BrainIcon, HeartPulseIcon, RefreshCwIcon, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
            About <span className="text-sleep-600">SleepCalculator</span>
          </h1>
          
          <div className="sleep-card p-8 md:p-10 animate-fade-in" style={{animationDelay: '100ms'}}>
            <p className="text-lg text-night-700 mb-6">
              SleepCalculator was created to help people understand and optimize their sleep cycles. We believe that quality sleep is fundamental to health, productivity, and overall well-being.
            </p>
            
            <p className="text-night-700 mb-6">
              Our calculator uses sleep cycle science to help you determine the best times to go to bed or wake up, ensuring you wake up between cycles, when you're in your lightest sleep phase.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-sleep-50 rounded-full mb-4">
                  <BrainIcon size={32} className="text-sleep-600" />
                </div>
                <h3 className="text-xl font-semibold text-night-900 mb-2">Science-Based</h3>
                <p className="text-night-600">
                  Our recommendations are based on established sleep science and research on sleep cycles.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-sleep-50 rounded-full mb-4">
                  <HeartPulseIcon size={32} className="text-sleep-600" />
                </div>
                <h3 className="text-xl font-semibold text-night-900 mb-2">Health-Focused</h3>
                <p className="text-night-600">
                  We prioritize your health and well-being by helping you achieve more restorative sleep.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-display font-semibold text-night-900 mb-4">
              How It Works
            </h2>
            
            <p className="text-night-700 mb-4">
              Each sleep cycle lasts approximately 90 minutes, and a typical night's sleep consists of 4-6 complete cycles. Our calculator helps you plan your sleep or wake time to align with these natural cycles.
            </p>
            
            <p className="text-night-700 mb-8">
              When you wake up at the end of a cycle, you're more likely to feel refreshed and alert, rather than groggy and disoriented.
            </p>
            
            <div className="p-5 bg-sleep-50 rounded-xl">
              <div className="flex items-start">
                <Star size={20} className="text-sleep-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-night-700">
                  <strong>Pro Tip:</strong> Consistency is key! Try to maintain a regular sleep schedule, even on weekends, to help regulate your body's internal clock.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
