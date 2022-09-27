const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"login":{"uri":"login","methods":["GET","HEAD"]},"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"users.store":{"uri":"users","methods":["POST"]},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"]},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"]},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"]},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
