import { ReactNode } from "react";

type TContainerProps = {
  children:ReactNode
}

const Container = ({children}:TContainerProps) => {
  return (
    <div className="h-full pb-4 w-full max-w-3xl mx-auto bg-gray-900 text-white">
      <h1 className="text-center text-2xl py-5">Todo App</h1>
      {children}
    </div>
  );
}
export default Container;