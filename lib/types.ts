export interface Produit {
  id: string;
  nom: string;
  slug: string;
  prix: number;
  image: string;
  description: string;
  categorie: string;
  stock: number;
}

export interface CartItem extends Produit {
  quantity: number;
}
