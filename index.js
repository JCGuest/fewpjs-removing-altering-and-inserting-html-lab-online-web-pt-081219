// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Creating and Inserting DOM Elements</title>
//   </head>
//   <script type="application/javascript">
//   </script>
//   <body>
//     <main id="main"></main>
//     <script type="text/javascript" src="index.js"></script>
//   </body>
// </html>

let main = document.querySelector("main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = "Your-Name is the champion";