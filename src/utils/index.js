import React from "react";

export const pre = str => {
  return <pre>{JSON.stringify(str, null, 2)}</pre>;
};
