'use client';

// @ts-nocheck
// Custom components
import { FooterWebsite } from '../footer/FooterWebsite';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Faq from '@/components/landing/faq';
import InnerContent from '@/components/layout/innerContent';
import NavbarFixed from '@/components/navbar/NavbarFixed';
import { Card } from '@/components/ui/card';
import { Database } from '@/types/types_db';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { Session, User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcApplePay,
} from 'react-icons/fa';
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi2';
import { MdAttachMoney, MdLock } from 'react-icons/md';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  session: Session | null;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

export default function Pricing({
  session,
  user,
  products,
  subscription,
}: Props) {
  const router = useRouter();
  // const [billingInterval, setBillingInterval] =
  //  useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/dashboard/signin');
    }
    if (subscription) {
      return router.push('/dashboard/subscription');
    }
    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };
  const [version, setVersion] = useState('monthly');

  return (
    <div
      className="relative w-full flex-col overflow-hidden bg-white bg-cover pt-[120px] dark:bg-zinc-950 md:pt-[220px]"
      id="pricing"
    >
      <NavbarFixed session={session} />
      <InnerContent extra="z-[1] max-w-full md:max-w-full xl:max-w-[1170px]">
        {/* Title */}
        <div className="mb-20 w-full flex-col px-5 md:px-0">
          <div className="flex flex-col items-center justify-center px-5 text-start md:px-10 xl:px-0">
            <Badge
              variant="outline"
              className="mb-3.5 w-max px-4 py-2 text-zinc-950 dark:border-none dark:bg-zinc-800 dark:text-white"
            >
              PRICING PLANS
            </Badge>
            <h1 className="w-full text-center text-[28px] font-extrabold leading-[38px] text-zinc-950 dark:text-white md:w-[90%] md:text-[40px] md:leading-[50px] lg:w-[64%] xl:w-[70%] xl:text-[48px] xl:leading-[60px] 2xl:w-[60%]">
              Choose the right pricing plan for you and your business
            </h1>
          </div>
        </div>
        <div className="mb-5 flex w-full flex-col gap-5 px-5 md:px-0 lg:flex-row">
          {/* LEFT */}
          <Card className="mx-auto max-w-[377px] flex-col items-center border-zinc-200 bg-white p-4 !pt-[26px] dark:border-zinc-800 dark:bg-zinc-950 md:p-[26px]">
            <div className="mx-auto mb-5 flex w-max py-4">
              <p className="text-center text-2xl font-semibold">Free Plan</p>
            </div>
            <div className="z-[1] mb-10 flex w-full flex-col rounded-lg bg-zinc-100 px-4 pb-10 pt-10 dark:bg-zinc-900 md:px-[34px]">
              <div className="mb-8 flex flex-row justify-center">
                <p className="text-[48px] font-extrabold leading-none md:text-[54px]">
                  Free
                </p>
              </div>
              <a href="/dashboard/signin">
                <Button className="mt-auto flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-5 text-base font-medium">
                  Get started now
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="flex w-full flex-col">
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Standard Essays
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Up to 4 Essay types
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Up to 200 words per Essay
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineXCircle className="mr-2.5 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 xl:text-base">
                  Essay Tones (Academic, etc.)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineXCircle className="mr-2.5 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 xl:text-base">
                  Academic Citation formats (APA, etc)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineXCircle className="mr-2.5 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 xl:text-base">
                  Academic Levels (Master, etc.)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineXCircle className="mr-2.5 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 xl:text-base">
                  Premium features
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineXCircle className="mr-2.5 h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 xl:text-base">
                  Priority Support
                </span>
              </div>
            </div>
          </Card>
          {/* CENTER */}
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.id === 'price_1OAEhUDUwD2aqzMkbQUIFuiI',
            );
            if (product.id === 'prod_OXGZkl2lnZ9VId') {
              if (!price) return null;
              return (
                <Card
                  className="mx-auto max-w-[377px] flex-col items-center border-zinc-200 bg-zinc-950 p-4 px-6 pt-[26px] dark:border-zinc-950 dark:bg-zinc-900"
                  key={product.id}
                >
                  <div className="mx-auto mb-5 flex w-max py-4">
                    <p className="text-center text-2xl font-semibold text-white">
                      {/* {product.name?.toString()} */}
                      Unlimited Plan
                    </p>
                  </div>
                  <div className="z-[1] mb-10 flex w-full flex-col rounded-lg border-[1px] border-zinc-800 bg-zinc-900 px-4 pb-10 pt-10 dark:bg-zinc-800 md:px-8">
                    <div className="mb-8 flex flex-row justify-center">
                      <p className="mr-2 text-5xl font-extrabold leading-none text-white">
                        $
                        {price.unit_amount !== null
                          ? price.unit_amount / 100
                          : price.unit_amount}
                      </p>
                      <div className="flex flex-col">
                        <p className="mt-auto text-sm font-bold leading-none text-white">
                          {version !== 'yearly' ? '/month' : '/month'}
                        </p>
                        <p className="dark mb-1 mt-2 text-sm font-medium leading-none text-white line-through">
                          reg.$108
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleCheckout(price)}
                      className="dark mt-auto flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-5 text-base font-medium"
                    >
                      {subscription ? 'Manage' : 'Get started now'}
                    </Button>
                  </div>
                  {/* Features */}
                  <div className="flex w-full flex-col text-white">
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Unlimited Premium Essays / year
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Access to 12+ Essay types
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Up to 2500 words per Essay
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Academic Citation formats (APA, etc)
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Essay Tones (Academic, etc.)
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Academic Levels (Master, etc.)
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Exceptional Essays in seconds
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Easy-to-use Essay Generator
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Priority Support
                      </span>
                    </div>
                  </div>
                </Card>
              );
            }
          })}
          {/* EXAMPLE CENTER */}
          <Card className="mx-auto max-w-[377px] flex-col items-center border-zinc-200 bg-zinc-950 p-4 px-6 pt-[26px] dark:border-zinc-950 dark:bg-zinc-900">
            <div className="mx-auto mb-5 flex w-max py-4">
              <p className="text-center text-2xl font-semibold text-white">
                Unlimited Plan
              </p>
            </div>
            <div className="z-[1] mb-10 flex w-full flex-col rounded-lg border-[1px] border-zinc-800 bg-zinc-900 px-4 pb-10 pt-10 dark:bg-zinc-800 md:px-8">
              <div className="mb-8 flex flex-row justify-center">
                <p className="mr-2 text-5xl font-extrabold leading-none text-white">
                  $9
                </p>
                <div className="flex flex-col">
                  <p className="mb-2 mt-auto text-sm font-bold leading-none text-white">
                    {version !== 'yearly' ? '/month' : '/month'}
                  </p>
                </div>
              </div>
              <Button className="dark mt-auto flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-5 text-base font-medium">
                {subscription ? 'Manage' : 'Get started now'}
              </Button>
            </div>
            {/* Features */}
            <div className="flex w-full flex-col text-white">
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Unlimited Premium Essays / year
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Access to 12+ Essay types
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Up to 2500 words per Essay
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Academic Citation formats (APA, etc)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Essay Tones (Academic, etc.)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Academic Levels (Master, etc.)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Exceptional Essays in seconds
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Easy-to-use Essay Generator
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="text-navy-950 mr-2.5 h-5 w-5 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Priority Support
                </span>
              </div>
            </div>
          </Card>
          {/* EXAMPLE RIGHT */}
          <Card className="mx-auto max-w-[377px] flex-col items-center border-zinc-200 bg-white p-4 !pt-[26px] dark:border-zinc-800 dark:bg-zinc-950 md:p-[26px]">
            <div className="mx-auto mb-1 flex w-max py-4">
              <p className="me-1.5 text-center text-2xl font-semibold">
                Yearly Plan
              </p>
              <Badge
                variant="outline"
                className="mb-3.5 w-max px-4 py-2 text-zinc-950 dark:border-none dark:bg-zinc-800 dark:text-white"
              >
                SAVE 35%
              </Badge>
            </div>
            <div className="z-[1] mb-10 flex w-full flex-col rounded-lg bg-zinc-100 px-4 pb-10 pt-10 dark:bg-zinc-900 md:px-[34px]">
              <div className="mb-8 flex flex-row justify-center">
                <p className="me-2 text-[48px] font-extrabold leading-none md:text-[54px]">
                  $69
                </p>
                <div className="flex flex-col pb-1 text-zinc-950 dark:text-white">
                  <p className="mt-auto text-sm font-bold leading-none">
                    /year
                  </p>
                  <p className="mb-1 mt-2 text-sm font-medium leading-none line-through">
                    reg.$108
                  </p>
                </div>
              </div>
              <Button className="mt-auto flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-5 text-base font-medium">
                Get started now
              </Button>
            </div>

            {/* Features */}
            <div className="flex w-full flex-col">
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Unlimited Premium Essays / year
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Access to 12+ Essay types
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Up to 2500 words per Essay
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Academic Citation formats (APA, etc)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Essay Tones (Academic, etc.)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Academic Levels (Master, etc.)
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Exceptional Essays in seconds
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Easy-to-use Essay Generator
                </span>
              </div>
              <div className="mb-8 flex items-center">
                <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                <span className="text-sm font-medium xl:text-base">
                  Priority Support
                </span>
              </div>
            </div>
          </Card>
          {/* RIGHT */}
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.id === 'price_1OAHvkDUwD2aqzMkHMJCFa5U',
            );
            if (product.id === 'prod_OXGeiZteF0OyEt') {
              if (!price) return null;
              return (
                <Card
                  key={product.id}
                  className="mx-auto max-w-[377px] flex-col items-center border-zinc-200 bg-white p-4 !pt-[26px] dark:border-zinc-800 dark:bg-zinc-950 md:p-[26px]"
                >
                  <div className="mx-auto mb-1 flex w-max py-4">
                    <p className="me-1.5 text-center text-2xl font-semibold">
                      {/* {product.name?.toString()} */}
                      Yearly Plan
                    </p>
                    <Badge
                      variant="outline"
                      className="w-max px-4 py-2 text-zinc-950 dark:border-none dark:bg-zinc-800 dark:text-white"
                    >
                      SAVE 35%
                    </Badge>
                  </div>
                  <div className="z-[1] mb-10 flex w-full flex-col rounded-lg bg-zinc-100 px-4 pb-10 pt-10 dark:bg-zinc-900 md:px-[34px]">
                    <div className="mb-8 flex flex-row justify-center">
                      <p className="me-2 text-[48px] font-extrabold leading-none md:text-[54px]">
                        $
                        {price.unit_amount !== null
                          ? price.unit_amount / 100
                          : price.unit_amount}
                      </p>
                      <div className="flex flex-col pb-1 text-zinc-950 dark:text-white">
                        <p className="mt-auto text-sm font-bold leading-none">
                          /year
                        </p>
                        <p className="mb-1 mt-2 text-sm font-medium leading-none line-through">
                          reg.$108
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleCheckout(price)}
                      className="mt-auto flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-5 text-base font-medium"
                    >
                      Get started now
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="flex w-full flex-col">
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Unlimited Premium Essays / year
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Access to 12+ Essay types
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Up to 2500 words per Essay
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Academic Citation formats (APA, etc)
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Essay Tones (Academic, etc.)
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Academic Levels (Master, etc.)
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Exceptional Essays in seconds
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Easy-to-use Essay Generator
                      </span>
                    </div>
                    <div className="mb-8 flex items-center">
                      <HiOutlineCheckCircle className="mr-2.5 h-5 w-5 text-zinc-950 dark:text-white" />
                      <span className="text-sm font-medium xl:text-base">
                        Priority Support
                      </span>
                    </div>
                  </div>
                </Card>
              );
            }
          })}
        </div>
        <div className="mt-8 flex flex-col items-center px-5 md:px-0">
          <div className="mb-5 flex items-center">
            <MdAttachMoney className="mr-1 h-6 w-6 text-zinc-950 dark:text-white" />
            <span className="text-sm font-medium text-zinc-950 dark:text-white">
              14-Days money back
            </span>
          </div>
          <div className="mb-5 flex items-center">
            <MdLock className="dark:Text-white mr-1 h-6 w-6 text-zinc-950 dark:text-white" />
            <span className="text-sm font-medium text-zinc-950 dark:text-white">
              Secured AES-256 Encrypted payments powered by Stripe:
            </span>
          </div>
          <div className="mb-5 flex items-center">
            <FaCcVisa className="mr-2.5 h-[30px] w-[30px] text-zinc-950 dark:text-white" />
            <FaCcMastercard className="mr-2.5 h-[30px] w-[30px] text-zinc-950 dark:text-white" />
            <FaCcPaypal className="mr-2.5 h-[30px] w-[30px] text-zinc-950 dark:text-white" />
            <FaCcApplePay className="mr-2.5 h-[30px] w-[30px] text-zinc-950 dark:text-white" />
            <FaCcAmex className="h-[30px] w-[30px] text-zinc-950 dark:text-white" />
          </div>
        </div>

        <div className="mb-0 mt-20 flex h-[1px] w-full max-w-[1170px] bg-zinc-200 dark:bg-zinc-800 md:mt-[100px] lg:mt-20" />
      </InnerContent>
      <Faq />
      <FooterWebsite />
    </div>
  );
}
