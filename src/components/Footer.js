import React from "react";
import '../css/register.css'
class Footer extends React.Component {
    state = {};
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="row">
                        <div className="col-md-3">
                            <div style={{ paddingLeft: "5px", marginTop: "10px" }}>
                                <img

                                    style={{
                                        width: "143px",
                                        background: "#FFF",
                                        height: "44px"
                                    }}
                                ></img>
                            </div>
                        </div>

                        <div col-md-6>
                            <p
                                style={{
                                    marginTop: "20px",
                                    color: " #FFF"
                                }}
                            >
                                Copyright @ 2019 Credentek Software & Consultancy Private
                                Limited All Right Reserved.
              </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;