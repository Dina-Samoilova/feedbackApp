import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeebackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([{
    id: 1,
    text: 'this item from context',
    rating: 10,
  }]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map(item => item.id === id ? {...item, ...updItem} : item));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  };

  return (
    <FeebackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
    }}>
      {children}
    </FeebackContext.Provider>
  );
};

export default FeebackContext;