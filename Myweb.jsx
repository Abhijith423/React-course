function Myweb(){
    let text="Hello World";

    function myfunc(){
        return "Jithu"
        
    }

    return(
        <header>
            <h1>My Webpage {10+20}</h1>
            <p>Bye from React</p>
            <p>{text}</p>
            <p>{myfunc()}</p>
        </header>
    );
    
}

export default Myweb
