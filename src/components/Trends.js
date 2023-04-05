import React, { useEffect, useState } from "react"
import axios from "../api/axios"
import Loader from "./Loader"
import SmallCard from "./SmallCard"

function Trends() {
	const [trendingCoins, setTrendingCoins] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getCoins = async () => {
			try {
				const result = await axios.get("/search/trending")
				setTrendingCoins(result?.data?.coins)
				setIsLoading(false)
			} catch (err) {
				console.log(err)
			}
		}
		getCoins()
	}, [])

	return (
		<div>
			<div className="flex mb-2">
				<div className="text-2xl relative">
					<span>Trending</span>
					<span class="absolute translate-y-3/4 flex h-[10px] w-[10px] left-full bottom-full">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-positive opacity-75"></span>
						<span class="relative inline-flex rounded-full h-full w-full bg-positive"></span>
					</span>
				</div>
			</div>
			{isLoading ? (
				<div className="w-4 h-4">
					<Loader fill={"fill-gray-800 dark:fill-slate-400"} visible={true} />
				</div>
			) : (
				<div className="flex flex-wrap gap-4">
					{trendingCoins.map((coin, index) => {
						return <SmallCard key={index} coin={coin.item} />
					})}
				</div>
			)}
		</div>
	)
}

export default Trends
