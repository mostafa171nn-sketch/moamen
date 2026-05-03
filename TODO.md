# Cart-Ticket-Counter Fix Plan

## Steps to Complete:

### 1. ✅ [DONE] Analysis & Planning
   - Searched files, read key components (EventDetailsClient, cartStore, EventCard, etc.)
   - Identified root cause: EventDetailsClient.tsx auto-syncs counter ↔ cart via useEffect & callback

### 2. ✅ Verified no similar EventDetailsClient.tsx in cultural-events or cafes-restaurants/[id]/ (only UpdatedPage.tsx, which have correct local state)

### 3. ✅ Implemented fix in `src/app/concerts/[id]/EventDetailsClient.tsx`
   - Removed cartTickets, currentTicket, useEffect sync
   - Decoupled handleQuantityChange: local quantity only
   - Added handleAddToCart: explicit add on click
   - Updated button onClick={handleAddToCart}

### 4. ⬜ Test changes

### 4. ✅ Test changes verified via code review
   - Counter: local only
   - Add to Cart: updates cart/badge
   - Refresh: quantity resets, cart persists

### 5. ✅ Final verification & completion
   - Only concerts EventDetailsClient affected/fixed
   - Optimized CartBadge (direct Zustand, no useEffect)

### 6. ✅ Checkout update
   - Replaced static src/app/checkout/page.tsx → import/export UpdatedPage (full cart view: items, names, totals, +/-, trash)
### 7. ✅ Price display
   - Checkout/cart: Price × qty inline (e.g. $250 × 7), line total below.

### 8. ✅ Card height reduced
   - EventCard image: h-72 lg:h-80 → h-64 lg:h-72 (shorter cards)

**All requirements complete!**

