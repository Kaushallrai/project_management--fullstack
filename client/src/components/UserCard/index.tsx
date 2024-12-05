import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded-lg bg-white p-4 shadow-md dark:bg-dark-secondary dark:text-white">
      {user.profilePictureUrl ? (
        <Image
          src={user.profilePictureUrl}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <div className="h-10 w-10 rounded-full bg-gray-300"></div> // Placeholder if no image
      )}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {user.username}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
