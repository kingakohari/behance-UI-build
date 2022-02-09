function LoadEvent(eventObject){
 
    const rootElement = document.getElementById("root");
 
    console.dir(rootElement);

    const listOfSectionElements = document.querySelectorAll("section");
    
    console.log(listOfSectionElements);

let anchors = "";

for (const sectionElement of listOfSectionElements) {

    anchors += `<a href="#${sectionElement.id}"> ${sectionElement.id} </a>`;
}

    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin",`<header>${anchors}</header>`) //header előjön a weboldalon

}

window.addEventListener("load", LoadEvent);