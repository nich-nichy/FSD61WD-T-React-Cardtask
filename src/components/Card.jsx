import React from "react";

const Card = ({
  subscription,
  price,
  users,
  storage,
  publicProject,
  community,
  privateProject,
  support,
  domain,
  report,
}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header py-3">
          <p className="my-0 fw-normal">{subscription}</p>
          <h1 className="card-title pricing-card-title">
            ${price}
            <small className="text-muted fw-light">/month</small>
          </h1>
        </div>
        <div className="card-body">
          <ul className="text-start list-unstyled mt-3 mb-4">
            <li>{users}</li>
            <li>{storage}</li>
            <li>{publicProject}</li>
            <li>{community}</li>
            <li className={privateProject.mode === false ? "text-muted" : ""}>
              {privateProject.text}
            </li>
            <li className={support.mode === false ? "text-muted" : ""}>
              {support.text}
            </li>
            <li className={domain.mode === false ? "text-muted" : ""}>
              {domain.text}
            </li>
            <li className={report.mode === false ? "text-muted" : ""}>
              {report.text}
            </li>
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary rounded-pill"
          >
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
