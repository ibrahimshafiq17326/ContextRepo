import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  //Propertites and Data for Context
  budget: 2000,
  expenses: [
    { id: 1, name: "Ibrahim", cost: 550 },
    { id: 2, name: "Zeeshan", cost: 450 },
    { id: 3, name: "Ali", cost: 300 },
  ],
};

export const AppContext = createContext(); //creating the context

export const AppProvider = (props) => {
  debugger;
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
