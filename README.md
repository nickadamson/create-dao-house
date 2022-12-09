# its-our-house-house-house

## vibe
[![Video](https://img.youtube.com/vi/Bbdx9n2lOXo/maxresdefault.jpg)](https://www.youtube.com/watch?v=Bbdx9n2lOXo)

### init thoughts

- #### for styling we have a few choices. the reason I've selected these is because they seem to be the most common in the zora network of open source projects
  - :confused: EmotionCSS: used in [@ourzora/nft-components](https://github.com/ourzora/nft-components) and a couple of their other projects, however....
  - :eyes: Zord: @ourzora/zord is the new (or soon to be) official Zora UI library and is being used in [the nouns-marketplace repo](https://github.com/ourzora/nouns-marketplace). cons: its in alpha and theres no docs -- only a [playground](https://zord-playroom.vercel.app/). it seems to me like it will eventually be the best choice but I can't say for certain it is right now.
  - :heart: Tailwind: I'll die on this hill but tailwind is the [dylan of css frameworks](https://www.youtube.com/watch?v=5HRY4LUl5lc)
  
- #### basic components:
  - ##### first we need to get a big picture understanding of what a nounishDAO looks like
    - here are two examples of custom websites off these daos
      - [public---assembly aka ┅Ⓟ](https://www.public---assembly.com/)
      - [PurpleDAO (focused around farcaster.xyz protocol)](https://purple.construction/)
    - with those in mind, and going back to [https://nouns.build/](https://nouns.build/) you can see:
      - there's a daily auction (or every x days auction, not important)
        - winners/owners of the auctions vote on proposals
          + really want to dial in on the community here, whether its ultra-custom styling for them, new ways to communicate, etc
      - there's a classic <about> page
      - nouns.build also has [treasury & proposal sections](https://nouns.build/dao/0xd2e7684cf3e2511cc3b4538bb2885dc206583076/8) underneath daily auction
      - [nouns.market provides a grid view of daily auction along with some financial info](https://noun.market/collections/0xdf9b7d26c8fc806b1ae6273684556761ff02d422)
    - there's no subgraph (GQL indexer of contract events)
      - i'm on discord talking to someone I might be able to collab with on it but for now..
        - example of the most [important types in context of discord/twitter bot](https://github.com/ourzora/nouns-builder-bot/blob/main/src/messages/twitter.ts)
      - should've linked this earlier but [docs for smart contracts](https://docs.zora.co/docs/smart-contracts/nouns-builder/intro)
      
      
## thats all for now, folks more to come
