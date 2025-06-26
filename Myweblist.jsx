function Myweb(){
    let text="Hello World";

    function cars(){
      
        let cars=["Bmw","Audi","Benz"]

    }
    
return(
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
                <p>Home:Anvith</p>
                <p>About:Anvith</p>
                <p>Contact:Anvith</p>
                
              </div>
              <div><h1>{cars}</h1></div>
        
        </header>
    );
    
}

export default Myweb
