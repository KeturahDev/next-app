import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage</div>;
};

export default UserDetailPage;
