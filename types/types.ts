import Stripe from 'stripe';import { ComponentType, ReactNode } from 'react';


export type OpenAIModel = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4-1106-preview'| 'gpt-4o';

export interface TranslateBody {
  // inputLanguage: string;
  // outputLanguage: string;
  topic: string;
  paragraphs:string,
  essayType:string,
  model: OpenAIModel;
  type?: 'review' | 'refactor' | 'complexity' | 'normal';
}
export interface ChatBody {
  inputMessage: string;
  model: OpenAIModel;
  apiKey?: string | undefined | null;
}
export interface TranslateResponse {
  code: string;
}

export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface Customer {
  id: string /* primary key */;
  stripe_customer_id?: string;
}

export interface Product {
  id: string /* primary key */;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export interface UserDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Price {
  id: string /* primary key */;
  product_id?: string /* foreign key to products.id */;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?: Stripe.Metadata;
  products?: Product;
}

export interface PriceWithProduct extends Price {}

export interface Subscription {
  id: string /* primary key */;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string /* foreign key to prices.id */;
  quantity?: number;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}

export interface IRoute {
  path: string;
  name: string;
  layout?: string;
  exact?: boolean;
  component?: ComponentType;
  disabled?:boolean
  icon?: JSX.Element ;
  secondary?: boolean;
  collapse?: boolean;
  items?: IRoute[];
  rightElement?: boolean;
  invisible?: boolean;
}

export interface EssayBody {
  topic: string;
  words: "300" | "200";
  essayType:
    | ''
    | 'Argumentative'
    | 'Classic'
    | 'Persuasive' 
    | 'Critique' 
  model: OpenAIModel;
  apiKey?: string | undefined;
}
export interface PremiumEssayBody {
  words:string;
  topic: string; 
  essayType:
    | ''
    | 'Argumentative'
    | 'Classic'
    | 'Persuasive'
    | 'Memoir'
    | 'Critique'
    | 'Compare/Contrast'
    | 'Narrative'
    | 'Descriptive'
    | 'Expository'
    | 'Cause and Effect'
    | 'Reflective'
    | "Informative";
    tone:string;
    citation:string;
    level:string;
  model: OpenAIModel;
  apiKey?: string | undefined;
}

declare global {
  var Paddle: any;
}