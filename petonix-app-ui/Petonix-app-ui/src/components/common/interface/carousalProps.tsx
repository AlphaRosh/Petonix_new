import { CarousalPage } from "./CarousalPage";

export type CarousalProps = {
    activeIndex: number,
    pages: CarousalPage[],
    leftClick: Function,
    rightClick: Function
}
