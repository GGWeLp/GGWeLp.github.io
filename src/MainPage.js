

import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPage(props) {
  const navigate = useNavigate();
  useEffect(async () => {

  }, [])


  const urlparams = new URLSearchParams(window.location.search);
  const roomId = urlparams.get("id");
  const isRedirected = sessionStorage.getItem('redirected');
  return (
    <div className="MainPage">
      <button onClick={() => {
        sessionStorage.setItem('userName', document.getElementById('userName').value);
        navigate({pathname: "/app", search: "?id=" + roomId});
      }}>{isRedirected? 'Join': 'Create'}</button>
      <input id="userName"/>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
    //   stream: state.mainStream,
    //   user: state.currentUser,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    //   setMainStream: (stream) => dispatch(setMainStream(stream)),
    //   addParticipant: (user) => dispatch(addParticipant(user)),
    //   setUser: (user) => dispatch(setUser(user)),
    //   removeParticipant: (userId) => dispatch(removeParticipant(userId)),
    //   updateParticipant: (user) => dispatch(updateParticipant(user)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
  