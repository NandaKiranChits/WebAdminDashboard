import React from 'react';

export default function CustomTable({rows,values,tableName, color }) {
   
    return (
      <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }

          style={{maxHeight:"300px"}}
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                    {tableName}
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  {
                    rows.map((row)=>(
                    
                        <th
                          className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                              ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                              : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                            }
                          >
                            {row}
                        </th>
                    
                    ))
                  }
                </tr>
              </thead>
              <tbody >
                {
                  values.map((value)=>(
                      <tr>
                        {
                          value.map((val)=>{
                            return (
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{val}</td>
                            );
                          })
                        }
                      </tr>
                  ))
                }               
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

CustomTable.defaultProps = {
  tableName : "Table"
}


  
