 import React from 'react';
 const Profile = ({ user }) => { 
  return ( <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> 
  <h1 className="text-3xl font-bold mb-8">Sizning Profilingiz</h1> 
  <div className="w-full max-w-3xl bg-white p-4 rounded shadow-md"> 
    <h2 className="font-bold">{user.name}</h2> <p className="text-gray-600">@{user.username}</p> 
    <div className="mt-4"> <img src={user.profilePicture} className="w-full rounded mb-2" alt="profile" />
     <p>{user.bio}</p> </div> </div> </div> ); }; 
     Profile.defaultProps = { user: { name: "Bohur Maxlonov", username: "bohurmaxlonov", profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s", bio: "Bu sizning profil biografiyangiz va tavsifingiz.", }, };
      export default Profile;
  