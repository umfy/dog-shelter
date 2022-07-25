/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from '$fresh/server.ts'
import manifest from './fresh.gen.ts'

import { config, setup } from '@twind'
import { virtualSheet } from 'twind/sheets'

import { DB } from 'https://deno.land/x/sqlite/mod.ts'
export const db = new DB('monolith.db')

/*
import { connect } from "https://deno.land/x/cotton@v0.7.2/mod.ts";
The requested module './levels.ts' does not provide an export named 'LevelName'

const db = await connect({
  type: "sqlite",
  database: "db.sqlite3",
});
*/

// Gives error 
// import { Database, SQLite3Connector } from 'https://deno.land/x/denodb/mod.ts';

// db operations seem instant and non-blocking

const sheet = virtualSheet()
sheet.reset()
setup({ ...config, sheet })

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get('twind') as unknown[] | null
  sheet.reset(snapshot || undefined)
  render()
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target)
  const newSnapshot = sheet.reset()
  ctx.state.set('twind', newSnapshot)
}

// Open a database
// db.query(`
//   CREATE TABLE IF NOT EXISTS Sections (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     title TEXT,
//     description TEXT,
//     metadata TEXT
//   )
// `)

// db.query(
//   "INSERT INTO Sections (name, title, description, metadata) VALUES ('mainText', 'Opis', 'to jest tresc', '16 lipca')"
// )

// Print out data in table
// for (const item of db.query('SELECT * FROM Sections')) {
//   console.log(item)
// }

// Close connection
// db.close()
await start(manifest, { render })

