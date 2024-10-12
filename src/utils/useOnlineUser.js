import { useState, useEffect } from "react";
const useOnlineUser = () => {
  const [activestatus, setactivestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setactivestatus(false);
    });
    window.addEventListener("online", () => {
      setactivestatus(true);
    });
  }, []);
  return activestatus;
};

export default useOnlineUser;
