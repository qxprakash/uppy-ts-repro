/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import type { Meta, Body } from '@uppy/core'
const uppy = new Uppy<Meta, Body>()
uppy.use(Dashboard<Meta,Body>)

const resultGetPlugin = uppy.getPlugin<Dashboard<Meta, Body>>('Dashboard')?.openModal()

console.log("log get plugin result -->", resultGetPlugin)