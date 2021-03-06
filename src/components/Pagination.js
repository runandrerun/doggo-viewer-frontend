import React from "react";
import Pagination from "react-paginating";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";

const PaginationComponent = ({
  total,
  resultsPerPage,
  pageCount,
  currentPage,
  handlePageChange,
  offset
}) => {
  return (
    <Pagination
      total={total}
      limit={resultsPerPage}
      pageCount={pageCount}
      currentPage={currentPage}
      offset={Math.ceil(offset)}
      resultsPerPage={Math.ceil(resultsPerPage)}
    >
      {({
        pages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        previousPage,
        nextPage,
        totalPages,
        getPageItemProps
      }) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "300px"
            }}
          >
            {hasPreviousPage && (
              <NavigateBefore
                style={{
                  border: "1px solid #ff8e8c ",
                  borderRadius: "50%",
                  color: "#ff8e8c"
                }}
                {...getPageItemProps({
                  pageValue: previousPage,
                  onPageChange: handlePageChange
                })}
              >
                {"<"}
              </NavigateBefore>
            )}
            {pages.map(page => {
              let activePage = { color: "#ff8e8c", cursor: "pointer" };
              if (currentPage === page) {
                activePage = {
                  border: "1px solid #ff8e8c ",
                  borderRadius: "50%",
                  color: "#ff8e8c",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ff8e8c",
                  color: "white"
                };
              }
              if (
                page < currentPage + 3 &&
                page > currentPage - 3 &&
                page != totalPages
              ) {
                return (
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    key={page}
                    style={activePage}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: handlePageChange
                    })}
                  >
                    {page}
                  </Typography>
                );
              }
            })}
            <span>...</span>
            {pages.map(page => {
              let activePage = null;
              if (currentPage === page) {
                activePage = {
                  border: "1px solid #ff8e8c ",
                  borderRadius: "50%",
                  color: "#ff8e8c",
                  cursor: "pointer"
                };
              }
              if (page > totalPages - 1) {
                return (
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    key={page}
                    style={activePage}
                    style={{
                      color: "#ff8e8c",
                      cursor: "pointer"
                    }}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: handlePageChange
                    })}
                  >
                    {page}
                  </Typography>
                );
              }
            })}
            {hasNextPage && (
              <NavigateNext
                {...getPageItemProps({
                  pageValue: nextPage,
                  onPageChange: handlePageChange
                })}
                style={{
                  border: "1px solid #ff8e8c ",
                  borderRadius: "50%",
                  color: "#ff8e8c",
                  cursor: "pointer"
                }}
              >
                {">"}
              </NavigateNext>
            )}
          </div>

          <div>
            <Typography variant="caption" gutterBottom>
              {offset} - {offset + resultsPerPage} of {total} dogs
            </Typography>
          </div>
        </div>
      )}
    </Pagination>
  );
};

export default PaginationComponent;
