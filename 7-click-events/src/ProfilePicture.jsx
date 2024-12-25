const ProfilePicture = () => {
  return (
    <img
      onClick={(e) => (e.target.style.display = "none")}
      src={"./src/assets/cat.jpg"}
      alt="Cat"
    />
  );
};

export default ProfilePicture;
