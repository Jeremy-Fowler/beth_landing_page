import { reactive } from "vue";
import { Book } from "./models/Book.js";

export const AppState = reactive({
  books: [
    new Book({
      title: 'Seeking the Fight',
      description: `Kyla Martin wasn't expecting more than a quiet weekend at her parent's cabin on the lake. But when she is unexpectedly introduced to a friend of a friend with a reputation for casually embarking on death defying adventures, she finds herself wondering if she's more ready than expected to match his energy. It doesn't hurt that Jake Lawrence fits the role of capable protector, but has no problem stepping back for her to take the lead. When she comes across her new acquaintance in the woods, unconscious and left for dead, Kyla realizes that Jake's current adventure may involve more death than defying this round.
      `,
      amazonPurchaseLink: 'https://a.co/d/av9ecda',
      amazonPreviewLink: 'https://read.amazon.com/kp/embed?asin=B0CG9W5J67&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_FMSK9RN7DX3AG7P9WX50'
    }),
    new Book({
      title: 'The Dramondorr: A Short Fantasy Tale',
      description: `In this short story, Kate isn't like the other girls in the kingdom of Laurient. She speaks her mind, shuns fancy clothing, and isn't afraid to go out into the forests by herself...even if she encounters thieves or bandits. The only things she is afraid of is Laurient's demise. The Marnigans are invading from the south, and Kate is helpless to prevent her kingdom's infiltration. She is also helpless as she learns that her childhood friend, the only other person to ever understand her and the heir to Laurient's throne, is on the front lines. He won't back down from the Marnigans, even if the battle is hopeless. Laurient's hope for survival is as dim as the memory of a long ago legend, telling of a dragon like creature that gave up its freedom to save a young girl because she tried to free him. This is a short fairytale story, not a full length novel.
      `,
      amazonPurchaseLink: 'https://a.co/d/gkcU1Od',
      amazonPreviewLink: 'https://read.amazon.com/kp/embed?asin=B0BX79MHGN&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_CFD7H7MN0R4EXAWX6RHJ'
    })
  ],

  activeBook: null
})
