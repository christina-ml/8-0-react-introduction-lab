import React from "react";

class UserProfile extends React.Component {
    render(){
        return (
            <div className="user-profile">
                <div className="photo">
                    <img src={process.env.PUBLIC_URL + "/profile.png"} alt="profilePic" />
                </div>
                <div className="contact">
                    <h2>Jordan Walke</h2>
                    <h3>React Creator</h3>
                    <div>Lorem Ipsum</div>
                </div>
            </div>
        )
    }
}

export default UserProfile;