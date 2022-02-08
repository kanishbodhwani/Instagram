import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();
  return (
    <div className="p-4">
      <User fullName={fullName} username={username} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
      {/* We just have to check if other users does not have the above userId in their followers  */}
    </div>
  );
}
