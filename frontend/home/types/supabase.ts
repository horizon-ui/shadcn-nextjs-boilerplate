export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: { 
      paddle_subscriptions: {
        Row: {
          passthrough: string | null
          status: string | null
          subscription_cancel_url: string | null
          subscription_end_date: string | null
          subscription_id: string
          subscription_plan_id: string | null
          subscription_update_url: string | null
        }
        Insert: {
          passthrough?: string | null
          status?: string | null
          subscription_cancel_url?: string | null
          subscription_end_date?: string | null
          subscription_id: string
          subscription_plan_id?: string | null
          subscription_update_url?: string | null
        }
        Update: {
          passthrough?: string | null
          status?: string | null
          subscription_cancel_url?: string | null
          subscription_end_date?: string | null
          subscription_id?: string
          subscription_plan_id?: string | null
          subscription_update_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
