import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Email from 'next-auth/providers/email';
import Google from 'next-auth/providers/google';

const providers = [];

if (process.env.EMAIL_SERVER_HOST && process.env.EMAIL_FROM) {
  providers.push(
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: process.env.EMAIL_SERVER_USER
          ? {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD
            }
          : undefined
      },
      from: process.env.EMAIL_FROM
    })
  );
}

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  );
}

providers.push(
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
      const name = String(credentials?.name || 'Guest').trim();

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
);

export const {handlers, signIn, signOut, auth} = NextAuth({
  session: {strategy: 'jwt'},
  pages: {
    signIn: '/et/account'
  },
  providers,
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
