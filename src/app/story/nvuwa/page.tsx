import StoryContainer from '@/components/story/StoryContainer'
import { PFPASIA_SITE_URL } from '@/config/links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nvuwa | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: `${PFPASIA_SITE_URL}/nvuwa`,
    languages: {
      'en-US': `${PFPASIA_SITE_URL}/nvuwa`,
    },
  },
  openGraph: {
    title:
      'Nvuwa | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
  twitter: {
    title:
      'Nvuwa | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
}

const Nvuwa = () => {
  return (
    <StoryContainer
      title='I am Nvuwa'
      title2='I draw for PFPAsia'
      pfp='/assets/pfps/dan-3.png'
      alt='Dan'
    >
      <p>
        When I was in school, I loved buying comics at newsstands. I spent all
        my savings at that time just to find some peace in the pictures. I was
        never a healthy child, and I was plagued by illness as a young child.
      </p>
      <p>
        It was a time of joy and pain at the same time. You can imagine a child
        full of innocence, swimming in the imaginary, away from the real. I was
        less than ten years old. Like most people, I always wished I was the
        main character in the story.
      </p>
      <p>
        As we get older, we all realize that the world doesn&apos;t turn for us.
        But I hope that whoever you are, whether you are experiencing happiness
        or pain. When you are most confused, you can find that free self in your
        inner world. Life is not perfect, but you are perfect to yourself.
      </p>
      <p>
        Find the self you&apos;ve forgotten about and stay true to who you are.
      </p>
      <p>In a world of grey, be #RED.</p>
    </StoryContainer>
  )
}

export default Nvuwa
