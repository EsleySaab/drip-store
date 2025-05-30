import FilterGroup from "@/components/FilterGroup"
import OrderBy from "./order-by"

const ProductsFilters = () => {
  return (
    <aside className="space-y-6">
      {/* Campo de ordenação */}
      <div className="hidden md:block">
        <OrderBy />
      </div>
      {/* Filtro */}
      <div className="bg-white md:w-[308px]  p-4 md:mt-10 mt-0">
        <h3 className="hidden md:block text-[16px] text-dark-gray-2 font-semibold mb-2 border-b border-gray-400 pb-4">
          Filtrar por
        </h3>
        <hr className="border-t border-white/50 mb-4" />
        <FilterGroup
          title="Tipo"
          inputType="checkbox"
          options={[
            {
              text: "Camisetas",
              value: "camisetas",
            },
            { text: "Tênis", value: "tenis" },
            { text: "Acessórios", value: "acessorios" },
          ]}
        />

        <FilterGroup
          title="Categoria"
          inputType="checkbox"
          options={[
            { text: "Esporte e lazer", value: "esporte-e-lazer" },
            { text: "Casual", value: "casual" },
            { text: "Utilitário", value: "utilitario" },
            { text: "Corrida", value: "corrida" },
          ]}
        />

        <FilterGroup
          title="Gênero"
          inputType="checkbox"
          options={[
            {
              text: "Masculino",
              value: "masculino",
            },
            { text: "Feminino", value: "feminino" },
            { text: "Unisex", value: "unisex" },
          ]}
        />

        <FilterGroup
          title="Estado"
          inputType="radio"
          options={[
            { text: "Novo", value: "novo" },
            { text: "Usado", value: "usado" },
          ]}
        />
      </div>
    </aside>
  )
}

export default ProductsFilters
