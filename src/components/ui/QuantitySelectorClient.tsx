import { useState } from 'react';

interface QuantitySelectorClientProps {
  maxTickets?: number;
  onQuantityChange?: (quantity: number) => void;
  initialQuantity?: number;
}

export default function QuantitySelectorClient({ 
  maxTickets = 10, 
  onQuantityChange, 
  initialQuantity = 1 
}: QuantitySelectorClientProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    if (quantity < maxTickets) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onQuantityChange?.(newQty);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onQuantityChange?.(newQty);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setQuantity(1);
      onQuantityChange?.(1);
    } else if (value > maxTickets) {
      setQuantity(maxTickets);
      onQuantityChange?.(maxTickets);
    } else {
      setQuantity(value);
      onQuantityChange?.(value);
    }
  };

  return (
    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
      <button
        type="button"
        onClick={decrement}
        className="h-12 w-12 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-xl font-bold text-white"
        disabled={quantity <= 1}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="w-20 h-12 text-2xl font-bold text-center bg-transparent border-0 focus:outline-none focus:ring-4 focus:ring-accent-gold/30 rounded-xl text-white"
        min={1}
        max={maxTickets}
      />
      <button
        type="button"
        onClick={increment}
        className="h-12 w-12 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-xl font-bold text-white"
        disabled={quantity >= maxTickets}
      >
        +
      </button>
      <span className="text-sm text-white/70 ml-4">Max: {maxTickets}</span>
    </div>
  );
}

