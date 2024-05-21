'use client';

import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const BlockElement: FC<Props> = ({ title, children }) => (
    <div className="border border-opacityLight-10 rounded-lg p-4">
      <div className="uppercase text-lg font-semibold">{title}</div>
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
  
  export default BlockElement;