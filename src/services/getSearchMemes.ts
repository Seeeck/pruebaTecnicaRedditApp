import axios from "axios";
import { ChildData, PostHint } from "../models/memeResponse";
// Make a request for a user with a given ID

interface GetMemesParams {
    nextPage?: string;
    q?: string;
  }
const getSearchMemes = async ({nextPage='',q='' }:GetMemesParams) => {
    console.log(nextPage,q)
    
    try {
        const response = await axios.get('https://www.reddit.com/r/chile/search.json',
            {
                params: {
                    limit: 100,
                    q: q.trim().length>0 ? q : '',
                    after: nextPage.trim().length>0  ? nextPage : "",
                },
                responseType: 'json'
            }
        );
        
        const children = response.data.data.children;
      
        const childrenSerialised: ChildData[] = children.filter((child: any) => {
            return child.data.link_flair_text === 'Shitposting' && child.data.post_hint === PostHint.Image;
        }).map((child: any): ChildData => {
            return {
                title: child.data.title,
                imgUrl: child.data.url,
                score: child.data.score,
                numComments: child.data.num_comments,
            };
        });
        
        return {
            nextPage: response.data.data.after,
            childrenSerialised: childrenSerialised
        };
    } catch (error) {
        throw new Error('Error fetching memes: ' + error);
    }

}



export default getSearchMemes;

