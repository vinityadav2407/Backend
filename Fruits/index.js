const mango=require("./mango");
const orange=require("./orange");
const banana=require("./banana");

const fruits=[mango,orange,banana];
module.exports=fruits;
/// if we want's to export a repo files then we need to creat a index.js file which the entry point of that repository and then we reqire all file and creat the array of all file and then we export it.