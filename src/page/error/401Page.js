import React from "react";

const Error401Page = () => {
  return (
    <div className="vh-100 bg-light">
      <div className="page d-flex justify-content-center flex-column min-vh-100">
        <div className="page-content">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="text-primary">
                  <div className="display-1 mb-3 font-weight-bold error-text">401</div>
                  <h1 className="h3 mb-1 font-weight-bold">Un Authorized Error!</h1>
                  <p className="h5 font-weight-normal mb-5 leading-normal">You may have mistyped the address or the page may have moved.</p>
                  <a className="btn btn-primary text-white mb-3 fs-18">Help</a>
                  <a className="btn text-primary border-primary mb-3 ms-2 fs-18" href="index.html">Back to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error401Page;