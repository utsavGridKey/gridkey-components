declare module "*.svg" {
  import React from "react";
  export const ReactSVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
