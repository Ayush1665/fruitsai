import React, { useState } from 'react';
import FAQItem from './FAQItem';
import FAQForm from './FAQForm';
import sampleImage1 from '../assets/ai.jpeg'; // Example images
import sampleImage2 from '../assets/ai.jpeg';
import sampleImage3 from '../assets/ai.jpeg';
import sampleImage4 from '../assets/ai.jpeg';

const FAQPage = () => {
  // Pre-added FAQs with questions, answers, and images
  const initialFaqs = [
    {
      id: 1,
      question: 'What fruits are high in antioxidants?',
      answer: 'Berries such as blueberries, raspberries, and blackberries are rich in antioxidants. These fruits help protect your cells from oxidative stress and may reduce the risk of chronic diseases.',
      image: sampleImage1,
      isPredefined: true, // Marking predefined FAQs
    },
    {
      id: 2,
      question: 'Which fruits can improve heart health?',
      answer: ' Fruits like avocados, bananas, and grapes are excellent for heart health. Avocados contain healthy fats, while bananas provide potassium, both of which support normal heart function.',
      image: sampleImage2,
      isPredefined: true, // Marking predefined FAQs
    },
    {
      id: 3,
      question: 'What fruits can help improve skin health?',
      answer: 'Fruits such as mangoes, oranges, and pomegranates are great for the skin. They are rich in vitamins A and C, which promote collagen production and improve skin elasticity.',
      image: sampleImage3,
      isPredefined: true, // Marking predefined FAQs
    },
    {
      id: 4,
      question: 'Can fruits help in weight management?',
      answer: 'Yes, fruits like apples, grapefruit, and berries are low in calories and high in fiber, making them ideal for weight management. They keep you full longer and satisfy cravings without excess calories.',
      image: sampleImage4,
      isPredefined: true, // Marking predefined FAQs
    }
  ];

  const [faqs, setFaqs] = useState(initialFaqs);
  const [editingFAQ, setEditingFAQ] = useState(null);

  // Function to add new FAQ
  const addFAQ = (newFAQ) => {
    setFaqs([...faqs, newFAQ]);
  };

  // Function to update FAQ
  const updateFAQ = (updatedFAQ) => {
    setFaqs(faqs.map((faq) => (faq.id === updatedFAQ.id ? updatedFAQ : faq)));
    setEditingFAQ(null);
  };

  // Function to delete a FAQ
  const deleteFAQ = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="faq-page-container">
      <h2>FAQ Section</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            setEditingFAQ={setEditingFAQ}
            deleteFAQ={deleteFAQ}
            showControls={!faq.isPredefined} // Edit/Delete only for non-predefined FAQs
          />
        ))}
      </div>

      {/* FAQ Form for adding/updating FAQs */}
      <FAQForm
        addFAQ={addFAQ}
        updateFAQ={updateFAQ}
        editingFAQ={editingFAQ}
        setEditingFAQ={setEditingFAQ}
      />
    </div>
  );
};

export default FAQPage;