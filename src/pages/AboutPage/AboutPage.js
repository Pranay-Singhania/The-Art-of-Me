import React from "react";
import "./AboutPage.css";
import img2 from "../../assets/images/aboutimg.jpg";

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="about-page">
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-right">
            <img src={img2} width="340px" alt="" />
          </div>
          <div className="about-left">
            <p className="about-desc">
              <span>Greetings, fellow internet traveler! </span>
              <br />
              <span>
                My name is Pranay Singhania, and I'm a software validation engineer at HL Mando Corporation. I've been working in this field for the
                past 1.5 years, but there's always more to learn - I'm an insatiably curious person who loves to explore new things.
              </span>
              <br />
              <span>
                When I'm not putting in work at the office, you'll probably find me with my headphones on, coding up a storm on a new website project,
                or brushing up on my Korean language skills (annyeonghaseyo, anyone?). And don't worry, I'm always caffeinated and ready to tackle
                whatever comes my way.
              </span>
            </p>
            <p className="about-desc">
              <span>
                But there's more to life than just software validation, and that's why I'm currently on the lookout for an exciting new opportunity as
                a frontend developer. I want to dive deeper into this field and learn everything there is to know about frontend development.
                {/* If
                you're looking for someone who is passionate, driven, and always willing to learn, then look no further.  */}
                Oh, and in case you're wondering, I'm also a 664 GATE rank holder - so you know I've got the brains to back up my ambition.
              </span>
              <br />
              <span>So, let's connect and see if we're a good fit. Who knows, we could be the perfect match - like caffeine and coding!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
