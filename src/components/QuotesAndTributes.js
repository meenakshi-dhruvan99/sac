import React from 'react';
import './QuotesAndTributes.css'; // Custom CSS for styling

const quotes = [
  {
    quote: "I have seen God, he bats at No. 4 for India.",
    author: "Matthew Hayden",
  },
  {
    quote: "Sachin Tendulkar has carried the burden of the nation for 21 years. It is time we carried him on our shoulders.",
    author: "Virat Kohli",
  },
  {
    quote: "When you play against Tendulkar, you almost want to see him get a few runs just to see him bat.",
    author: "Mark Waugh",
  },
  {
    quote: "Sachin Tendulkar is, in my time, the best player without a doubt - daylight second, Brian Lara third.",
    author: "Shane Warne",
  },
  {
    quote: "He can play that leg glance with a walking stick also.",
    author: "Waqar Younis",
  },
  {
    quote: "The thing I like the most about Sachin is his humility.",
    author: "Jacques Kallis",
  },
  {
    quote: "He has been the God of cricket for me and to play alongside him was an honor.",
    author: "MS Dhoni",
  },
  {
    quote: "I'll be going to bed having nightmares of Sachin just running down the wicket and belting me back over the head for six. He was unstoppable.",
    author: "Shane Warne",
  },
  {
    quote: "You get him out and half the battle is won.",
    author: "Arjuna Ranatunga",
  },
  {
    quote: "If I've to bowl to Sachin, I'll bowl with my helmet on. He hits the ball so hard.",
    author: "Dennis Lillee",
  },
  {
    quote: "On a train from Shimla to Delhi, there was a halt at one of the stations. The train stopped by for few minutes as usual. Sachin was batting on 98. The passengers, railway officials, everyone on the train waited for Sachin to complete the century. This Genius can stop time in India!",
    author: "Peter Roebuck",
  },
  {
    quote: "Commit all your crimes when Sachin is batting. They will go unnoticed because even the Lord is watching.",
    author: "A placard at the Sydney Cricket Ground",
  }
];

const QuotesAndTributes = () => {
  return (
    <div className="quotes-container">
      {quotes.map((item, index) => (
        <div key={index} className="quote-card">
          <p className="quote">"{item.quote}"</p>
          <p className="author">- {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default QuotesAndTributes;
