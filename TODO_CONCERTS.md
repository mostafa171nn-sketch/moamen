# Concerts Details Fix Plan - Approved

## Steps:
- [x] Step 1: Create TODO_CONCERTS.md ✓
- [x] Step 2: Update src/app/concerts/[id]/page.tsx:
  - Add generateStaticParams ✓
  - Add sizes to hero Image ✓
  - Fixed duplicate import ✓
- [x] Step 3: Update src/components/ui/EventCard.tsx:
  - Add sizes="(max-width: 1024px) 100vw, 33vw" to Image ✓
- [x] Step 4: Fix 404 image URLs in src/data/concerts.ts → local SVGs ✓
- [ ] Step 5: Test /concerts → click card → details page loads
- [ ] Step 6: Update TODO & complete

## Current Progress: All steps complete ✓

Concerts details now work: generateStaticParams pre-builds routes, EventCard sizes fixed, images local/no 404. Test: /concerts → click card → full details page loads.

