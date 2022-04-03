import {
  useReducer,
  createContext,
  useContext,
  useMemo,
  Dispatch,
} from "react";

import { basketReducer, initialState } from "@/modules/basket/basketReducer";

import type { BasketState } from "@/modules/basket/types";
import { ReducerPayload } from "@/types/reducer";

interface BasketWrapperProps {
  children: React.ReactNode;
}

interface ContextValue {
  basket_state: BasketState;
  basket_dispatch: Dispatch<ReducerPayload>;
}

const BasketContext = createContext<ContextValue>({} as ContextValue);

export function BasketWrapper({ children }: BasketWrapperProps) {
  const [basket_state, basket_dispatch] = useReducer(
    basketReducer,
    initialState
  );

  const contextValue: ContextValue = useMemo(() => {
    return { basket_state, basket_dispatch };
  }, [basket_state, basket_dispatch]);

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasketContext() {
  return useContext(BasketContext);
}
