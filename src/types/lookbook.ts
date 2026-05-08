export type LookbookSlide = 
  | { type: 'intro'; title: string; subtitle: string }
  | { type: 'brand-story'; title: string }
  | { 
      type: 'split-right' | 'split-left'; 
      modelImage: string; 
      productImage: string; 
      productName: string; 
      productSubtitle: string; 
      productPrice: string; 
      originalPrice: string; 
    };
