import React from "react";
import Profile from "./Profile";

const Results = ({ profiles, uuid}) => {
  return (
    <div>
      {!Object.keys(profiles).length < 0? (
        <h1>No Profiles Found.</h1>
      ) : (
        Object.keys(profiles).map((item, index) => {
          return(
            <Profile
              key={index}
              cute_name={profiles[item].cute_name}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;