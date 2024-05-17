import { useEffect, useState, createContext, useContext } from 'react'
import {
  useUser as useSupaUser,
  useSessionContext,
  User,
} from '@supabase/auth-helpers-react'

import { UserDetails } from '@/types/types'

type UserContextType = {
  accessToken: string | null
  user: User | null
  userDetails: UserDetails | null
  isLoading: boolean
  subscriptions: any | null
  historySubscriptions: any | null
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export interface Props {
  [propName: string]: any
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext()
  const user = useSupaUser()
  const accessToken = session?.access_token ?? null
  const [isLoadingData, setIsloadingData] = useState(false)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
  const [subscriptions, setSubscription] = useState<any | null>(null)
  const [historySubscriptions, setHistorySubscription] = useState<any | null>(
    null,
  )

  const getUserDetails = () => supabase.from('users').select('*').single()
  const getSubscription = () =>
    supabase
      .from('paddle_subscriptions')
      .select('*')
      .eq('user_id', user?.id)
      .in('status', ['trialing', 'active', 'deleted'])
      .gt('subscription_end_date', new Date().toISOString())
      .order('created_at', { ascending: false })

  const getHistorySubscription = () =>
    supabase
      .from('paddle_payment_history')
      .select('*')
      .eq('user_id', user?.id)
      .order('created_at', { ascending: false })

  useEffect(() => {
    if (
      user &&
      !isLoadingData &&
      !userDetails &&
      !subscriptions &&
      !historySubscriptions
    ) {
      setIsloadingData(true)
      Promise.allSettled([
        getUserDetails(),
        getSubscription(),
        getHistorySubscription(),
      ]).then((results) => {
        const userDetailsPromise = results[0]
        const subscriptionPromise = results[1]
        const historySubscriptionPromise = results[2]

        if (userDetailsPromise.status === 'fulfilled')
          setUserDetails(userDetailsPromise.value.data as UserDetails)

        if (subscriptionPromise.status === 'fulfilled') {
          setSubscription(subscriptionPromise.value.data as any)
        }

        if (historySubscriptionPromise.status === 'fulfilled') {
          setHistorySubscription(historySubscriptionPromise.value.data as any)
        }
        setIsloadingData(false)
      })
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null)
      setSubscription(null)
      setHistorySubscription(null)
    }
  }, [user, isLoadingUser])

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscriptions,
    historySubscriptions,
  }

  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`)
  }
  return context
}
