"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = (id) => {
  const [allPosts, setAllPosts] = useState([]);
  const [nameTest, setNameTest] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id.params.id}/posts`);
      const data = await response.json();
      setNameTest(data[0].creator.username);
      setAllPosts(data);
    };

    if (id.params.id) fetchPosts();
  }, [id.params.id]);

  return (
    <Profile
      name={nameTest}
      desc={`Welcome to ${nameTest} personalized profile page. Examine their exceptional prompts and get inspired by others power of imagination`}
      data={allPosts}
    />
  );
};

export default MyProfile;
