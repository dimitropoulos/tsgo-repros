import { myFunction as myFunctionB } from "@tsgo-repros/my-package-b";

export const myFunction = () => {
  console.log("Hello from my-package!");
};

myFunctionB();
