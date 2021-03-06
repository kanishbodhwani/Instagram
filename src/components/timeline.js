import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  // we need to get the logged in user's photos
  const { photos } = usePhotos();
  console.log(photos);
  // use react skeleton
  // if we have photos , render them ( create a post component)
  // if user has no photos tell them to create some

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <Skeleton key={index} count={4} width={640} height={500} className="mb-5" />
          ))}
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl"> Follow people see photos! </p>
      )}
    </div>
  );
}
