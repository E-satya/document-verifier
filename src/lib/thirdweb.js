
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {ethers} from "ethers";


// Initialize the SDK
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // Replace with your RPC provider
const sdk = new ThirdwebSDK(provider);

export default sdk;