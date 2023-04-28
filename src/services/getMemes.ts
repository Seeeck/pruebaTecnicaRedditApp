import axios from "axios";
import { ChildData, PostHint } from "../models/memeResponse";
// Make a request for a user with a given ID

interface GetMemesParams {
    nextPage?: string;
}
const getMemes = async ({ nextPage='' }: GetMemesParams) => {
    try {
        const response = await axios.get('https://www.reddit.com/r/chile/new/.json',
            {
                params: {
                    limit: 100,
                    after: nextPage!.trim().length > 0  ? nextPage : "",
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



export default getMemes;

