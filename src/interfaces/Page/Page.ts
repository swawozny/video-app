export interface Page {
    title: string;
    path: string;
    component: () => JSX.Element;
}
