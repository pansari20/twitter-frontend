import React from "react";

export default function Profile({profileData}) {

  return (
    <>
      <div className="profile-section">
        <h1>Profile</h1>
        <table className="profile-table">
          <tr>
            <td className="profile-table-item">Name</td>
            <td className="profile-table-item">{profileData.first_name} {profileData.last_name}</td>
          </tr>
          <tr>
            <td className="profile-table-item">Email</td>
            <td className="profile-table-item">{profileData.email}</td>
          </tr>
          <tr>
            <td className="profile-table-item">Gender</td>
            <td className="profile-table-item">{profileData.gender}</td>
          </tr>
          <tr>
            <td className="profile-table-item">Country</td>
            <td className="profile-table-item">{profileData.country}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
