import Image from "next/image";
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
	try {

		return new ImageResponse(
			(
				<div
					style={{
						height: "100%",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "white",
						fontSize: 32,
						fontWeight: 600,
					}}>
					<div style={{ marginTop: 40 }}>{"Bull's Paradise "}</div>
					<div tw="text-sm text-gray-500 font-mono">
						Join Whatsapp Group Asap
					</div>
				</div>
			),

			{
				width: 1200,
				height: 630,
			},
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
