import "./Home.css"

function Home()
{
  const openPage = page =>
  {
    document.getElementById(page).className = "openembed"
    document.getElementById(page).src = "http://localhost:3000/events/home"
    document.getElementById(page).style.visibility = "visible"
    setTimeout(() =>
    {
      document.getElementById("closebutton").style.visibility = "visible"
    }, 500);
  }
  const closePage = page =>
  {
    document.getElementById(page).className = "closeembed"
    document.getElementById(page).style.visibility = "hidden"
    document.getElementById("closebutton").style.visibility = "hidden"
  }
    
    return (
      <div>
        <embed
            src="http://localhost:3000/events/home"
            id="eventspage"
            class="closedembed"
            style={{zIndex: "3", backgroundColor: "rgba(0, 0, 0, 0)"}}
          >
        </embed>
        <button className = "homecomponent" id = "homenavbutton" onClick={() => openPage('eventspage')}>Events</button>
        <button id = "closebutton" onClick={() => closePage('eventspage')}><p style={{fontSize: "27px", color: "white"}}>X</p></button>
        <button style={{zIndex: "100", position: "fixed", visibility: "hidden"}} onClick={() => openPage('eventspage')}>Brandon is short</button>
      </div>
    );
  }
  
  export default Home;