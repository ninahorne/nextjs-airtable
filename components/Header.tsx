import { FunctionComponent } from "react";

interface HeaderProps {
  title: string
}


export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <>
      <h1 className='title'>{title}</h1>
      <a href='/api/auth/login'>Login</a>
    </>
  );
};
