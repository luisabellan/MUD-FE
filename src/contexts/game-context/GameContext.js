import { createContext } from 'react'

export const GameContext = createContext()

export const useGameContext = () => useContext(TaskContext);
