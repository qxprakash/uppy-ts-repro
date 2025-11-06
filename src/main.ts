/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { Meta, Body } from '@uppy/core'
const uppy = new Uppy<Meta, Body>()
uppy.use(Dashboard<Meta,Body>)

// Repro: TS2339 ("Property 'openModal' does not exist on type 'UnknownPlugin<...>'")
const resultGetPlugin = uppy.getPlugin<Dashboard<Meta, Body>>('Dashboard')?.openModal()

console.log(resultGetPlugin)