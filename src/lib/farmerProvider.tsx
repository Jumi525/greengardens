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
      type: "ADD_CART";
      payload: { produce: ProduceSchema };
    }
  | {
      type: "INC_CART";
      payload: { produceId: string; produce: ProduceSchema; price?: number };
    }
  | {
      type: "DEC_CART";
      payload: { produceId: string; produce: ProduceSchema };
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
    case "ADD_CART":
      return {
        ...state,
        workspaces: {
          ...state.workspaces,
          product: [...state.workspaces.product, action.payload.produce],
        },
      };
    case "INC_CART":
      return {
        ...state,
        workspaces: {
          ...state.workspaces,
          product:
            state.workspaces.product.length > 0
              ? state.workspaces.product.map((product) => {
                  console.log(product.quantity);
                  if (product.id === action.payload.produceId)
                    return {
                      ...product,
                      quantity: product.quantity + 1,
                      price: 300 * (product.quantity + 1),
                    };
                  return product;
                })
              : [...state.workspaces.product, action.payload.produce],
        },
      };
    case "DEC_CART":
      return {
        ...state,
        workspaces: {
          ...state.workspaces,
          product: state.workspaces.product
            .filter((produce) => produce.quantity > 0)
            .map((product) => {
              if (product.id === action.payload.produceId)
                return {
                  ...product,
                  quantity: product.quantity - 1,
                  price: product.price - 300,
                };
              return product;
            }),
        },
      };
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
