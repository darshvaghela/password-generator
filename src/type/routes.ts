export type RouteType = {
    path: string;
    element: React.ComponentType;
    title: string;
    child?:RouteType[];
  };
  