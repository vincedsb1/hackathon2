const PriceDetailsCard = ({
  totalItems,
  actualPriceOfCart,
  totalPriceOfCartProducts,
}) => {
  const summaryData = [
    { label: "Total de produits", value: totalItems },
    {
      label: "Détails du prix",
      value: `${actualPriceOfCart} €`,
    },
    {
      label: "Réduction",
      value: `-${actualPriceOfCart - totalPriceOfCartProducts} €`,
    },
    {
      label: "Frais de livraison",
      value: "Gratuit",
    },
  ];

  return summaryData.map(({ label, value }) => (
    <div key={label} className=" flex justify-between items-center p-0 ">
      <p className=" text-gray-600">{label}</p>
      <p className="text-lg">{value}</p>
    </div>
  ));
};
export default PriceDetailsCard;
