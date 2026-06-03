import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className="max-w-360 mx-auto w-full px-4">
      {children}
    </div>
  );
}

export default Container;