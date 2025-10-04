function Spotify() {
  function toggleSpotify() {
    const spot = document.querySelector('.resp-frame');
    const spotI = document.querySelector('.show-spotify-button i');
    const visible = spot.style.display === "none";

    spot.style.display = visible ? "flex" : "none";
    spot.style.visibility = visible ? "visible" : "hidden";

    spotI.style.borderLeft = visible ? "2px solid rgb(30,216,96)" : "none";
    spotI.style.borderBottom = visible ? "2px solid rgb(30,216,96)" : "none";
    spotI.style.borderRight = visible ? "none" : "2px solid rgb(30,216,96)";
    spotI.style.borderTop = visible ? "none" : "2px solid rgb(30,216,96)";
  }

  return (
    <div className="spotify">

      <button className="show-spotify-button"><i className="bi bi-spotify"></i></button> 

      <iframe className="regu-frame" title="iframe-regu"
              src="https://open.spotify.com/embed/playlist/4gf0brlPTjLxd7rxQXVMVW?utm_source=generator&theme=0"
              width="300" height="352" allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>

      <iframe className="resp-frame" title="iframe-resp"
              src="https://open.spotify.com/embed/playlist/4gf0brlPTjLxd7rxQXVMVW?utm_source=generator&theme=0"
              width="100%" height="82" allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>
    </div>
  );
}

export default Spotify;
