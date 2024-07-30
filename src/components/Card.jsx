import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

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
      <div className="card card-theme m-3 text-center">
        <div className="card-header py-3 bg-white card-theme-header">
          <p className="my-0 fw-normal text-muted">{subscription}</p>
          <h1 className="card-title pricing-card-title">
            ${price}
            <small className="">/month</small>
          </h1>
        </div>
        <hr class="horizontal-rule" />
        <div className="card-body">
          <ul className="text-start list-unstyled mt-1 mb-2">
            <li className="m-1">
              <CheckIcon className="me-1" />
              {users}
            </li>
            <li className="m-1">
              {" "}
              <CheckIcon className="me-1" />
              {storage}
            </li>
            <li className="m-1">
              {" "}
              <CheckIcon className="me-1" />
              {publicProject}
            </li>
            <li className="m-1">
              {" "}
              <CheckIcon className="me-1" />
              {community}
            </li>
            <li
              className={
                privateProject.mode === false ? "text-muted m-1" : "m-1"
              }
            >
              {privateProject.mode === false ? (
                <ClearIcon className="me-1" />
              ) : (
                <CheckIcon className="me-1" />
              )}
              {privateProject.text}
            </li>
            <li className={support.mode === false ? "text-muted m-1" : "m-1"}>
              {privateProject.mode === false ? (
                <ClearIcon className="me-1" />
              ) : (
                <CheckIcon className="me-1" />
              )}
              {support.text}
            </li>
            <li className={domain.mode === false ? "text-muted m-1" : "m-1"}>
              {privateProject.mode === false ? (
                <ClearIcon className="me-1" />
              ) : (
                <CheckIcon className="me-1" />
              )}
              {domain.text}
            </li>
            <li className={report.mode === false ? "text-muted m-1" : "m-1"}>
              {privateProject.mode === false ? (
                <ClearIcon className="me-1" />
              ) : (
                <CheckIcon className="me-1" />
              )}
              {report.text}
            </li>
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary rounded-pill"
            style={
              subscription?.toLowerCase().includes("pro")
                ? { backgroundColor: "#007AFF", borderColor: "#007AFF" }
                : { backgroundColor: "#4BA2FF", borderColor: "#4BA2FF" }
            }
          >
            BUTTON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
