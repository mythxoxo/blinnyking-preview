import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {handlers, signIn, signOut, auth} = NextAuth({
  session: {strategy: 'jwt'},
  pages: {
    signIn: '/en/account'
  },
  providers: [
    Credentials({
      name: 'Demo credentials',
      credentials: {
        name: {label: 'Name', type: 'text'},
        email: {label: 'Email', type: 'email'},
        password: {label: 'Password', type: 'password'}
      },
      async authorize(credentials) {
        const email = String(credentials?.email || '').trim();
        const password = String(credentials?.password || '').trim();
        const name = String(credentials?.name || 'Guest User').trim();

        if (!email || !password) {
          return null;
        }

        return {
          id: email,
          email,
          name
        };
      }
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({session, token}) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
      }
      return session;
    }
  },
  trustHost: true,
  secret: process.env.AUTH_SECRET || 'demo-auth-secret-change-in-production'
});
