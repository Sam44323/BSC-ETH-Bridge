import { ncp } from "ncp";

const [source, destination] = [
  "./artifacts/contracts/",
  "../bridge-frontend/abis/",
];

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("done!");
});
