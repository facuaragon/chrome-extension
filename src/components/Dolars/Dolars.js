import DolarCard from "../DolarCard/DolarCard";

export default function Dolares({ dolars }) {
  return (
    <>
      {dolars.map((dolar, i) => (
        <DolarCard key={i} dolar={dolar} />
      ))}
    </>
  );
}
