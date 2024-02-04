import "./styles.css";


function App() {
  return (
    <div className="card">
      
      <Title />
      <NavBar />
      <Cover />
      <Images />
    
    </div>
  );
}

export default App;



function Title() {
  return (
    <div className="title">
      <img
        src={"./Images/Sanrio.jpg"}
        height={40}
        width={130}
      ></img>
    </div>
  );
}

function Cover() {
  return (
    <div className="cover">
      <img
        src={"./Images/hellokitty.jpg"}
        height={550}
        width={1100}
      ></img>
    </div>
  );
}

function Images() {
  return (
    <div className="cover">
      <img
        src={"./Images/Yellow.jpg"}
        height={500}
        width={350}
        style={{ marginRight: '10px' , marginBottom: '20px'}} 
        alt="Yellow"
      ></img>
      <img
        src={"./Images/Rainbow.jpg"}
        height={500}
        width={350}
        style={{ marginRight: '10px' }} 
        alt="Rainbow"
      ></img>
      <img
        src={"./Images/Purple.jpg"}
        height={500}
        width={350}
        style={{ marginRight: '10px' }} 
        alt="Purple"
      ></img>
    </div>
  );
}


function NavBar() {
  return (
    <div className="bar">
      <div className="bar-list">
        <li className="bar-list-1">
          <p> NEW </p>
        </li>
        <li className="bar-list-2">
          <p> COLLABS </p>
        </li>
        <li className="bar-list-3">
          <p> CHARACTERS </p>
        </li>
        <li className="bar-list-4">
          <p> APPAREL </p>
        </li>
        <li className="bar-list-5">
          <p> BAGS </p>
        </li>
        <li className="bar-list-6">
          <p> HOME </p>
        </li>
        <li className="bar-list-7">
          <p> PLUSH & TOYS </p>
        </li>
        <li className="bar-list-8">
          <p> STATIONERY </p>
        </li>
        <li className="bar-list-9">
          <p> SALE </p>
        </li>
        <li className="bar-list-10">
          <p> VALENTINE'S SHOP </p>
        </li>
        <li className="bar-list-5">
          <p> MY ACCOUNT </p>
        </li>
      </div>
    </div>
  );
  

}
