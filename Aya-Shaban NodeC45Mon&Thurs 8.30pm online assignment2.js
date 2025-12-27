//Q1
// function logFileAndDir() {
//   console.log({
//     File: __filename,
//     Dir: __dirname
//   });
// }

// logFileAndDir();
//=======================

//Q2
// const path = require("path");
// function getFileName(filePath) {
//   return path.basename(filePath);
// }
// console.log(getFileName("/user/files/report.pdf")); 
//=======================
//Q3
// const path = require("path");
// function buildPath(obj) {

//   return path.join(obj.dir, obj.name + obj.ext);
// }
// console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
//=======================

//Q4
// const path = require("path");

// function getExtension(filePath) {
//   return path.extname(filePath);
// }
// console.log(getExtension("/docs/readme.md"));
//=======================

//Q5
// const path = require("path");

// function parsePath(filePath) {
//   const parsed = path.parse(filePath);
//   return {
//     Name: parsed.name,
//     Ext: parsed.ext
//   };
// }
// console.log(parsePath("/home/app/main.js"));
//=======================

//Q6
// const path = require("path");

// function isAbsolutePath(filePath) {
//   return path.isAbsolute(filePath);
// }

// console.log(isAbsolutePath("/home/user/file.txt"));
//=======================

//Q7
// const path = require("path");

// function joinSegments(...segments) {
//   return path.join(...segments);
// }
// console.log(joinSegments("src", "components", "App.js")); 
//=======================

//Q8
// const path = require("path");

// function resolvePath(relativePath) {
//   return path.resolve(relativePath);
// }

// console.log(resolvePath("./ass2.js"));
//=======================

//Q9
// const path = require("path");

// function joinTwoPaths(path1, path2) {
//   return path.join(path1, path2);
// }

// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));
//=======================

//Q10
// const fs = require("fs");
// const path = require("path");

// function deleteFile(filePath) {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.log("Error deleting file:", err.message);
//     } else {
//       console.log(`The ${path.basename(filePath)} is deleted.`);
//     }
//   });
// }

// deleteFile("./test.txt");
//=======================

//Q11
// const fs = require("fs");

// function createFolder(folderPath) {
//   try {
//     fs.mkdirSync(folderPath);
//     console.log("Success");
//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// }
// createFolder("./try1");
//=======================

//Q12
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("start", () => {
//   console.log("Welcome event triggered!");
// });

// myEmitter.emit("start");
//=======================

//Q13
// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// myEmitter.on("login", (username) => {

//   console.log(`User logged in: ${username}`);

// });

// myEmitter.emit("login", "Aya");
//=======================

//Q14
// const fs = require("fs");

// function readFileSyncExample(filePath) {
//   try {
//     const data = fs.readFileSync(filePath, "utf8"); 
//     console.log("The file content =>", data);
//   } catch (err) {
//     console.log("Error reading file:", err.message);
//   }
// }

// readFileSyncExample("./note.txt");
//=======================

//Q15
// const fs = require("fs");

// function writeAsyncFile(filePath, content) {
//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.log("Error writing file:", err.message);
//     } else {
//       console.log("File written successfully");
//     }
//   });
// }
// writeAsyncFile("./note.txt", "Async save");
//=======================

//Q16
// const fs = require("fs");

// function checkExists(pathToCheck) {
//   return fs.existsSync(pathToCheck);
// }

// console.log(checkExists("./note.txt")); 
// console.log(checkExists("./not_exist.txt"));
//=======================

//Q17
// const os = require("os");

// function getOSInfo() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch()
//   };
// }
// console.log(getOSInfo());
//=======================


