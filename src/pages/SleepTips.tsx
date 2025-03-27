
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MoonIcon, SunIcon, CoffeeIcon, SmartphoneIcon, WalletIcon, DumbbellIcon, ClockIcon, BedIcon } from 'lucide-react';

const SleepTips = () => {
  const sleepTips = [
    {
      icon: <ClockIcon className="text-sleep-600" />,
      title: "Maintain a Consistent Schedule",
      description: "Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock."
    },
    {
      icon: <SunIcon className="text-sleep-600" />,
      title: "Get Natural Sunlight",
      description: "Expose yourself to sunlight in the morning to help reset your circadian rhythm and improve sleep quality."
    },
    {
      icon: <CoffeeIcon className="text-sleep-600" />,
      title: "Limit Caffeine & Alcohol",
      description: "Avoid caffeine late in the day and limit alcohol, as both can disrupt your sleep patterns and quality."
    },
    {
      icon: <BedIcon className="text-sleep-600" />,
      title: "Create a Comfortable Environment",
      description: "Ensure your bedroom is cool, dark, and quiet. Invest in a comfortable mattress and pillows."
    },
    {
      icon: <SmartphoneIcon className="text-sleep-600" />,
      title: "Reduce Blue Light Exposure",
      description: "Limit screen time before bed, or use night mode/blue light filters on your devices to minimize sleep disruption."
    },
    {
      icon: <DumbbellIcon className="text-sleep-600" />,
      title: "Exercise Regularly",
      description: "Regular physical activity can help you fall asleep faster and enjoy deeper sleep, but avoid exercising too close to bedtime."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-night-900 mb-6 text-center animate-fade-in">
            Sleep <span className="text-sleep-600">Tips</span>
          </h1>
          
          <p className="text-lg text-night-700 mb-12 text-center max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '100ms'}}>
            Beyond optimizing your sleep schedule, these evidence-based tips can help improve your sleep quality and overall well-being.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sleepTips.map((tip, index) => (
              <div 
                key={index} 
                className="sleep-card p-6 flex hover:scale-[1.02] transition-all duration-300 animate-fade-in" 
                style={{animationDelay: `${150 + (index * 50)}ms`}}
              >
                <div className="p-3 bg-sleep-50 rounded-full h-fit mr-4">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-night-900 mb-2">{tip.title}</h3>
                  <p className="text-night-600 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 sleep-card p-8 animate-fade-in" style={{animationDelay: '500ms'}}>
            <h2 className="text-2xl font-display font-semibold text-night-900 mb-4 text-center">
              The 3-2-1 Sleep Rule
            </h2>
            
            <p className="text-night-700 mb-6 text-center">
              A simple framework to improve your sleep quality:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-5 bg-sleep-50 rounded-xl">
                <div className="text-3xl font-bold text-sleep-700 mb-3">3</div>
                <p className="text-night-700">
                  Hours before bed: Stop eating heavy meals and drinking alcohol
                </p>
              </div>
              
              <div className="text-center p-5 bg-sleep-50 rounded-xl">
                <div className="text-3xl font-bold text-sleep-700 mb-3">2</div>
                <p className="text-night-700">
                  Hours before bed: Stop working on any demanding tasks
                </p>
              </div>
              
              <div className="text-center p-5 bg-sleep-50 rounded-xl">
                <div className="text-3xl font-bold text-sleep-700 mb-3">1</div>
                <p className="text-night-700">
                  Hour before bed: Turn off all screens and electronic devices
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

export default SleepTips;
