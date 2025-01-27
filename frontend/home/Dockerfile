# Stage 1: Build Stage
FROM node:22.3.0



ARG NEXT_PUBLIC_SUPABASE_URL=https://tzomxomgglrywbsulrtm.supabase.co
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6b214b21nZ2xyeXdic3VscnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjU4MDEsImV4cCI6MjA1MzU0MTgwMX0.TuBxVKwK1uE8XqzL9nnkoswZD_Yd23eZ9CHM2xZFzC8
ARG NEXT_PUBLIC_OPENAI_API_KEY=sk-************************************************ 
ARG NEXT_PUBLIC_OPENAI_ASSISTANT_KEY=asst_************************

# Update these with your Supabase details from your project settings > API 
ARG  SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6b214b21nZ2xyeXdic3VscnRtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzk2NTgwMSwiZXhwIjoyMDUzNTQxODAxfQ.3Q25ffr10x8VMVQT7TitqygwhmtJBXLeobnp_WeNb_o
 
# Update these with your Stripe credentials from https://dashboard.stripe.com/apikeys
 # NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_***************************************************************************************************
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_***************************************************************************************************
# STRIPE_SECRET_KEY=sk_live_*************************************************************************************************** 
ARG STRIPE_SECRET_KEY=sk_test_*************************************************************************************************** 
# The commented variable is usually for production webhook key. This you get in the Stripe dashboard and is usually shorter.
 # STRIPE_WEBHOOK_SECRET=whsec_********************************
ARG STRIPE_WEBHOOK_SECRET=whsec_****************************************************************

# # Update this with your stable site URL only for the production environment.
# ARG # NEXT_PUBLIC_SITE_URL=https://horizon-ui.com/shadcn-nextjs-boilerplate
# ARG # NEXT_PUBLIC_SITE_URL=https://******************.com

ARG NEXT_PUBLIC_AWS_S3_REGION=eu-north-1 
ARG NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID=******************** 
ARG NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY=**************************************** 
ARG NEXT_PUBLIC_AWS_S3_BUCKET_NAME=mybucket

# Install required dependencies for build tools
RUN apt-get update && apt-get install -y libvips-dev

# Set working directory in container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to leverage Docker cache
COPY package.json ./

# Install dependencies using Yarn
RUN yarn install --force

# Copy the rest of the application source code
COPY . .

# Build Next.js app
RUN yarn build

# Expose ports for both the app and Storybook (optional in production)
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
