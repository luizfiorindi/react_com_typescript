import React from "react";

type Props = {
  name: String;
};

const SegundoComponente = (props: Props) => {
  return <div>O nome dele é {props.name}</div>;
};

export default SegundoComponente;
