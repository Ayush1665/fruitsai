import React from 'react';
import ChatBot from 'react-simple-chatbot';

const fruitDescriptions = {
  mango: "Known as the 'king of fruits,' mangoes are sweet, juicy, and tropical, packed with vitamins A and C.",
  apple: "A crisp, sweet fruit, apples are rich in fiber and antioxidants, widely eaten fresh or in desserts.",
  banana: "A soft, sweet fruit high in potassium, bananas provide quick energy and aid in digestion.",
  cherry: "Small, juicy, and sweet-tart, cherries are rich in antioxidants and vitamin C.",
  pineapple: "A tropical fruit with a tangy, sweet flavor, pineapples are rich in vitamin C and digestive enzymes.",
  papaya: "Soft and mildly sweet, papayas are tropical fruits rich in vitamin C and digestive enzymes.",
  pomegranate: "Known for its juicy, ruby-red seeds, pomegranate is rich in antioxidants and vitamin C.",
  kiwi: "A small, tangy fruit with a bright green flesh, kiwis are high in vitamin C and dietary fiber."
};

const ChatPage = () => {
  return (
    <div className="chatbot-page">
      <div className="chatbox">
        <ChatBot
          headerTitle="Fruit.AI"
          recognitionEnable={true}
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              trigger: '4',
            },
            {
              id: '4',
              message: 'Please type the name of a fruit...',
              trigger: '5',
            },
            {
              id: '5',
              user: true,
              trigger: ({ value }) => {
                const fruitName = value.trim().toLowerCase();
                if (fruitDescriptions[fruitName]) {
                  return '6';
                }
                return '7';
              },
            },
            {
              id: '6',
              message: ({ previousValue }) => {
                const fruitName = previousValue.trim().toLowerCase();
                return fruitDescriptions[fruitName];
              },
              trigger: '8',
            },
            {
              id: '7',
              message: 'Sorry, I don’t have information on that fruit.',
              trigger: '4',
            },
            {
              id: '8',
              message: 'What would you like to do next?',
              trigger: '9',
            },
            {
              id: '9',
              options: [
                { value: 'end', label: 'End', trigger: '10' },
                { value: 'continue', label: 'Continue', trigger: '11' },
              ],
            },
            {
              id: '10',
              message: 'Thank you for chatting! Goodbye!',
              end: true,
            },
            {
              id: '11',
              message: 'Feel free to ask more about fruits or restart the conversation anytime!',
              trigger: '4',
            }
          ]}
        />
      </div>
    </div>
  );
};

export default ChatPage;
