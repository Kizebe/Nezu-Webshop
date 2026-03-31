import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // Lekérjük a kategória adatait a slug alapján
  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', params.slug)
    .single()

  // Lekérjük a kategóriához tartozó termékeket
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', category?.id)

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <header className="mb-12 pt-8">
        <Link href="/" className="text-gray-500 text-xs uppercase tracking-widest hover:text-white transition-colors">
          ← Vissza a központhoz
        </Link>
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mt-4">
          {category?.name}
        </h1>
        <div className="h-1 w-20 bg-yellow-400 mt-2"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="bg-neutral-900 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group">
            <div>
              <div className="aspect-video bg-black rounded-2xl mb-4 overflow-hidden">
                <img src={product.image_url} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-2xl font-black">{product.price} Ft</span>
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-xs active:scale-95 transition-all">
                Részletek
              </button>
            </div>
          </div>
        ))}
      </div>

      {products?.length === 0 && (
        <div className="text-center py-20 opacity-20 uppercase tracking-widest text-sm">
          A rituálé eszközei hamarosan érkeznek Yiwu-ból...
        </div>
      )}
    </main>
  )
}
