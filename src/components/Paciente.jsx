const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">Everth</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">correo@correo.com</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha alta: {''}
            <span className="font-normal normal-case">05 de Abril 2022</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, ad repellat! Assumenda enim molestias iure, veritatis unde quae ea ut doloremque voluptates voluptate, autem a eius voluptatum reprehenderit quod est.</span>
          </p>
        </div>
  )
}

export default Paciente