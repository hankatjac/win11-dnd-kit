import React, { useState, useEffect } from "react";

// const generateInitials = () => {
//   const [username, setUsername] = useState("admin");
//   const words = username.split(" ");
//   const initials = words
//     .map((word) => word.charAt(0))
//     .join("")
//     .toUpperCase();
//   return initials;
// };

// export default generateInitials ;

export const useInitials = (username = "admin") => {
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const words = username.split(" ");
    const computedInitials = words
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
    setInitials(computedInitials);
  }, [username]);

  return initials;
};