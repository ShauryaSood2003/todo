import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/todos");
        } else {
            navigate("/signup");
        }
    }, [navigate]);

   return null;
};

export default Home;
