export const GearItem = ({ gearItemObject }) => {


    return <section className="gearItemObject py-8 px-8 max-w-sm mx-auto bg-orange-300 rounded-xl shadow-lg shadow-orange-300 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" key={gearItemObject.id}>
    <h3 className="gearCategories text-center space-y-2 sm:text-left">{gearItemObject?.categories?.name}</h3>
    <img className="gearImage block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src={gearItemObject.imageURL} alt=""/>
    <div className="space-y-0.5">
    <p className="gearName text-lg text-black font-semibold">{gearItemObject.name}</p>
    </div>
</section>
}

/* <div className="gearItemObject py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face">
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p className="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div> */