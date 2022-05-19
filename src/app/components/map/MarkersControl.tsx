/*global google*/
import { toggleMarkers } from "../../services/MarkerService";

function MarkersControl(controlDiv: Element, map: google.maps.Map) {
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "rgb(185 211 194)";
  controlUI.style.border = "2px solid rgb(223 210 174)";
  controlUI.style.borderRadius = "3px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to hide or show markers";
  controlDiv.appendChild(controlUI);

  const controlText = document.createElement("div");

  controlText.style.color = "#564c4a";
  controlText.style.fontFamily = "MenyakaBold, serif";
  controlText.style.fontSize = "16px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Toggle markers";
  controlUI.appendChild(controlText);

  controlUI.addEventListener("click", () => {
    toggleMarkers(map);
  });
}

export default MarkersControl;
