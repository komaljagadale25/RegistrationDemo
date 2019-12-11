import React from "react";
import '../css/register.css'
class Header extends React.Component {
    state = {};
    render() {
        return (
            <div>
                <div className="header">
                    <div style={{ color: "white", fontSize: "150%", textAlign: "center" }}>Register  Here</div>
                </div>
            </div >
        );
    }
}

export default Header;