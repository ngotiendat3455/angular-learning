// src/app/submenu.interfaces.ts

export interface SublinkItem {
    label: string;
    icon: string; // Assuming icon is a class name or path
    url: string;
  }
  
  export interface SubmenuPage {
    page: string;
    links: SublinkItem[];
  }
  
  // Define a structure for coordinates - adjust as needed
  export interface Coordinates {
    center?: number;
    bottom?: number;
    left?: number;
    top?: number;
    // Add other coordinate properties if your positioning logic requires them
  }