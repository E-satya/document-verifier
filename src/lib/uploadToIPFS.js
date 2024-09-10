import sdk from "./thirdweb";

export async function uploadToIPFS(file) {
  try {
    const fileBuffer = await file.arrayBuffer();
    const fileblob = new Blob([fileBuffer]);
    const response = await sdk.storage.upload({
      file: fileblob,
      fileName: file.name,
    });
    return response;
  } catch (error) {
    console.error("Error uploading file to IPFS::", error);
    throw error;
  }
}
