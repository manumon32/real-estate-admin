import React, {  useRef } from "react";
import {  Badge } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";

const FeesCollection = () => {
  const sort = 10;
  let jobPagination = Array(Math.ceil(data.feeTable.data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);
  const jobData = useRef(
    data.feeTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  );
  //const [demo, setdemo] = useState();
  const onClick = (i) => {
    activePag.current = i;

    jobData.current = data.feeTable.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    );
    
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Fees Collection</h4>
        </div>
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="example_wrapper" className="dataTables_wrapper">
              <table id="example" className="display w-100 dataTable">
                <thead>
                  <tr role="row">
                    {data.feeTable.columns.map((d, i) => (
                      <th key={i}>{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {jobData.current.map((d, i) => (
                    <tr key={i}>
                      {d.map((da, ii) => (
                        <td key={ii}>
                          {da === "Paid" ? (
                            <Badge bg="" className="badge-success light">Paid</Badge>
                          ) : da === "Unpaid" ? (
                            <Badge bg="" className="badge-danger light">Unpaid</Badge>
                          ) : da === "Panding" ? (
                            <Badge bg="" className="badge-warning light">Panding</Badge>
                          ) : (
                            da
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>               
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
               
                <div></div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/table-datatable-basic"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    <i className="fa fa-angle-double-left" />
                  </Link>
                  <span>
                    {jobPagination.map((number, i) => (
                      <Link
                        key={i}
                        to="/table-datatable-basic"
                        className={`paginate_button  ${
                          activePag.current === i ? "current" : ""
                        } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to="/table-datatable-basic"
                    onClick={() =>
                      activePag.current + 1 < jobPagination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    <i className="fa fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCollection;
