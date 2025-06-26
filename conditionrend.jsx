function Myweb() {
    let text = "Hello World";
  
    function cars() {
      let cars = ["Bmw", "Audi", "Benz"];
      return (
        <ul>
          {cars.map((car, index) => (
            <li key={index}>{car}</li>
          ))}
        </ul>
      );
    }
  
    const showCars = text === "Hello World"; // condition to show cars
  
    return (
      <header>
        <h1>My Webpage</h1>
        <p>Bye from React</p>
        <p>{text}</p>
  
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
  
        <div id="Anu">
          <p>My name is Anu</p>
          <p>My age is 20</p>
          <p>My contactno is 1234567890</p>
        </div>
  
        <div id="Anvith">
          <p>My name is Anvith</p>
          <p>My age is 21</p>
          <p>My contactno is 1234567892</p>
        </div>
  
        <div id="anver">
          <p>Home: Anvith</p>
          <p>About: Anvith</p>
          <p>Contact: Anvith</p>
        </div>
  
        {/* Conditional rendering */}
        {showCars && (
          <div>
            <h2>Car List:</h2>
            {cars()}
          </div>
        )}
      </header>
    );
  }
  
  export default Myweb;
