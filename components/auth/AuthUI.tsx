'use client';

import { useSupabase } from '@/app/supabase-provider';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import { useTheme } from 'next-themes';

export default function AuthUI() {
  const { supabase } = useSupabase();
  const { theme, setTheme } = useTheme();

  const customTheme = {
    default: {
      colors: {
        brand: 'hsl(var(--primary))',
        brandAccent: 'hsl(var(--primary))',
        brandButtonText: 'white',
        defaultButtonBackground: 'hsl(var(--background))',
        defaultButtonBackgroundHover: 'hsl(var(--background))',
        defaultButtonBorder: 'hsl(var(--border))',
        defaultButtonText: 'hsl(var(--foreground))',
        dividerBackground: 'hsl(var(--border))',
        inputBackground: 'transparent',
        inputBorder: 'hsl(var(--border))',
        inputBorderHover: 'hsl(var(--border))',
        inputBorderFocus: 'hsl(var(--border))',
        inputText: 'black',
        inputLabelText: 'gray',
        inputPlaceholder: 'darkgray',
        messageText: 'gray',
        messageTextDanger: 'red',
        anchorTextColor: 'gray',
        anchorTextHoverColor: 'darkgray',
      },
      space: {
        spaceSmall: '4px',
        spaceMedium: '8px',
        spaceLarge: '16px',
        labelBottomMargin: '8px',
        anchorBottomMargin: '4px',
        emailInputSpacing: '4px',
        socialAuthSpacing: '4px',
        buttonPadding: '14px 14px',
        inputPadding: '14px 14px',
      },
      fontSizes: {
        baseBodySize: '13px',
        baseInputSize: '14px',
        baseLabelSize: '14px',
        baseButtonSize: '14px',
      },
      fonts: {
        bodyFontFamily: `Inter, sans-serif`,
        buttonFontFamily: `Inter, sans-serif`,
        inputFontFamily: `Inter, sans-serif`,
        labelFontFamily: `Inter, sans-serif`,
      },
      borderWidths: {
        buttonBorderWidth: '1px',
        inputBorderWidth: '1px',
      },
      radii: {
        borderRadiusButton: '8px',
        buttonBorderRadius: '8px',
        inputBorderRadius: '8px',
      },
    },
    dark: {
      colors: {
        brand: 'hsl(var(--primary))',
        brandAccent: 'hsl(var(--primary))',
        brandButtonText: 'black',
        defaultButtonprimary: 'hsl(var(--background))',
        defaultButtonBackgroundHover: '#F7FAFC',
        defaultButtonBorder: 'hsl(var(--border))',
        defaultButtonText: 'white',
        dividerBackground: 'hsl(var(--border))',
        inputBackground: 'transparent',
        inputBorder: 'hsl(var(--border))',
        inputBorderHover: 'hsl(var(--border))',
        inputBorderFocus: 'hsl(var(--border))',
        inputText: 'white',
        inputLabelText: 'white',
        inputPlaceholder: 'hsl(240, 5%, 65%)',
        messageText: 'white',
        messageTextDanger: 'red',
        anchorTextColor: 'white',
        anchorTextHoverColor: 'white',
      },
      space: {
        spaceSmall: '4px',
        spaceMedium: '8px',
        spaceLarge: '16px',
        labelBottomMargin: '8px',
        anchorBottomMargin: '4px',
        emailInputSpacing: '4px',
        socialAuthSpacing: '4px',
        buttonPadding: '14px 14px',
        inputPadding: '14px 14px',
      },
      fontSizes: {
        baseBodySize: '13px',
        baseInputSize: '14px',
        baseLabelSize: '14px',
        baseButtonSize: '14px',
      },
      fonts: {
        bodyFontFamily: `Inter, sans-serif`,
        buttonFontFamily: `Inter, sans-serif`,
        inputFontFamily: `Inter, sans-serif`,
        labelFontFamily: `Inter, sans-serif`,
      },
      borderWidths: {
        buttonBorderWidth: '1px',
        inputBorderWidth: '1px',
      },
      radii: {
        borderRadiusButton: '8px',
        buttonBorderRadius: '8px',
        inputBorderRadius: '8px',
      },
    },
  };
  return (
    <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] md:max-w-full lg:mt-auto lg:max-w-[420px]">
      <p className="text-[32px] font-bold text-zinc-950 dark:text-white">
        Sign In
      </p>
      <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">
        Enter your email and password to sign in!
      </p>
      <Auth
        supabaseClient={supabase}
        providers={['google']}
        redirectTo={`${getURL()}/auth/callback`}
        appearance={{ theme: customTheme }}
        theme={theme === 'dark' ? 'dark' : 'default'}
      />
    </div>
  );
}
