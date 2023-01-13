import { Router, useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
} from 'react'
type C_LoadingRouteProps = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}
export const C_LoadingRoute =
  createContext<C_LoadingRouteProps>(
    {} as C_LoadingRouteProps,
  )

type loadingRouteProps = {
  children: ReactNode
}

export const ContextLoadingRoute = ({
  children,
}: loadingRouteProps) => {
  const [loading, setLoading] = useState(false)

  return (
    <C_LoadingRoute.Provider
      value={{ loading, setLoading }}
    >
      {children}
    </C_LoadingRoute.Provider>
  )
}
