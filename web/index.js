const js = import("./node_modules/@cluper/hello-wasm/hello_wasm.js");
js.then(js => {
    js.greet("WebAssembly");
});
