#!/usr/bin/env node

import chalk from 'chalk';

if (process.env.CI) process.exit(0);

console.log(`
${chalk.bold.hex('#111827')('╭──────────────────────────────────────────────────────────────╮')}
${chalk.bold.hex('#111827')('│')}  ${chalk.bold.hex('#3b82f6')('NEXT-MAHINE-ICON')} ${chalk.hex('#6b7280')('·')} ${chalk.bold.white('The Zero-JS Icon System')}  ${chalk.bold.hex('#111827')('│')}
${chalk.bold.hex('#111827')('╰──────────────────────────────────────────────────────────────╯')}

${chalk.hex('#10b981')(`
   ███╗   ██╗███╗   ███╗██╗    Next.js 15+
   ████╗  ██║████╗ ████║██║    Server-First
   ██╔██╗ ██║██╔████╔██║██║    Zero JavaScript
   ██║╚██╗██║██║╚██╔╝██║██║    RSC Native
   ██║ ╚████║██║ ╚═╝ ██║██║    Bundle Free
   ╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝    Production Ready
`)}

${chalk.hex('#374151')('┌──────────────────────────────────────────────────────────────┐')}
${chalk.bold.hex('#3b82f6')('│  PERFORMANCE METRICS (vs Traditional Icon Libraries)     │')}
${chalk.hex('#374151')('├──────────────────────────────────────────────────────────────┤')}
${chalk.hex('#374151')('│')} ${chalk.green('✓ 0KB')} ${chalk.white('Client JavaScript')} ${chalk.dim('·····················')} ${chalk.red('× 15-50KB')} ${chalk.hex('#374151')('│')}
${chalk.hex('#374151')('│')} ${chalk.green('✓ 0ms')} ${chalk.white('Hydration Time')} ${chalk.dim('·························')} ${chalk.red('× 10-100ms')} ${chalk.hex('#374151')('│')}
${chalk.hex('#374151')('│')} ${chalk.green('✓ 100%')} ${chalk.white('Lighthouse Score')} ${chalk.dim('······················')} ${chalk.red('▼ 85-95%')} ${chalk.hex('#374151')('│')}
${chalk.hex('#374151')('│')} ${chalk.green('✓ ∞')} ${chalk.white('Concurrent Renders')} ${chalk.dim('·······················')} ${chalk.red('⚠ Limited')} ${chalk.hex('#374151')('│')}
${chalk.hex('#374151')('└──────────────────────────────────────────────────────────────┘')}

${chalk.hex('#6b7280')('├──')} ${chalk.bold.hex('#10b981')('SERVER COMPONENTS')}
${chalk.dim('│   Icons render during build/SSR, ship as pure HTML')}

${chalk.hex('#6b7280')('├──')} ${chalk.bold.hex('#10b981')('NO CLIENT BUNDLE')}
${chalk.dim('│   Zero impact on Core Web Vitals, perfect scores guaranteed')}

${chalk.hex('#6b7280')('├──')} ${chalk.bold.hex('#10b981')('STREAMING READY')}
${chalk.dim('│   Works with Suspense boundaries and partial hydration')}

${chalk.hex('#6b7280')('├──')} ${chalk.bold.hex('#10b981')('TREE SHAKABLE')}
${chalk.dim('│   Only the icons you use are included in the bundle')}

${chalk.hex('#6b7280')('└──')} ${chalk.bold.hex('#10b981')('TYPE SAFE')}
${chalk.dim('    Full TypeScript support with autocomplete')}

${chalk.hex('#374151')('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')}

${chalk.bold.white('QUICK START')}
${chalk.dim('// app/page.js')}
${chalk.cyan('import')} ${chalk.white('{')} ${chalk.yellow('Icon }')} ${chalk.cyan("from")} ${chalk.green("'next-mahine-icon'")}
${chalk.cyan('export default')} ${chalk.white('function')} ${chalk.yellow('Page()')} ${chalk.white('{')}
${chalk.white('  return')} ${chalk.yellow(' <ArrowRight width={25} height={25} color="#3b82f6" or className="text-blue-500" />')}
${chalk.white('}')}

${chalk.hex('#374151')('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')}


${chalk.dim('📚')} ${chalk.underline.hex('#3b82f6')('https://nmi.mahine.dev/docs')}
${chalk.dim('🐙')} ${chalk.underline.hex('#3b82f6')('https://github.com/mahine/nmi')}
${chalk.dim('👤')} ${chalk.underline.hex('#3b82f6')('https://mahine.dev')}

${chalk.dim.hex('#6b7280')('"The first icon library designed for the RSC era."')}
`);