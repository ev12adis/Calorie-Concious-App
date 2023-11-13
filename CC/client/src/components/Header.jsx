import React, { useContext } from "react";
import { useEffect } from "react";
import DataFinder from "../apis/DataFinder";
import { DataContext } from "../context/DataContext";
import { useHistory } from "react";

const Header = () => {
  /*let history = useHistory();
  const { data, setData } = useContext(DataContext);
  */
  /*useEffect(() => {
        async function fetchData() {
          try {
              const response = await DataFinder.get("/");
              console.log(response);
            } catch (err) {}
        }
        fetchData();
      }, []); 
    */
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await DataFinder.("api/");
        //setData(response.data.data.Data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="front-weight-light display-1 text-center">
        Calorie Concious
      </h1>
    </div>
  );
};*/
return (
  <div style={{ backgroundColor: '#BEFF82', minHeight: '100vh', padding: '20px' }}>
    <div className="container">
      <header className="mb-3 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img src="C:\Users\ev12a.LAPTOP-PP3UI0QV\OneDrive\Desktop\4900 Project\files\logowBackgroundColor.png" alt="Custom Logo" className="img-fluid mb-3" />

        {/* Login and Signup buttons */}
        <div>
          <button className="btn btn-success mr-2">Login</button>
          <button className="btn btn-warning">Signup</button>
        </div>
      </header>

      <main>
        {/* Three pictures with descriptions */}
        <div className="row mb-4">
          <div className="col">
            <img src="picture1.png" alt="Picture 1" className="img-fluid mb-2" />
            <p>Description 1</p>
          </div>
          <div className="col">
            <img src="picture2.png" alt="Picture 2" className="img-fluid mb-2" />
            <p>Description 2</p>
          </div>
          <div className="col">
            <img src="picture3.png" alt="Picture 3" className="img-fluid mb-2" />
            <p>Description 3</p>
          </div>
        </div>

        {/* Giant version of the Signup button */}
        <div className="text-center">
          <button className="btn btn-warning btn-lg">Signup</button>
        </div>
      </main>
    </div>
  </div>
);
};

export default Header;
