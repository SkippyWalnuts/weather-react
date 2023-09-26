import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Where to next?"
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm search-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
