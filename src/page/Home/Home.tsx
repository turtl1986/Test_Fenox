import { Baner } from "../../components/Baner";
import { Bonus } from "../../components/Bonus";
import { Card } from "../../components/Card";
import { Partner } from "../../components/Partner";
import { StickySlider } from "../../components/Slide";

export function Home(){
    return(
        <>
        <Baner/>
        <StickySlider/>
        <Card/>
        <Partner/>
        <Bonus/>
        </>
       
    )
}