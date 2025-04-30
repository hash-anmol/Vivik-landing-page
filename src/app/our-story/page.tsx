import { Footer } from '../components/footer';
import Image from 'next/image';

export default function OurStory() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Letter-like container with more pronounced off-white background */}
        <div 
          className="w-full max-w-3xl mx-auto rounded-lg p-8 md:p-12 relative overflow-hidden"
          style={{
            backgroundColor: '#f5f2e8', // More distinct cream/off-white color
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 3px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Enhanced paper texture overlay */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none mix-blend-multiply" 
            style={{
              backgroundImage: `url('/noise.png')`,
              backgroundSize: 'cover',
            }}
          />
          
          {/* More pronounced paper edge effect - top border */}
          <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-amber-100/50 via-amber-50/90 to-amber-100/50"></div>
        
          {/* Content container */}
          <div className="relative z-10">
            {/* Letter header - styled as letterhead */}
            <div className="border-b border-gray-200/80 mb-8 pb-4">
              <h1 className="text-4xl md:text-5xl font-black text-black text-center">
                Our Story
              </h1>
            </div>
            
            {/* Founder's note content with proper formatting */}
            <div className="text-lg text-black/80 space-y-6">
              <p className="font-medium">
                Hey, I'm Anmol, Founder of Vivik!
              </p>
              
              <p>
                I'm really good at a few things:  
                <br/>
                <br />
                Understanding metaphysical concepts, 
                <br />
                engaging in deep talks, 
                <br />
                contemplating life,
                <br />
                coming up with new ideas, and 
                <br />
                working on something new every day.
              </p>
              
              <p>
                But there's one thing I'm not great at, and that's making people clearly aware of what I'm doing.
              </p>
              
              <p>
                That's exactly what happened with Vivik. After 10s of requests over a month to describe what Vivik is about, I'm finally penning this down.
              </p>
              
              <div className="border-t border-b border-gray-200/30 my-7"></div>
              
              <h2 className="text-2xl font-bold text-black/90 mt-8">The "Bro, I have a startup idea!" moment</h2>
              
              <p>
                It was a warm November morning. As usual, I was at my desk, writing articles and ideating. I felt bored and wanted to play badminton-my favorite sport. But there was no one to call. If I wanted to talk about life, startups, or even just grab a coffee, there was no one around who truly got it.
              </p>
              
              <p>
                For a long time, I dismissed my loneliness in the guise of ambition and work. But it kept coming back:<br />
                "There has to be an app that helps you find friends to connect with in real life, not just chat online," I thought.
              </p>
              
              <p>
                I tried dating apps (definitely not the right fit for platonic connections), social media (doesn't help with loneliness), and a few friendship apps (no active users, so nothing happened). Nothing worked.
              </p>
              
              <div className="border-t border-b border-gray-200/30 my-8 py-2"></div>
              
              <h2 className="text-2xl font-bold text-black/90">Reddit to the rescue</h2>
              
              <p>
                I wondered, "Is it just me? Or do others feel this too?"<br />
                So I went on Reddit and shared my idea-not once, not twice, but three times. Each time, the response was massive: 30K+ views, 200+ comments, and 150+ upvotes. Clearly, I wasn't alone.
              </p>
              
              <p>
                That's how I came across the idea behind Vivik.
              </p>
              
              <div className="border-t border-b border-gray-200/30 my-7"></div>
              
              <h2 className="text-2xl font-bold text-black/90">Personal musings</h2>
              
              <p>
                The journey has been anything but linear. There have been days I thought of dropping out, days I thought this idea was a trap, and plenty of nights spent figuring out distribution strategies, business models, revenue streams, and whatnot.
              </p>
              
              <p>
                But here I am. I still don't know where this will end up, but this time, I'm going all in. I'm committed to going from 0 to 1.
              </p>
              
              <div className="border-t border-b border-gray-200/30 my-7"></div>
              
              <h2 className="text-2xl font-bold text-black/90">What's Vivik about?</h2>
              
              <p>
                Vivik is an app to help you find people nearby who share your interests and actually chill with them offline. But that's just the idea-not the vision or the whole story.
              </p>
              
              <p className="font-medium">
                Here's what we're building:
              </p>
              
              <ul className="list-inside space-y-4 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold">FIND:</span> 
                  <span>Vivik finds you like-minded individuals near you through an algorithm and pairs you with them. You can chat, get to know each other, and maybe start vibing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">CONNECT:</span> 
                  <span>This is the exciting part-most friendship apps stop at chatting. We're about finding friends and experiencing things together. In the app, you'll find activities hosted by individuals and our partners-from book clubs and startup events to party nights and coffee meetups.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">EXPERIENCE:</span> 
                  <span>We're starting by onboarding coffee shops and book clubs, so you can vibe on your next fun project while sipping coffee with your new buddies.</span>
                </li>
              </ul>
              
              <div className="border-t border-b border-gray-200/30 my-7"></div>
              
              <h2 className="text-2xl font-bold text-black/90">What's Next</h2>
              
              <p>
                Our next step is to launch a community that does exactly what our app is meant for-even before we build the app.
              </p>
              
              <p>
                This is just the beginning. I don't know exactly where Vivik will go, but I'm excited to find out.
              </p>
              
              <p className="font-medium">
                Let's go from 0 to 1, together.
              </p>
            </div>
            
            {/* Letter footer - signature area with hand-drawn signature */}
            <div className="mt-10 pt-6 border-t border-gray-200/90 flex justify-between items-end">
              {/* Real signature image */}
              <div className="w-72 h-56 relative mb-2">
                <Image 
                  src="/Sign.png" 
                  alt="Anmol's signature" 
                  width={500}
                  height={400} 
                  className="object-contain"
                />
              </div>
              
              <div className="font-black text-xl text-black/80" style={{fontFamily: 'var(--font-archivo-black)'}}>
                VIVIK
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
