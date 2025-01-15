import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomeMessage = <h2 className = "welcome-message">Welcome {props.username}</h2>
    const loginPrompts = <h2 className = "login-prompts">Please log in to continue.</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompts)
}


UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
  }
  
  UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Khang"
  }

export default UserGreeting