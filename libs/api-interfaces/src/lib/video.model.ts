export interface Video{
    id:string;
    thumbnails:string;
    link:string
}
export function generate(number: number): Video[] {
  let videos: Video[] = [];
  for (let i = 0; i < number; i++) {
    const imgUrl = `https://api.lorem.space/image/face?w=200&h=200&hash=${randomString(
      5
    )}`;
    videos = [
      ...videos,
      { link:"https://www.youtube.com/embed?v=_H9XHN5JgjU", thumbnails: imgUrl, id:randomString(13) },
    ];
  }
  console.log(videos);
  return videos;
}
export const randomString = (length: number): string => {
  const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  return Array(length)
    .join()
    .split(',')
    .map(() => s.charAt(Math.floor(Math.random() * s.length)))
    .join('');
};
