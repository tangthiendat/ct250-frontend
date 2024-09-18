import { Avatar } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface UserAvatarProps {
  avatarUrl?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatarUrl }) => {
  return avatarUrl ? (
    <Avatar src={avatarUrl} className="m-2" />
  ) : (
    <FaUserCircle className="m-2 text-3xl text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-600" />
  );
};

export default UserAvatar;
