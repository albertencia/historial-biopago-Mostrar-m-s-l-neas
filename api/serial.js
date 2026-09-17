export default async function handler(req, res) {

  const serial = req.query.serial;

  const url =
    `https://erp.ex-cle.com/api/resource/Bio%20Service%20Order?fields=["name","ticket_number","bio_serial","service_status"]&filters=[["bio_serial","=","${serial}"]]`;

  try {

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    res.status(200).json(datos);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

}
