import Image from "next/image";

export default function AchievementCard() {
  return (
    <div className="bg-white rounded-2xl mx-auto overflow-hidden">
      <div className="w-full h-56 overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyNDIyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="Achievement Torche Education"
          className="object-cover"
          fill
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-[#494949]">08-04-2023</p>
        <h3 className="text-xl mt-2 text-black">Torche Mendapatkan Pendanaan untuk C Series</h3>
      </div>
    </div>
  );
}
