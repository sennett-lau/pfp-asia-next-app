import { AuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const authConfig: AuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],

  // When the user signs in, get their token
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.userId = account.providerAccountId
      }
      return token
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // @ts-ignore
      session.userId = token.userId
      return session
    },
  },
}
