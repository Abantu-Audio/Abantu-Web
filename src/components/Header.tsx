import React from 'react';
import { Search, Home, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex bg-white items-center justify-between p-4">
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
  );
}
