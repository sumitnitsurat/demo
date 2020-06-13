import React from "react";

export const Features = () => (
    <section className="bg-app p-5">
    <div className="container mt-4">
        <p className="text-center mb-5">
            <h3 className="text-white">Namaste Features</h3>
        </p>
        <div className="row">
            <div className="col-md-4 col-12 text-center mt-2">
                <div className="col-md-6 d-block ml-auto mr-auto">
                    <i className="fa fa-video fa-3x text-white p-5" style={{ border: "1px solid #fff", borderRadius: '50%' }}></i>
                </div>
                <div className="text-white p-2">Video Calls</div>
            </div>
            <div className="col-md-4 col-12 text-center mt-2">
                <div className="col-md-6 d-block ml-auto mr-auto" >
                    <i className="fas fa-microphone-alt fa-3x text-white p-5" style={{ border: "1px solid #fff", borderRadius: '50%' }}></i>
                </div>
                <div className="text-white p-2">Audio Calls</div>
            </div>
            <div className="col-md-4 col-12 text-center mt-2">
                <div className="col-md-6 d-block ml-auto mr-auto" >
                    <i className="fa fa-desktop fa-3x text-white p-5" style={{ border: "1px solid #fff", borderRadius: '50%' }}></i>
                </div>
                <div className="text-white p-2">Share Screen</div>
            </div>
        </div>
        <div className="row mt-0 mt-sm-5">
            <div className="clearfix col-md-1 d-none d-sm-block"></div>
            <div className="col-md-5 col-12 text-center mt-2">
                <div className="col-md-6 d-block ml-auto mr-auto" >
                    <i className="fa fa-compact-disc fa-3x text-white p-5" style={{ border: "1px solid #fff", borderRadius: '50%' }}></i>
                </div>
                <div className="text-white p-2">Record Video/Record Screen</div>
            </div>
            <div className="col-md-4 col-12 text-center mt-2">
                <div className="col-md-6 d-block ml-auto mr-auto" >
                    <i className="fa fa-comment fa-3x text-white p-5" style={{ border: "1px solid #fff", borderRadius: '50%' }}></i>
                </div>
                <div className="text-white p-2">Chat Coversation</div>
            </div>
        </div>
    </div>
    </section>
);