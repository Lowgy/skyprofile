import React from "react";

const Profile = props => {
  const { cute_name } = props;

  return(
    <div>
      <a href="#"> 
          <h1>{cute_name}</h1>
      </a>
    </div>
  )
}

export default Profile;
