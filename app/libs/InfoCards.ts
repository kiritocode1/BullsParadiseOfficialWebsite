import { AlarmClockOff, ArrowUpNarrowWide, CandlestickChart, LucideIcon , } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Increased Profitability",
        bodyText: "With Professional Investers and Minimum Capital of 8k-10k",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "No Time Wasted",
        bodyText: "A tight profit driven community of professional investors, means you can spend less time on research and more time on what matters.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Reduced Risk",
        bodyText: "With Professional Investors, you can reduce your risk by up to 80% through data-driven sales insights and recommendations with 3-4 calls daily.",
        icon: CandlestickChart ,
        id: 3
    },
]

export default infoCards