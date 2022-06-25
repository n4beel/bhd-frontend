export const formatAddress = (address) =>
  `${address.substr(0, 6)}...${address.substr(address.length - 4, address.length)}`;

export const shortAddress = (address) =>
  `${address.substr(0, 6)}...${address.substr(address.length - 4, address.length)}`;
