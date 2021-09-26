import * as React from 'react';

interface IProps { 
  name: string;
}

const HelloWorld:React.FC<IProps> = ({name}) => {
  return <div>My name is : {name}</div>;
};

export default HelloWorld;