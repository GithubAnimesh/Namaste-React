import { useEffect, useState } from "react";

const userOnlineSatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("Offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("Online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default userOnlineSatus;
