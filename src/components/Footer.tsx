import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Volume2, Rewind, FastForward, Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="p-2 bg-white border-t">
      <div className="flex items-center justify-between">
        <TrackInfo />
        <PlayerControls />
        <VolumeControl />
      </div>
    </footer>
  );
}

function TrackInfo() {
  return (
    <div className="flex items-center space-x-2 w-1/4">
      <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
      <div>
        <div className="font-semibold text-sm">Track Title</div>
        <div className="text-xs text-gray-600">Author</div>
      </div>
    </div>
  );
}

function PlayerControls() {
  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="flex items-center space-x-2 mb-1">
        <Button variant="ghost" size="sm">
          <span className="mr-1 text-xs">30</span>
          <Rewind className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="sm" className="h-10 w-10">
          <Play className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="sm">
          <FastForward className="h-6 w-6" />
          <span className="ml-1 text-xs">30</span>
        </Button>
      </div>
      <div className="w-full flex items-center space-x-1">
        <span className="text-xs text-gray-500">1:23</span>
        <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
        <span className="text-xs text-gray-500">4:56</span>
      </div>
    </div>
  );
}

function VolumeControl() {
  return (
    <div className="flex items-center space-x-1 w-1/4 justify-end">
      <Button variant="ghost" size="sm">
        <Volume2 className="h-4 w-4" />
      </Button>
      <Slider defaultValue={[70]} max={100} step={1} className="w-20" />
    </div>
  );
}
