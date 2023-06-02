import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Citation from './components/Citation';
import SocialMedia from './components/SocialMedia'

function App() {
  return (
      <div className="App">
          <Header appName="Maverkick" />

          <main className="container main-content">
              <div className="scroll-section">
                  <p className="mission-statement">Our mission is to revolutionize learning through engaging and interactive short videos.</p>
                  <p className="ideology">We see any skill or knowledge as a house. And every lesson you take is like a brick. There are many different sizes of the bricks, but we are having an opinion that smaller is better. It comes from our life experience, as we're seeing how our lives are decided in momentary situations, short conversations or just a second look in the eye. But our learning nowadays doesn't look like that - we've been told that more is better and we have to go through hours of the materials, which is hard to assimilate. And that's why we go to social media, where everything is so fast,bright and funny. And that's why many of us feels depressed when we need to learn. And that's why we're creating this. That's why our goal is to  <strong> give people those small bricks and teach them how to use it to build whatever they want.</strong></p>
              </div>

              <div className="scroll-section"> 
                  <h2>How do we approach that?</h2>
                  <Features />
              </div>

              <div className="citations-section">
                  <h2>Why did we start it ?</h2>
                  <div className="citations">
                      <Citation 
                          quote="I got extremly painful experience of learning at the university, when you're getting tons of information and you're trying to remember it, but really you can't.That's when I understand that we need to change something."
                          author="Eugene Solovei" 
                      />
                      <Citation 
                          quote="We believe that the future of education lies in short, engaging content..."
                          author="Creator 2"
                      />
                  </div>
              </div>
          </main>

          <footer className="social-media-container">
            <h2>I see you like it😍</h2>
            <h3>Join our social media, so we could better know your problems, ideas and expectations - Help us to build the best educational experience - Be among the first, who will lay the bricks for the future🧱</h3>
            <div className="social-media-icons">
                <SocialMedia platform="twitter" link="https://twitter.com/MaverkickIt" />
                <SocialMedia platform="instagram" link="https://www.instagram.com/maverkickit/" />
            </div>
          </footer>

      </div>
  );
}


export default App;
