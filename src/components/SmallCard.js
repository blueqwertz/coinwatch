import React, { useEffect, useState } from "react"
import axios from "../api/axios"
import Loader from "./Loader"

function SmallCard({ coin }) {
	const [coinData, setCoinData] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getCoin = async () => {
			try {
				const result = await axios.get(`/coins/${coin.id}?localization=false`)
				setCoinData(result?.data?.coins)
				setIsLoading(false)
			} catch (err) {
				console.log(err)
			}
		}
		getCoin()
	}, [])

	return (
		<div className="bg-black p-3 rounded-lg bg-opacity-80 flex flex-col gap-2">
			<div>{coin.symbol}</div>
			<div className="flex gap-2 items-center">
				<div className="w-7 h-7 p-[6px] bg-gray-800 rounded-full">
					<img src={coin.thumb} className="w-full h-full" />
				</div>
				<span className="text-xs text-gray-400">{coin.name}</span>
			</div>
			{isLoading ? (
				<div className="w-4 h-4">
					<Loader fill={"fill-gray-800 dark:fill-slate-400"} visible={true} />
				</div>
			) : (
				<div></div>
			)}
		</div>
	)
}

export default SmallCard
