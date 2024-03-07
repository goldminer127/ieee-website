import "./Home.css"
import "./PCB.css"

function Home()
{
  async function powerEventComponents(page)
  {
    document.getElementById("events-particle1").className = "particle1";
    document.getElementById("events-particle2").className = "particle2";
    document.getElementById("events-particle3").className = "particle3";
    document.getElementById("events-particle4").className = "particle4";
    document.getElementById("events-particle5").className = "particle5";
    document.getElementById("events-particle6").className = "particle6";
    document.getElementById("events-particle7").className = "particle7";
    document.getElementById("event-wire1").className = "event-charged-wire";
    document.getElementById("event-wire3").className = "event-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("event-wire2").className = "event-charged-wire";
    document.getElementById("event-wire4").className = "event-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("eventnavbutton").className = "charged-button"
    document.getElementById("event-wire5").className = "event-charged-wire"
    document.getElementById("event-wire6").className = "event-charged-wire"
    document.getElementById("event-wire7").className = "event-charged-wire"
    document.getElementById("event-wire8").className = "event-charged-wire"
    document.getElementById("event-wire9").className = "event-charged-wire"
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("event-ground1").className = "charged-ground"
    document.getElementById("event-ground2").className = "charged-ground"
    document.getElementById("component1").className = "charged-component"
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("component1-wire1").className = "event-charged-wire"
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("component1-ground1").className = "charged-ground"
    document.getElementById("cpu").className = "charged-cpu";
    await new Promise(r => setTimeout(r, 1000));
    openPage(page, "/events/home");
    await new Promise(r => setTimeout(r, 500));
    document.getElementById("pcb").style.visibility = "hidden";
  }

  async function powerAboutComponents(page)
  {
    document.getElementById("about-particle1").className = "particle1";
    document.getElementById("about-particle2").className = "particle2";
    document.getElementById("about-particle3").className = "particle3";
    document.getElementById("about-particle4").className = "particle4";
    document.getElementById("about-particle5").className = "particle5";
    document.getElementById("about-particle6").className = "particle6";
    document.getElementById("about-particle7").className = "particle7";
    document.getElementById("about-wire1").className = "about-charged-wire";
    document.getElementById("about-wire3").className = "about-charged-wire";
    document.getElementById("about-wire5").className = "about-charged-wire";
    document.getElementById("about-wire7").className = "about-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("about-wire2").className = "about-charged-wire";
    document.getElementById("about-wire4").className = "about-charged-wire";
    document.getElementById("about-wire6").className = "about-charged-wire";
    document.getElementById("about-wire8").className = "about-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("aboutnavbutton").className = "charged-button";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("about-wire9").className = "about-charged-wire";
    document.getElementById("about-wire10").className = "about-charged-wire";
    document.getElementById("about-wire11").className = "about-charged-wire";
    document.getElementById("about-wire12").className = "about-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("about-ground1").className = "charged-ground";
    document.getElementById("cpu").className = "charged-cpu";
    await new Promise(r => setTimeout(r, 1500));
    openPage(page, "/about");
    await new Promise(r => setTimeout(r, 500));
    document.getElementById("pcb").style.visibility = "hidden";
  }

  async function powerBoardComponents(page)
  {
    document.getElementById("board-particle1").className = "particle1";
    document.getElementById("board-particle2").className = "particle2";
    document.getElementById("board-particle3").className = "particle3";
    document.getElementById("board-particle4").className = "particle4";
    document.getElementById("board-particle5").className = "particle5";
    document.getElementById("board-particle6").className = "particle6";
    document.getElementById("board-particle7").className = "particle7";
    document.getElementById("board-wire1").className = "board-charged-wire";
    document.getElementById("board-wire2").className = "board-charged-wire";
    document.getElementById("board-wire3").className = "board-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("boardnavbutton").className = "charged-button";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("board-wire4").className = "board-charged-wire";
    document.getElementById("board-wire5").className = "board-charged-wire";
    document.getElementById("board-wire6").className = "board-charged-wire";
    document.getElementById("board-wire7").className = "board-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("board-wire8").className = "board-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("component2").className = "charged-component"
    document.getElementById("component2-wire1").className = "board-charged-wire"
    document.getElementById("component2-wire2").className = "board-charged-wire"
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("component3").className = "charged-component"
    document.getElementById("component3-wire1").className = "board-charged-wire"
    document.getElementById("component3-ground1").className = "charged-ground"
    document.getElementById("component4").className = "charged-component"
    document.getElementById("component4-wire1").className = "board-charged-wire"
    document.getElementById("cpu").className = "charged-cpu";
    await new Promise(r => setTimeout(r, 1500));
    openPage(page, "/members");
    await new Promise(r => setTimeout(r, 500));
    document.getElementById("pcb").style.visibility = "hidden";
  }

  async function powerServerComponents()
  {
    document.getElementById("server-particle1").className = "particle1";
    document.getElementById("server-particle2").className = "particle2";
    document.getElementById("server-particle3").className = "particle3";
    document.getElementById("server-particle4").className = "particle4";
    document.getElementById("server-particle5").className = "particle5";
    document.getElementById("server-particle6").className = "particle6";
    document.getElementById("server-particle7").className = "particle7";
    document.getElementById("server-wire1").className = "server-charged-wire";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("servernavbutton").className = "charged-button";
    await new Promise(r => setTimeout(r, 250));
    document.getElementById("server-wire2").className = "server-charged-wire";
    document.getElementById("server-wire3").className = "server-charged-wire";
    document.getElementById("server-wire4").className = "server-charged-wire";
    document.getElementById("cpu").className = "charged-cpu";
    await new Promise(r => setTimeout(r, 1500));
    openServerPage();
  }

  const openPage = (page, path) =>
  {
    document.getElementById(page).className = "openembed";
    document.getElementById(page).src = process.env.PUBLIC_URL + path;
    document.getElementById(page).style.visibility = "visible";
    setTimeout(() =>
    {
      document.getElementById("closebutton").style.visibility = "visible";
      document.getElementById("closebutton").className = "show-close-button";
    }, 1000);
  }
  const closePage = page =>
  {
    document.getElementById("pcb").style.visibility = "visible";
    /* Change this system in a later date... Please */
    let parts = [".event-charged-wire", ".board-charged-wire", ".about-charged-wire"];
    for(let i = 0; i < parts.length; i++)
    {
      let components = document.querySelectorAll(parts[i]);
      for(let l = 0; l < components.length; l++)
      {
        components[l].className = "neutral-wire";
      }
    }

    parts = ["ground", "component", "button"];
    for(let i = 0; i < parts.length; i++)
    {
      let components = document.querySelectorAll(".charged-" + parts[i]);
      for(let l = 0; l < components.length; l++)
      {
        components[l].className = "neutral-" + parts[i];
      }
    }

    for(let i = 0; i < 8; i++)
    {
      let components = document.querySelectorAll(".particle" + i);
      for(let l = 0; l < components.length; l++)
      {
        components[l].className = "";
      }
    }

    document.getElementById("cpu").className = "neutral-cpu";


    document.getElementById(page).className = "closeembed";
    document.getElementById(page).style.visibility = "hidden";
    document.getElementById("closebutton").style.visibility = "hidden";
    document.getElementById("closebutton").className = undefined;
  }

  const openServerPage = () =>
  {
    window.location.href = "https://ieeeualbany.herokuapp.com/"
  }
    
    return (
      <div id = "home-body">
        <embed src="" id="embed-display" class="closedembed"/>
        <button id = "closebutton" onClick={() => closePage('embed-display')}><p style={{fontSize: "27px", color: "white", margin: "0"}}>X</p></button>
        
        <div id = "pcb">
          <div id = "cpu" className = "neutral-cpu"><h1 id = "cpu-label">IEEE</h1></div>
          <div id = "component1" className = "neutral-component"/>
          <div id = "component1-wire1" className = "neutral-wire"/>
          <div id = "component1-ground1" className = "neutral-ground"/>

          <div id = "component2" className = "neutral-component"/>
          <div id = "component2-wire1" className = "neutral-wire"/>
          <div id = "component2-wire2" className = "neutral-wire"/>
          <div id = "component3" className = "neutral-component"/>
          <div id = "component3-wire1" className = "neutral-wire"/>
          <div id = "component3-ground1" className = "neutral-ground"/>
          <div id = "component4" className = "neutral-component"/>
          <div id = "component4-wire1" className = "neutral-wire"/>

          <div id = "event-wire1" className = "neutral-wire"/>
          <div id = "event-wire2" className = "neutral-wire"/>
          <div id = "event-wire3" className = "neutral-wire"/>
          <div id = "event-wire4" className = "neutral-wire"/>
          <button className = "neutral-button" id = "eventnavbutton" onClick={() => powerEventComponents('embed-display')}>
            Events
            <div id = "events-particle1"/>
            <div id = "events-particle2"/>
            <div id = "events-particle3"/>
            <div id = "events-particle4"/>
            <div id = "events-particle5"/>
            <div id = "events-particle6"/>
            <div id = "events-particle7"/>
          </button>
          <div id = "event-wire5" className = "neutral-wire"/>
          <div id = "event-ground1" className = "neutral-ground"/>
          <div id = "event-wire6" className = "neutral-wire"/>
          <div id = "event-ground2" className = "neutral-ground"/>
          <div id = "event-wire7" className = "neutral-wire"/>
          <div id = "event-wire8" className = "neutral-wire"/>
          <div id = "event-wire9" className = "neutral-wire"/>

          <button className = "neutral-button" id = "aboutnavbutton" onClick={() => powerAboutComponents('embed-display')}>
            About
            <div id = "about-particle1"/>
            <div id = "about-particle2"/>
            <div id = "about-particle3"/>
            <div id = "about-particle4"/>
            <div id = "about-particle5"/>
            <div id = "about-particle6"/>
            <div id = "about-particle7"/>
          </button>
          <div id = "about-wire1" className = "neutral-wire"/>
          <div id = "about-wire2" className = "neutral-wire"/>
          <div id = "about-wire3" className = "neutral-wire"/>
          <div id = "about-wire4" className = "neutral-wire"/>
          <div id = "about-wire5" className = "neutral-wire"/>
          <div id = "about-wire6" className = "neutral-wire"/>
          <div id = "about-wire7" className = "neutral-wire"/>
          <div id = "about-wire8" className = "neutral-wire"/>
          <div id = "about-wire9" className = "neutral-wire"/>
          <div id = "about-ground1" className = "neutral-ground"/>
          <div id = "about-wire10" className = "neutral-wire"/>
          <div id = "about-wire11" className = "neutral-wire"/>
          <div id = "about-wire12" className = "neutral-wire"/>

          <button className = "neutral-button" id = "boardnavbutton" onClick={() => powerBoardComponents('embed-display')}>
            Board
            <div id = "board-particle1"/>
            <div id = "board-particle2"/>
            <div id = "board-particle3"/>
            <div id = "board-particle4"/>
            <div id = "board-particle5"/>
            <div id = "board-particle6"/>
            <div id = "board-particle7"/>
          </button>
          <div id = "board-wire1" className = "neutral-wire"/>
          <div id = "board-wire2" className = "neutral-wire"/>
          <div id = "board-wire3" className = "neutral-wire"/>
          <div id = "board-wire4" className = "neutral-wire"/>
          <div id = "board-wire5" className = "neutral-wire"/>
          <div id = "board-wire6" className = "neutral-wire"/>
          <div id = "board-wire7" className = "neutral-wire"/>
          <div id = "board-wire8" className = "neutral-wire"/>

          <button className = "neutral-button" id = "servernavbutton" onClick={() => powerServerComponents()}>
            Server
            <div id = "server-particle1"/>
            <div id = "server-particle2"/>
            <div id = "server-particle3"/>
            <div id = "server-particle4"/>
            <div id = "server-particle5"/>
            <div id = "server-particle6"/>
            <div id = "server-particle7"/>
          </button>
          <div id = "server-wire1" className = "neutral-wire"/>
          <div id = "server-wire2" className = "neutral-wire"/>
          <div id = "server-wire3" className = "neutral-wire"/>
          <div id = "server-wire4" className = "neutral-wire"/>

          <button style={{zIndex: "100", position: "fixed", visibility: "hidden"}} onClick={() => openPage('embed-display')}>Brandon is short</button>
          <div id = "pcb-shadow"/>
        </div>
        <canvas id = "canvas"/>
      </div>
    );
  }
  
  export default Home;