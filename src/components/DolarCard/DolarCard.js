export default function DolarCard({ dolar }) {
  return (
    <>
      <div>
        <div>{dolar.nombre}</div>
        <div>
          {dolar.casa !== "solidario" && (
            <div>
              <div>Compra</div>
              <div>{dolar.compra}</div>
            </div>
          )}
          <div>
            <div>Venta</div>
            <div>{dolar.venta}</div>
          </div>
        </div>
      </div>
    </>
  );
}
