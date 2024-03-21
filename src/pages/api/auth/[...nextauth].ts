import { authConfig } from '@/app/lib/auth'
import NextAuth from 'next-auth'

export default NextAuth(authConfig)
