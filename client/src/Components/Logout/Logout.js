import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authLogout } from "../../api/authReq";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const logoutUser = async () => {
    setIsLoading(true);
    const data = await authLogout();
    if (data.error) {
      setError(data.error);
      window.alert(data.error);
    } else {
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <button
        class="rounded bg-orange-600 py-2 font-bold text-white shadow-lg transition duration-200 hover:bg-orange-700 hover:shadow-xl"
        type="button"
        onClick={logoutUser}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
