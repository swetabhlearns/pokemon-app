import React, { useState } from "react";
import Pagination from "./Pagination";

const Data = ({
  pokemonData,
  modalShow,
  setModalShow,
  indexTracker,
  setIndexTracker,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  return (
    <>
      <div className="card-container">
        {pokemonData ? (
          <>
            {pokemonData
              .slice(indexOfFirstPost, indexOfLastPost)
              .map((info, index) => (
                <div key={info.id}>
                  <div className="cards">
                    <div
                      onClick={() => {
                        setModalShow(true);
                        setIndexTracker(index);
                      }}
                      className="card-header"
                    >
                      <h2>{info.name}</h2>
                    </div>
                    <img src={`${info.images.small}`} alt="car" />
                  </div>
                </div>
              ))}
          </>
        ) : (
          <div className="loading">
            {" "}
            <h1>LOADING...</h1>
          </div>
        )}
      </div>
      <div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={pokemonData ? pokemonData.length : undefined}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Data;
