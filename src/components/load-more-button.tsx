import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface LoadMoreButtonProps {
  onClick: () => void;
}

export function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <div className="flex justify-center p-4 border-t">
      <Button onClick={onClick} variant="outline" className="w-full max-w-xs">
        Show More
        <ChevronDown className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}
