// "use client";

// import { motion } from "framer-motion";
// import { Star, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Product } from "@/types/product";
// import Link from "next/link";
// import { useCart } from "@/contexts/CartContext";
// import { urlFor } from "@/lib/sanity/client";

// interface ProductCardProps {
//   product: Product;
//   index?: number;
// }

// export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
//   const { addToCart } = useCart();

//   // Get image URL - handle both Sanity image and fallback
//   const imageUrl = product.image?.asset?.url
//     ? urlFor(product.image).width(400).height(400).url()
//     : product.images?.[0]?.asset?.url
//     ? urlFor(product.images[0]).width(400).height(400).url()
//     : "/placeholder-product.jpg";

//   // Get default size from variants
//   const defaultSize = product.variants?.find((v) => v.isDefault)?.size ||
//     product.variants?.[0]?.size ||
//     "50ml";

//   // Get heart notes for display
//   const heartNotes = product.fragranceNotes?.middle || [];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-luxury transition-all duration-300"
//     >
//       <Link href={`/product/${product.slug}`}>
//         <div className="relative aspect-[2/3] overflow-hidden bg-white">
//           <img
//             src={imageUrl}
//             alt={product.image?.alt || product.name}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           {product.compareAtPrice && product.compareAtPrice > product.price && (
//             <div className="absolute top-4 right-4 bg-crimson text-white px-3 py-1 rounded-full text-sm font-medium">
//               Sale
//             </div>
//           )}
//           {product.isNewArrival && (
//             <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
//               New
//             </div>
//           )}
//           {!product.inStock && (
//             <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//               <span className="text-white font-medium">Out of Stock</span>
//             </div>
//           )}
//         </div>
//       </Link>

//       <div className="p-4">
//         <Link href={`/product/${product.slug}`}>
//           <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-gold transition-smooth">
//             {product.name}
//           </h3>
//         </Link>

//         <div className="flex items-center gap-1 mb-2">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               className={`h-4 w-4 ${
//                 i < 4 ? "fill-gold text-gold" : "text-muted-foreground/30"
//               }`}
//             />
//           ))}
//           <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
//         </div>

//         {heartNotes.length > 0 && (
//           <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
//             {heartNotes.join(", ")}
//           </p>
//         )}

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="text-xl font-bold text-primary">
//               PKR {product.price}
//             </span>
//             {product.compareAtPrice && product.compareAtPrice > product.price && (
//               <span className="text-sm text-muted-foreground line-through">
//                 PKR {product.compareAtPrice}
//               </span>
//             )}
//           </div>
//           <Button
//             size="sm"
//             onClick={(e) => {
//               e.preventDefault();
//               if (product.inStock) {
//                 addToCart(product, defaultSize);
//               }
//             }}
//             disabled={!product.inStock}
//             className="bg-primary hover:bg-primary/90"
//           >
//             <ShoppingCart className="h-4 w-4 mr-1" />
//             Add
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { urlFor } from "@/lib/sanity/client";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get primary image URL
  const primaryImageUrl = product.image?.asset?.url
    ? urlFor(product.image).width(500).url()
    : product.images?.[0]?.asset?.url
    ? urlFor(product.images[0]).width(500).url()
    : "/placeholder-product.jpg";

  // Get secondary image URL (second image if available)
  const secondaryImageUrl = product.images?.[1]?.asset?.url
    ? urlFor(product.images[1]).width(500).url()
    : primaryImageUrl;

  // Get default size from variants
  const defaultSize = product.variants?.find((v) => v.isDefault)?.size ||
    product.variants?.[0]?.size ||
    "50ml";

  // Get heart notes for display
  const heartNotes = product.fragranceNotes?.middle || [];

  // Calculate discount percentage
  const discountPercent = product.compareAtPrice && product.compareAtPrice > product.price
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative w-full max-w-[340px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-card border-2 border-border/50 hover:border-gold/50 shadow-lg hover:shadow-xl hover:shadow-gold/10 transition-all duration-500">

        {/* Image Container - 3:4 Aspect Ratio */}
        <Link href={`/product/${product.slug}`}>
          <div className="relative aspect-[3/4] overflow-hidden bg-white group-hover:bg-muted/10 transition-colors duration-500">
            {/* Primary Image */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={primaryImageUrl}
                alt={product.image?.alt || product.name}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${isHovered && secondaryImageUrl !== primaryImageUrl ? 'opacity-0' : 'opacity-100 scale-100 group-hover:scale-110'}`}
              />
            </div>

            {/* Secondary Image (on hover) */}
            {secondaryImageUrl !== primaryImageUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={secondaryImageUrl}
                  alt={`Alternate view of ${product.name}`}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                  }`}
                />
              </div>
            )}

            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted/50 animate-pulse" />
            )}

            {/* Badges Container */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
              {/* New Badge */}
              {product.isNewArrival && (
                <div className="bg-gold text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  New
                </div>
              )}

              {/* Sale Badge */}
              {discountPercent > 0 && (
                <div className="bg-crimson text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm ml-auto">
                  -{discountPercent}%
                </div>
              )}
            </div>

            {/* Out of Stock Overlay */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center z-20">
                <span className="text-foreground font-display font-bold text-xl uppercase tracking-widest border-2 border-foreground px-4 py-2">
                  Sold Out
                </span>
              </div>
            )}

            {/* Quick View Overlay - Only shows button, doesn't darken whole image */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-black/20" />
              <Button 
                variant="secondary" 
                size="sm" 
                className="relative translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white/90 hover:bg-white text-foreground font-medium shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Quick View
              </Button>
            </div>
          </div>
        </Link>

        {/* Product Info - Compact Layout */}
        <div className="p-5 space-y-2">
          {/* Category */}
          {product.category && (
            <span className="inline-block text-xs text-gold font-semibold uppercase tracking-wider">
              {product.category}
            </span>
          )}
          
          {/* Product Name */}
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-display font-bold text-lg leading-tight line-clamp-1 group-hover:text-gold transition-colors duration-300">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < 4 ? "fill-gold text-gold" : "text-muted-foreground/30"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
          </div>

          {/* Heart Notes */}
          {heartNotes.length > 0 && (
            <p className="text-xs text-muted-foreground italic line-clamp-2 pt-1">
              {heartNotes.join(" · ")}
            </p>
          )}

          {/* Price Section */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold bg-gradient-to-r from-gold to-amber-600 bg-clip-text text-transparent">
              PKR {product.price}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-xs text-muted-foreground line-through">
                PKR {product.compareAtPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              if (product.inStock) {
                addToCart(product, defaultSize);
              }
            }}
            disabled={!product.inStock}
            className="w-full bg-gradient-to-r from-gold/90 to-amber-600/90 hover:from-gold hover:to-amber-600 text-white font-semibold py-5 rounded-xl shadow-md hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-3 group/btn"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>

        {/* Bottom Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-gold/60 via-amber-500/60 to-gold/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};