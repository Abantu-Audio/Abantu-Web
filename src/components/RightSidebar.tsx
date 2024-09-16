import React from 'react';
import { ResizableBox } from 'react-resizable';

interface RightSidebarProps {
  width: number;
  setWidth: (width: number) => void;
}

export function RightSidebar({ width, setWidth }: RightSidebarProps) {
  return (
    <ResizableBox
      width={width}
      height={Infinity}
      minConstraints={[200, Infinity]}
      maxConstraints={[400, Infinity]}
      onResize={(e, { size }) => setWidth(size.width)}
      handle={
        <div className="w-0.5 cursor-col-resize hover:bg-gray-200 absolute left-0 top-0 bottom-0" />
      }
      className="relative rounded-lg overflow-hidden bg-white"
      resizeHandles={['w']}
    >
      <div className="h-full overflow-y-auto p-4">
        <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
        <h2 className="text-xl font-semibold">Long Form Book Title</h2>
        <p className="text-gray-600 mb-4">Author&apos;s Name</p>
        <h3 className="font-semibold mb-2">Chapters</h3>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-8 bg-gray-100 rounded mb-2"></div>
          ))}
      </div>
    </ResizableBox>
  );
}
