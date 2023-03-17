export const GearItem = ({ gearItemObject }) => {


    return <section className="gearItemObject" key={gearItemObject.id}>
    <h3 className="gearCategories">{gearItemObject?.categories?.name}</h3>
    <img className="gearImage" src={gearItemObject.imageURL} alt=""/>
    <p className="gearName">{gearItemObject.name}</p>
</section>
}