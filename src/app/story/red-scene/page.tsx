import StoryContainer from '@/components/story/StoryContainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'RED Scene | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: 'https://pfpasia.com/red-scene',
    languages: {
      'en-US': 'https://pfpasia.com/red-scene',
    },
  },
  openGraph: {
    title:
      'RED Scene | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
  twitter: {
    title:
      'RED Scene | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
}

const RedScene = () => {
  return (
    <StoryContainer
      title='A RED Scence'
      title2='For GEN-Z'
      pfp='/assets/pfps/dan-5.png'
      alt='Dan'
    >
      <p>
        Mr.Strong is a Gen Z Web3 player. He likes to use REDgo, a Web3 event
        ticketing platform, to ape in various events. Participating in these
        events made him feel very cool, and can collecting numerous SBTs and
        NFTs.
      </p>
      <p>
        His favorite asset is a PFPAsia&apos;s &quot;Dan&quot; (Asian culture
        avatar), which is Mr.Strong&apos;s most hyped treasure in his whole
        collection. He usually likes to wear his limited-edition ReeeD (wearable
        fashion cold wallet, we are still in design) in collaboration with a
        luxury fashion brands. This silver-pink ReeeD was bought as a gift by a
        friend on his 25th birthday, and he is so lucky, even the strap had
        already better price in secondary market than its original value. Every
        time, Mr.Strong goes to an important event, he will wear this ReeeD and
        switch to his favorite PFP, &quot;Dan (@PFPAsia )&quot;.
      </p>
      <p>
        This &quot;Dan&quot; has a lot of stories, it is diamond hand from Day
        1, which is very rare, and there are only 10,000 in the world. This is a
        handsome male avatar with gray hair in sunglasses. In many NFT markets,
        there are many high bids, hoping that Mr.Strong can do a flip. But
        Mr.Strong want to keep his hodler’s right. He gave his Dan a nickname,
        feeling that it gave him courage and brave, and was his digital avatar.
      </p>
      <p>
        Mr.Strong likes to use REDgo to participate in activities, especially to
        participate in @PFPRED events, which can bring new knowledge and
        connections to him every time. The happiest thing is the moment when he
        buys NFT tickets in REDgo. Not only he can actually acquire a digital
        collection, accumulated life achievements and life tags, but also joined
        the community of many holders through the automatic group pulling
        function of holders (in developing). Every time he joins a new community
        of holders, he is very proud to see himself appear in the avatar of
        &quot;Dan&quot;, which makes him feel super happy with every message he
        send out. At this moment, Mr.Strong is going to @NFTAsias fireside party
        again. He walked to the door, raised his arm, and his ReeeD swiped the
        card reader in the gateway (NFC Reader).
      </p>
      <p>
        &quot;You can pass this gate, thank you for coming to our event. Because
        you are a vegan who loves sports and are donated a lots in charity, we
        have allocated you a suitable seat. We&apos;ve also arranged for two
        other Dan holders to communicate with you, so we hope you enjoy your
        evening.”
      </p>
      <p>The Mr.Strong&apos;s feels good.</p>
    </StoryContainer>
  )
}

export default RedScene
