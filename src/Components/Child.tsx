import { ReactNode } from "react";

type ChildProps = {
  children: ReactNode;
};

export default function Child({ children }: ChildProps) {
  return <div>Child {children} </div>;
}
