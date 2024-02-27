import React from "react";

interface Props {
  params: {
    id: number;
    //photos: photo[]
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      UserDetailPage
      {/* ul of photos */}
    </div>
  );
};

export default UserDetailPage;
