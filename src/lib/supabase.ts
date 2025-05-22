
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dhczzqpmdtloprslemks.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoY3p6cXBtZHRsb3Byc2xlbWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NzE5NjksImV4cCI6MjA2MzQ0Nzk2OX0.NAJb7x4zqESmjhByLgK4zM7Pn3V49jpfxUQDHlrKyzY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
  }
});
