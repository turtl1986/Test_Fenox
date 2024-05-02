import { Banner } from "../../components/Banner";
import { Bonus } from "../../components/Bonus";
import { Card } from "../../components/Card";
import { Partner } from "../../components/Partner";
import { StickySlider } from "../../components/Slide";

export function Home(){
    return(
        <>
         <Banner/>
        <Bonus/>
        <StickySlider/>
        <Card/>
        <Partner/>
        </>
       
    )
}