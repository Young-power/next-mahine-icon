# next-mahine-icon

**Server-first SVG icons for Next.js — zero client JS.**

`next-mahine-icon` est une librairie d’icônes SVG **pensée dès le départ pour les Server Components** de Next.js.  
Pas de `"use client"`, pas d’hydratation, pas de runtime inutile.

---

## ✨ Pourquoi `next-mahine-icon` existe

Beaucoup de librairies d’icônes **fonctionnent** dans les Server Components…  
mais **aucune n’est réellement conçue pour eux**.

`next-mahine-icon` est différente :

- ✅ Server Components **first**
- ✅ React utilisé **uniquement pour les types**
- ✅ **Zéro JavaScript** ajouté au client
- ✅ SVG rendus **côté serveur**
- ✅ Tree-shaking parfait

---

## 🚀 Installation

```bash
pnpm add next-mahine-icon
# ou
npm install next-mahine-icon




### Size

Use width / height props or Tailwind `w-* h-*` utilities.

```tsx
<Search className="w-4 h-4 text-red-500" />
<Search width={16} height={16} />

