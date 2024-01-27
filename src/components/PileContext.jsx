/* eslint-disable react/prop-types */
import { createContext } from "react";
import piles from "../assets/PickAPile.json";

export const PileContext = createContext({});

function PileContextProvider({ children }) {
  const questions = piles.Questions;
  const answers = piles.Answers;

  return (
    <PileContext.Provider value={{ questions, answers }}>
      {children}
    </PileContext.Provider>
  );
}
export default PileContextProvider;
