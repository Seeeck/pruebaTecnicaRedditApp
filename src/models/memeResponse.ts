
export interface ChildData {

    title: string;
    imgUrl: string;
    score: number;
    numComments: number;



}

export enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
    Link = "link",
    Self = "self",
}
