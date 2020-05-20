function launchRequest (request, engine){
    let url = engine.prefix;
    let requestElements = cleanRequest(request);

    url += requestElements.join(engine.union);
    url += engine.suffix;
    window.open(url);
}

function cleanRequest (request){
    return request.trim().split(" "); // trouver un moyen de retirer les caractère spéciaux genre apostrophe
}

export default launchRequest

