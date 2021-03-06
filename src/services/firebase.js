import {
  collection,
  arrayUnion,
  arrayRemove,
  db,
  updateDoc,
  doc,
  getDocs,
  where,
  limit,
  query,
} from "../lib/firebase";

export async function doesUsernameExists(username) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const user = querySnapshot.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const q = query(collection(db, "users"), limit(10));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  const userRef = doc(db, "users", loggedInUserDocId);
  await updateDoc(userRef, {
    following: isFollowingProfile
      ? arrayRemove(profileId)
      : arrayUnion(profileId),
  });
}

export async function updateFollowedUserFollowers(
  profileDocId, 
  userId,
  isFollowingProfile
) {
  const userRef = doc(db, "users", profileDocId);
  await updateDoc(userRef, {
    followers: isFollowingProfile
      ? arrayRemove(userId)
      : arrayUnion(userId),
  });
}

export async function getPhotos(userId, following) {
  const q = query(collection(db, "photos"), where("userId", "in", following));
  const querySnapshot = await getDocs(q);

  const userFollowedPhotos = querySnapshot.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if(photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];

      return { username , ...photo, userLikedPhoto };
    })  
  );

  return photosWithUserDetails;

}