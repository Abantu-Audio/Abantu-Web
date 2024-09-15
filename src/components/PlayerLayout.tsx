'use client';

import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import { Search, Home, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LeftSidebarComponent } from '@/components/left-sidebar';
import { MainContent } from '@/components/main-content';

export function PlayerLayout() {
  const [leftWidth, setLeftWidth] = useState(250);
  const [rightWidth, setRightWidth] = useState(300);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex items-center space-x-2 flex-1 max-w-xl mx-4">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8" />
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <ResizableBox
          width={leftWidth}
          height={Infinity}
          minConstraints={[200, Infinity]}
          maxConstraints={[400, Infinity]}
          onResize={(e, { size }) => setLeftWidth(size.width)}
          handle={
            <div className="w-1 bg-gray-300 hover:bg-gray-400 cursor-col-resize absolute right-0 top-0 bottom-0" />
          }
          className="border-r relative h-full" // Added h-full here
        >
          <div className="h-full overflow-y-auto">
            <LeftSidebarComponent />
          </div>
        </ResizableBox>

        <div className="flex-1 overflow-auto p-4">
          <MainContent onBookSelect={() => {}} />
        </div>

        <ResizableBox
          width={rightWidth}
          height={Infinity}
          minConstraints={[200, Infinity]}
          maxConstraints={[400, Infinity]}
          onResize={(e, { size }) => setRightWidth(size.width)}
          handle={
            <div className="w-1 bg-gray-300 hover:bg-gray-400 cursor-col-resize absolute left-0 top-0 bottom-0" />
          }
          className="border-l relative"
          resizeHandles={['w']}
        >
          <div className="h-full overflow-y-auto p-4">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold">Long Form Book Title</h2>
            <p className="text-gray-600 mb-4">Author&apos;s Name</p>
            <h3 className="font-semibold mb-2">Chapters</h3>
            {/* Chapter list */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-8 bg-gray-100 rounded mb-2"></div>
              ))}
          </div>
        </ResizableBox>
      </div>

      <footer className="border-t p-4">
        {/* Audio player controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div>
              <div className="font-semibold">Track Title</div>
              <div className="text-sm text-gray-600">Author</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5"></line>
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19"></line>
              </svg>
            </Button>
          </div>
        </div>
        <div className="mt-2 bg-gray-200 rounded-full h-1">
          <div className="bg-primary h-full rounded-full" style={{ width: '30%' }}></div>
        </div>
      </footer>
    </div>
  );
}
