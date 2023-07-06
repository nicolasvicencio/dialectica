import NextAuth from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/configuration/auth-config
const handler = NextAuth({
  // https://authjs.dev/reference/providers/oauth-builtin
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.NEXT_SERVICE_ROLE_KEY,
  }),
  // ...
});

export { handler as GET, handler as POST };
