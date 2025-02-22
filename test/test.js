const { expect } = require("chai");

describe("MyContract", function () {
  it("Should return the greeting", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.deployed();

    expect(await myContract.greet()).to.equal("Hello, Blockchain!");
  });
});