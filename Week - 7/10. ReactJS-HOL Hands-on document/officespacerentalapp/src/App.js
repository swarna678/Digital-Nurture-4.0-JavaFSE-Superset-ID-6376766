import React from 'react';
import './App.css';

function App() {
  const pageHeading = "Office Space";

  const imageSrc = "https://media.gettyimages.com/id/472431788/photo/indian-economy-business-images.jpg?s=2048x2048&w=gi&k=20&c=qIuCbqGrrz6mxYT2HRbTQ7HQiIWOx1x4pXlk2qAA8Fs=";
  const jsxatt = (
    <img src={imageSrc} width="25%" height="25%" alt="Office Space" />
  );

  const singleOfficeItem = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // const officeSpaces = [
  //   { Id: 1, Name: "Tech Hub", Rent: 75000, Address: "Bangalore" },
  //   { Id: 2, Name: "Creative Works", Rent: 45000, Address: "Hyderabad" },
  //   { Id: 3, Name: "Innovate Square", Rent: 90000, Address: "Mumbai" },
  //   { Id: 4, Name: "City View", Rent: 55000, Address: "Pune" },
  // ];

  return (
    <div className="App">
      <h1>{pageHeading}, at Affordable Range</h1>

      {jsxatt}

      <hr />

      <h1>Name: {singleOfficeItem.Name}</h1>
      <h3 className={singleOfficeItem.Rent <= 60000 ? 'textRed' : 'textGreen'}>
        Rent: Rs. {singleOfficeItem.Rent}
      </h3>
      <h3>Address: {singleOfficeItem.Address}</h3>

      <hr />

      {/* <h1>More Office Spaces</h1>
      {officeSpaces.map((item) => {
        const rentColorClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={item.Id} style={{ marginBottom: '20px', border: '1px solid #eee', padding: '10px' }}>
            <h2>Name: {item.Name}</h2>
            <h3 className={rentColorClass}>
              Rent: Rs. {item.Rent}
            </h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;