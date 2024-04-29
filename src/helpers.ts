export const truncateAddress = (address) => {
  const firstPart = address.substring(0, 6);
  const lastPart = address.substring(address.length - 5);
  return `${firstPart}...${lastPart}`;
};

export const copyToClipboard = async (textToCopy) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.log(err);
  }
};
