import React from "react";

const Error400Page = () => {
  return (
    <div className="vh-100 bg-primary">
      <div className="page d-flex justify-content-center flex-column min-vh-100">
        <div className="page-content">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="text-light">
                  <div className="display-1 mb-3 font-weight-bold error-text">400</div>
                  <h1 className="h3 mb-1 font-weight-bold">Address Not Found Error!</h1>
                  <p className="h5 font-weight-normal mb-5 leading-normal">The address you have typed was incorrect! Please try with correct address.</p>
                  <a className="btn btn-light text-primary mb-3">Help</a>
                  <a className="btn text-light border-light mb-3 ms-2" href="index.html">Back to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error400Page;
