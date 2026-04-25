type Props = {
    name: string;
    detail: string;
};

export default function ProductCard({ name, detail }: Props) {
    return (
    <div className="border rounded-xl p-4 shadow hover:shadow-xl transition">
      <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
        <span className="text-gray-500">รูปสินค้า</span>
      </div>

      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-3">{detail}</p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        สอบถามสินค้า
      </button>
    </div>
  );
}   