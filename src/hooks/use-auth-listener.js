import { useEffect , useContext, useState} from "react";
import FirebaseContext from "../context/firebase";


export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
    const { auth, onAuthStateChanged } = useContext(FirebaseContext);
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if(authUser) {
                // we have a user...
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            } else {
                // we dont have a user...
                localStorage.removeItem("authUser");
                setUser(null);
            }
        }); 

        return () => { 
            console.log("Cleanup");
            listener();
        }
    },[auth, onAuthStateChanged]);

    return { user };
}