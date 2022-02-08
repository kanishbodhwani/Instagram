import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";

export default function usePhotos() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {
            const [{following}] = await getUserByUserId(userId); 
            let followedUserPhotos = [];

            // does the user actually follow people
            if(following.length > 0) {
                followedUserPhotos = await getPhotos(userId, following);
            }
            followedUserPhotos.sort((a,b) => b.dateCreated - a.dateCreated);
            // this is the method to create latet posts by dates and can use anywhere 
            setPhotos(followedUserPhotos);
        }
            getTimelinePhotos();
    }, [userId])

    return { photos };
};

