// src/context/FeedbackContext.tsx
import React, { createContext, useContext, useState } from "react";

interface FeedbackContextType {
  feedback: string[];
  addFeedback: (message: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [feedback, setFeedback] = useState<string[]>([]);

  const addFeedback = (message: string) => {
    setFeedback((prev) => [...prev, message]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
};

export default FeedbackProvider;
