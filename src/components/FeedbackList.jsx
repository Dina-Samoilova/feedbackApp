import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackItem } from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext'

export const FeedbackList = () => {
  const { feedback }= useContext(FeedbackContext);

  return (
    <>
      {(!feedback | feedback.length === 0)
        ? (
          <p>No Feedback Yet</p>
        )
        : (
          <div className="feedback-list">
            <AnimatePresence>
              {feedback.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FeedbackItem
                    key={item.id}
                    item={item}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )
      }
    </>
  );
};
