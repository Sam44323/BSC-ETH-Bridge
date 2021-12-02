import { ncp } from "ncp";

const [source, frontDest, backendDest] = [
  "./artifacts/contracts/",
  "../bridge-frontend/src/abis/",
  "../bridge-backend/abis/",
];

ncp(source, frontDest, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Copied to frontend abis!");
});

ncp(source, backendDest, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Copied to backend abis!");
});
