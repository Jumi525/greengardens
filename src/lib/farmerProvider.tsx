"use client";

import React, {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { FarmerSchema, ProduceSchema } from "./types";

type appFarmerType = FarmerSchema & { product: ProduceSchema[] | [] };

interface FarmState {
  workspaces: appFarmerType;
}

type Action =
  | { type: "ADD_FARMER"; payload: appFarmerType }
  | {
      type: "UPDATE_FARMER";
      payload: { farmer: Partial<appFarmerType> };
    }
  | {
      type: "GET_FARMER";
    }
  | {
      type: "ADD_PRODUCE";
      payload: { produce: ProduceSchema };
    }
  | {
      type: "ADD_TO_CART";
      payload: { produceId: string; produce: ProduceSchema; farmerId: string };
    }
  | {
      type: "INC_CART";
      payload: { produceId: string; produce: ProduceSchema; farmerId: string };
    }
  | {
      type: "DEC_CART";
      payload: { produceId: string; produce: ProduceSchema; farmerId: string };
    };

const initialState: FarmState = {
  workspaces: {
    email: "",
    location: "",
    name: "",
    title: "",
    product: [],
  },
};

const farmReducer = (
  state: FarmState = initialState,
  action: Action
): FarmState => {
  switch (action.type) {
    case "ADD_FARMER":
      return {
        ...state,
        workspaces: { ...action.payload },
      };
    case "UPDATE_FARMER":
      return {
        ...state,
        workspaces: { ...state.workspaces, ...action.payload },
      };
    case "GET_FARMER":
      return {
        ...state,
        workspaces: { ...state.workspaces },
      };
    case "ADD_PRODUCE":
      return {
        ...state,
        workspaces: {
          ...state.workspaces,
          product: [...state.workspaces.product, action.payload.produce],
        },
      };
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     workspaces: state.workspaces.map((farmers) => {
    //       if (farmers.id === action.payload.farmerId) {
    //         return {
    //           ...farmers,
    //           produce: farmers.product.map((produce) => {
    //             if (produce.id === action.payload.produceId) {
    //               return {
    //                 ...produce,
    //                 produceNo: produce.quantity + 1,
    //               };
    //               return produce;
    //             }
    //           }),
    //         };
    //       }
    //       return farmers;
    //     }),
    //   };
    // case "INC_CART":
    //   return {
    //     ...state,
    //     workspaces: state.workspaces.map((farmers) => {
    //       if (farmers.id === action.payload.farmerId) {
    //         return {
    //           ...farmers,
    //           produce: farmers.product.map((produce) => {
    //             if (produce.id === action.payload.produceId) {
    //               return {
    //                 ...produce,
    //                 produceNo: produce.quantity + 1,
    //               };
    //               return produce;
    //             }
    //           }),
    //         };
    //       }
    //       return farmers;
    //     }),
    //   };
    // case "DEC_CART":
    //   return {
    //     ...state,
    //     workspaces: state.workspaces.map((farmers) => {
    //       if (farmers.id === action.payload.farmerId) {
    //         return {
    //           ...farmers,
    //           produce: farmers.product.map((produce) => {
    //             if (produce.id === action.payload.produceId) {
    //               return {
    //                 ...produce,
    //                 produceNo: produce.quantity + 1,
    //               };
    //               return produce;
    //             }
    //           }),
    //         };
    //       }
    //       return farmers;
    //     }),
    //   };
    default:
      return initialState;
  }
};

const FarmStateContext = createContext<
  | {
      state: FarmState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

interface FarmStateProviderProps {
  children: React.ReactNode;
}

const FarmStateProvider = ({ children }: FarmStateProviderProps) => {
  const [state, dispatch] = useReducer(farmReducer, initialState);

  useEffect(() => {
    console.log("App State Changed", state);
  }, [state]);

  return (
    <FarmStateContext.Provider value={{ state, dispatch }}>
      {children}
    </FarmStateContext.Provider>
  );
};

export default FarmStateProvider;

export const useFarmState = () => {
  const context = useContext(FarmStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
