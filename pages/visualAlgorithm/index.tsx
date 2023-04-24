// <!DOCTYPE html>
// <html>
//   <head>
//     <script src="https://cdn.jsdelivr.net/npm/skulpt@0.11.3/dist/skulpt.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/skulpt@0.11.3/dist/skulpt-stdlib.js"></script>
//   </head>
//   <body>
//     <script>
//       // Load the Python code from a local file
//       var pythonCode = `with open("path/to/your/python/script.py", "r") as file:
//         code = file.read()
//         exec(code)`;
      
//       // Run the Python code using Skulpt
//       Sk.configure({output: function(text) {
//         console.log(text);
//       }});
//       Sk.importMainWithBody("<stdin>", false, pythonCode);
//     </script>
//   </body>
// </html>

export default function cardground() {
    // pyodide.loadPackage('python').then(() => {
    //     // Run the Python script
    //     pyodide.runPython(`
    //         with open("path/to/your/python/script.py", "r") as f:
    //         exec(f.read())
    //     `).then((output) => {
    //         console.log(output);
    //     });
    // });

    return (
        <div 
            className={`
                
            `}
        >
            <script src="https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js"></script>

            WebAssenbly
        </div>
    )
}   