"use client";

import Spline from "@splinetool/react-spline";
import Image, { StaticImageData } from "next/image";
import { WhatsappLinkHereBBY } from "./WhatsappLinkHereBBY/Aman";
import infoCards from "./libs/InfoCards";
import {  LucideIcon, MessageSquareShare } from "lucide-react";
import { ReactElement } from "react";
import { Button } from "@nextui-org/button";
import { clsx } from "clsx";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/table";
import { Checkbox } from "@nextui-org/checkbox";
import { Slider } from "@/components/Slider";
import {animated as  a } from "@react-spring/web";
import styles from "./Home.module.css";

import images from "@/components/Assetcompressor";


const items: { css: StaticImageData | undefined; height:number }[] = [

	{
		css: images.at(1),
		height: 300,
	},
	{
		css: images.at(2),
		height: 300,
	},
	{
		css: images.at(3),
		height: 300,
	},
	{
		css: images.at(4),
		height: 300,
	},
	{
		css: images.at(5),
		height: 300,
	},
	{
		css: images.at(6),
		height: 200,
	},
	{
		css: images.at(7),
		height: 300,
	},

	
];





export default function Home () {
	
	return (
		<main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
			<header
				id="home"
				className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
				<div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl font-black md:text-8xl">
							{"Bull's Paradise"}
						</h1>
						<h2 className="text-md md:text-2xl">
							{" "}
							90-95% ACCURACY CONSISTENTLY
						</h2>
					</div>
					<p className="max-w-md text-sm md:text-base text-zinc-500">
						{
							"ARE YOU FED UP WITH YOUR DAILY LOSSES ? SO DON'T WORRY HERE IS THE SOLUTION . WE BRING YOU BULL'S PARADISE WHATSAPP GROUP FOR YOU"
						}
					</p>
					<div className="w-full flex items-center justify-center md:justify-start gap-4">
						<Button
							as={Link}
							className={clsx(
								linkStyles({ color: "foreground" }),
								"data-[active=true]:text-primary data-[active=true]:font-medium ",
							)}
							color="secondary"
							isExternal={true}
							variant="light"
							href={WhatsappLinkHereBBY}>
							<MessageSquareShare />
							Join whatsapp Group
						</Button>
					</div>
				</div>

				<div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative z-10">
					<Spline
						className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start "
						scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode"
					/>
				</div>
			</header>
			<section id="points" className="container ">
				<h3 className="text-4xl md:text-5xl font-bold text-center mb-8">
					MAIN FEATURES INCLUDE
				</h3>
				<Table
					aria-label="Features of the program"
					fullWidth
					classNames={{
						tbody: "dark:bg-background ",
						wrapper: "dark:bg-background",
					}}>
					<TableHeader>
						<TableColumn align="center">Features</TableColumn>
					</TableHeader>
					<TableBody className="bg-gray-900">
						<TableRow key="1">
							<TableCell align="center">
								{" "}
								<Checkbox defaultSelected radius="full" color="secondary">
									WhatsappGroup Details
								</Checkbox>
							</TableCell>
						</TableRow>
						<TableRow key="2">
							<TableCell align="center">
								<Checkbox defaultSelected radius="full" color="secondary">
									Traders Will be given before active
								</Checkbox>
							</TableCell>
						</TableRow>
						<TableRow key="3">
							<TableCell align="center">
								<Checkbox defaultSelected radius="full" color="secondary">
									Min Capital required 10k-15k
								</Checkbox>
							</TableCell>
						</TableRow>
						<TableRow key="4">
							<TableCell align="center">
								<Checkbox defaultSelected radius="full" color="secondary">
									3-4 calls Daily
								</Checkbox>
							</TableCell>
						</TableRow>
						<TableRow key="5">
							<TableCell align="center">
								<Checkbox defaultSelected radius="full" color="secondary">
									Accuracy 90-95%
								</Checkbox>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</section>
			<section
				id="about"
				className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
				<div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
					<h3 className="text-4xl md:text-5xl font-bold">Why Join US ???</h3>
					<div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
						{infoCards.map((infoCard) => {
							return (
								<InfoCard
									key={infoCard.id}
									Icon={infoCard.icon}
									title={infoCard.title}>
									<p className="text-sm sm:text-base text-center md:text-left">
										{infoCard.bodyText}
									</p>
								</InfoCard>
							);
						})}
					</div>
				</div>
			</section>
			<h3 className="text-4xl md:text-5xl font-bold mb-8">
				Real world Results :{" "}
			</h3>
			<section className="w-full overflow-hidden
			 " >
				<div className={`flex fill center bg-background`}>
					<div className={styles.main}>
						<Slider
							items={items}
							width={700}
							visible={3}
							className="bg-background"
							style={styles}>
							{
								// @ts-ignore
								({ css }, i) => (
									<div className={styles.content}>
										<div className={styles.marker}>
											{String(i + 1).padStart(2, "0")}
										</div>
										<a.div className={styles.image}>
											<Image
												
												src={items[i].css?.src!}
												alt="image"
												width={700}
												height={items[i].height}
											/>
										</a.div>
									</div>
								)
							}
						</Slider>
					</div>
				</div>
			</section>
		</main>
	);
}

interface IInfoCardProps {
	title: string;
	Icon: LucideIcon;
	children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
	return (
		<div className="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
			<div className="p-4 bg-fuchsia-700 rounded-full">
				<Icon />
			</div>
			<div>
				<h3 className="text-lg font-bold sm:text-xl">{title}</h3>
			</div>
			<div>{children}</div>
		</div>
	);
}
