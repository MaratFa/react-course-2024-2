import PropTypes from "prop-types";

function UserGreeting({isLoggedIn = true, username = 'Guest'}) {
  const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>;

  const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

  return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;

