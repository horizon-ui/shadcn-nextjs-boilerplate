import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdW1yd2VxaXN2anZxeGRvbHR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTYyMTYyNSwiZXhwIjoyMDMxMTk3NjI1fQ.hDpNR4AnTe9WP78T1whEkyh9vy8Yah5ahYKZhZKB4ro',
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdW1yd2VxaXN2anZxeGRvbHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjE2MjUsImV4cCI6MjAzMTE5NzYyNX0.FeMFgqJyZ0ZJYi4oqHRFmSZSdURwtMI1mbIToN5fx20'
  );
}
