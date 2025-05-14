import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    // Log backend URL to verify in deployed version (remove after testing)
    console.log("Using backend URL:", backEndUrl);

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = backEndUrl; // Optional: avoids repeating backEndUrl in every request

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null);

    const getAuthState = async () => {
        try {
            const { data } = await axios.get('/api/auth/is-auth'); // baseURL is already set
            if (data.success) {
                setIsLoggedin(true);
                getUserData(); // Fetch user details only if authenticated
            } else {
                setIsLoggedin(false);
            }
        } catch (error) {
            console.error("Error in getAuthState:", error);
            toast.error("Unable to verify auth state.");
        }
    };

    const getUserData = async () => {
        try {
            const { data } = await axios.get('/api/user/data');
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error in getUserData:", error);
            toast.error("Unable to fetch user data.");
        }
    };

    useEffect(() => {
        getAuthState();
        // eslint-disable-next-line
    }, []);

    const value = {
        backEndUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData,
        getAuthState,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
