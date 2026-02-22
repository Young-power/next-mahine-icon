# next-mahine-icon

<p align="center">
  <img
    src="https://raw.githubusercontent.com/Young-power/next-mahine-icon/main/public/assets/logo2.png"
    width="300"
    alt="Next Mahine RSC Inspector Logo"
  />
</p>
**Server-first SVG icons for Next.js — zero client JS.**

`next-mahine-icon` is an SVG icon library **designed from the ground up for Next.js Server Components**.  
No `"use client"`, no hydration, no unnecessary runtime.

---

## ✨ Why `next-mahine-icon` exists

Many icon libraries **work** in Server Components…  
but **none are truly designed for them**.

`next-mahine-icon` is different:

- ✅ **Server Components first**
- ✅ React used **only for typing**
- ✅ **Zero JavaScript** added to the client
- ✅ SVG rendered **on the server**
- ✅ Perfect **tree-shaking**
- ✅ Compatible with TailwindCSS and any CSS library

It’s the **first Next.js icon library** built for Server Components from the start. 🚀

---

## 🚀 Installation

```bash
pnpm add next-mahine-icon
# or
npm install next-mahine-icon
# or
yarn add next-mahine-icon

🛠️ Usage
Import an icon
import { Search, Plus, X } from "next-mahine-icon";

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Search width={30} height={30} className="text-blue-500" />
      <Plus   width={30} height={30} className="text-green-500" />
      <X   width={30} height={30}  className=" text-red-500" />
    </div>
  );
}

Size and styling

Using width / height props:

<Search width={24} height={24} />


💡 next-mahine-icon is lightweight, fast, and modern — perfect for Next.js 13+ Server Components


MIT License

Copyright (c) 2026 Mahaman Mahine Kamagaté

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

Built on top of Lucide React, reimagined for Next.js Server Components.
This library is created and maintained by Mahine Kamagaté






👤 Author

Mahaman Mahine Kamagaté
Web & Mobile Developer · Creator of Libraries for the JavaScript Ecosystem
From Côte d’Ivoire 🇨🇮

GitHub: https://github.com/Young-power

Portfolio: https://my-portfolio-one-livid-10.vercel.app

Facebook: https://www.facebook.com/mahaman.kamagate.50/

Buy me a coffee: https://buymeacoffee.com/mahine
