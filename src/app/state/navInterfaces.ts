export interface NavState {
  isOpenMobileNav: boolean;
  navList: { value: string; to: string }[];
  activePath: string;
}
