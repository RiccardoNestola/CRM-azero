import DropdownMenu from './DropdownMenu';
const Table = ({ data, onDelete }) => {


    return (
        <div className="container mx-auto pt-8">
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-[#F0F0F0] text-left">
                            <th className="px-4 py-2">Nome</th>
                            <th className="px-4 py-2">Cognome</th>
                            <th className="px-4 py-2">Ruolo</th>
                            <th className="px-4 py-2">Mansione</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="bg-white border">
                                <td className="px-4">{item.nome}</td>
                                <td className="px-4">{item.cognome}</td>
                                <td className="px-4">{item.ruolo}</td>
                                <td className="px-4">{item.mansione}</td>
                                <td className="px-4">{item.email}</td>
                                <td className="">


                                    <DropdownMenu onDelete={() => onDelete(item.id)} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
