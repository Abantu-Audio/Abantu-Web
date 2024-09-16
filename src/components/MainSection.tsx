import React from 'react';
import { ResizableBox } from 'react-resizable';
import { LeftSidebarComponent } from '@/components/left-sidebar';
import { MainContent } from '@/components/main-content';
import { RightSidebar } from './RightSidebar';

interface MainSectionProps {
  leftWidth: number;
  setLeftWidth: (width: number) => void;
  rightWidth: number;
  setRightWidth: (width: number) => void;
}

export function MainSection({
  leftWidth,
  setLeftWidth,
  rightWidth,
  setRightWidth,
}: MainSectionProps) {
  return (
    <div className="flex flex-1 overflow-hidden p-4 space-x-4">
      <ResizableBox
        width={leftWidth}
        height={Infinity}
        minConstraints={[200, Infinity]}
        maxConstraints={[400, Infinity]}
        onResize={(e, { size }) => setLeftWidth(size.width)}
        handle={
          <div className="w-0.5 hover:bg-gray-200 cursor-col-resize absolute right-0 top-0 bottom-0" />
        }
        className="relative h-full rounded-lg overflow-hidden bg-white"
      >
        <div className="h-full overflow-y-auto">
          <LeftSidebarComponent />
        </div>
      </ResizableBox>

      <div className="flex-1 overflow-auto rounded-lg bg-white">
        <MainContent onBookSelect={() => {}} />
      </div>

      <RightSidebar width={rightWidth} setWidth={setRightWidth} />
    </div>
  );
}
