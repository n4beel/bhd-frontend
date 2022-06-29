import React from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

const AccountAddress = ({ address }) => (
  <div
    style={{
      fontSize: "16px",
      border: "2px solid #344767",
      padding: "2px 12px",
      borderRadius: 6,
    }}
  >
    {address}
  </div>
);

AccountAddress.defaultProps = {
  address: "0x0000000000000000000000000000000000000000",
};

AccountAddress.propTypes = {
  address: PropTypes.string,
};

export default AccountAddress;
